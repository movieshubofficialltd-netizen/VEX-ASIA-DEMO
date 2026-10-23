import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform vec2 u_mouse;
  uniform float u_velocity;
  uniform float u_is_mobile;
  varying vec2 vUv;

  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187,
                        0.366025403784439,
                       -0.577350269189626,
                        0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
          + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
    m = m * m;
    m = m * m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  // Mobile-adaptive FBM: 2 octaves on mobile to preserve 60fps, 4 on desktop
  float fbm(vec2 p) {
    float total = 0.0;
    float amp = 0.55;
    float freq = 1.0;
    
    // 1st & 2nd octave always
    total += snoise(p * freq) * amp;
    p += vec2(0.35, 0.22);
    freq *= 2.05;
    amp *= 0.48;
    total += snoise(p * freq) * amp;

    // 3rd & 4th octaves only on desktop
    if (u_is_mobile < 0.5) {
      p += vec2(0.35, 0.22);
      freq *= 2.05;
      amp *= 0.48;
      total += snoise(p * freq) * amp;

      p += vec2(0.35, 0.22);
      freq *= 2.05;
      amp *= 0.48;
      total += snoise(p * freq) * amp;
    }
    return total;
  }

  float getLiquidHeight(vec2 uv) {
    float t = u_time * 0.25;
    vec2 p = uv * 2.2;
    
    // Subtle pointer interaction
    vec2 m = u_mouse;
    float dist = length(uv - m);
    float ripple = sin(dist * 22.0 - u_time * 4.0) * exp(-dist * 4.5);
    p += (uv - m) * ripple * (0.3 + u_velocity * 0.45);

    vec2 q = vec2(
      fbm(p + vec2(t * 0.35, t * 0.15)),
      fbm(p + vec2(t * 0.2, t * 0.4))
    );

    vec2 r = vec2(
      fbm(p + 1.8 * q + vec2(1.7, 9.2) + 0.15 * t),
      fbm(p + 1.8 * q + vec2(8.3, 2.8) + 0.12 * t)
    );

    return fbm(p + 2.0 * r);
  }

  void main() {
    vec2 uv = (vUv * 2.0 - 1.0);
    uv.x *= u_resolution.x / u_resolution.y;

    vec2 m = (u_mouse * 2.0 - 1.0);
    m.x *= u_resolution.x / u_resolution.y;

    float eps = (u_is_mobile > 0.5) ? 0.012 : 0.008;
    float h = getLiquidHeight(uv);
    float hx = getLiquidHeight(uv + vec2(eps, 0.0)) - h;
    float hy = getLiquidHeight(uv + vec2(0.0, eps)) - h;

    vec3 normal = normalize(vec3(-hx, -hy, eps * 3.5));

    vec3 lightDir1 = normalize(vec3(0.5, 0.7, 0.8));
    vec3 lightDir2 = normalize(vec3(-0.6, -0.4, 0.6));
    vec3 viewDir = vec3(0.0, 0.0, 1.0);

    float diff1 = max(dot(normal, lightDir1), 0.0);
    float diff2 = max(dot(normal, lightDir2), 0.0);

    vec3 half1 = normalize(lightDir1 + viewDir);
    float spec1 = pow(max(dot(normal, half1), 0.0), 38.0);

    vec3 half2 = normalize(lightDir2 + viewDir);
    float spec2 = pow(max(dot(normal, half2), 0.0), 24.0);

    float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.0);

    vec3 obsidian = vec3(0.038, 0.042, 0.038);
    vec3 darkEmerald = vec3(0.05, 0.32, 0.12);
    vec3 neonLime = vec3(0.714, 1.0, 0.231);
    vec3 chromeHighlight = vec3(0.92, 1.0, 0.88);

    float tVal = smoothstep(-0.4, 0.75, h);
    vec3 fluidColor = mix(obsidian, darkEmerald, tVal);
    fluidColor = mix(fluidColor, neonLime, pow(tVal, 2.8) * 0.95);

    vec3 finalColor = fluidColor * (0.35 + diff1 * 0.7 + diff2 * 0.3);
    finalColor += neonLime * spec1 * 1.3;
    finalColor += chromeHighlight * spec2 * 0.85;
    finalColor += neonLime * fresnel * 0.6;

    float distFromCenter = length(vUv - 0.5);
    float vignette = smoothstep(0.85, 0.25, distFromCenter);
    finalColor *= (0.7 + 0.3 * vignette);
    finalColor = clamp(finalColor, 0.0, 1.0);

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

export const HeroShader: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect mobile / touch devices
    const isMobile =
      typeof window !== 'undefined' &&
      (window.innerWidth < 768 || 'ontouchstart' in window || navigator.maxTouchPoints > 0);

    // Software WebGL check
    const isSoftwareGl = (() => {
      try {
        const gl =
          (document.createElement('canvas').getContext('webgl2') as WebGL2RenderingContext) ||
          (document.createElement('canvas').getContext('webgl') as WebGLRenderingContext);
        if (!gl) return true;
        const ext = gl.getExtension('WEBGL_debug_renderer_info');
        const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
        const gpu = String(gl.getParameter(param));
        gl.getExtension('WEBGL_lose_context')?.loseContext();
        return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
      } catch {
        return false;
      }
    })();

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl && !isMobile,
      powerPreference: 'high-performance',
      alpha: true,
      stencil: false,
      depth: false,
    });

    // 1. Mobile Performance Optimization: devicePixelRatio capped at 1.0 on mobile, 1.5 on desktop
    const pixelRatio = isSoftwareGl || isMobile ? 1.0 : Math.min(window.devicePixelRatio || 1, 1.5);
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const mousePos = { x: 0.5, y: 0.5 };
    const currentMouse = { x: 0.5, y: 0.5 };
    let lastMouse = { x: 0.5, y: 0.5 };
    let mouseVelocity = 0;

    const uniforms = {
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector2(container.clientWidth, container.clientHeight) },
      u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
      u_velocity: { value: 0 },
      u_is_mobile: { value: isMobile ? 1.0 : 0.0 },
    };

    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      depthWrite: false,
      depthTest: false,
    });

    const quad = new THREE.Mesh(geometry, material);
    scene.add(quad);

    // 3. Throttled Pointer & Touch Handling to avoid mobile CPU overload
    let lastPointerUpdate = 0;
    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const now = performance.now();
      // On mobile/touch devices, throttle events to max 30hz (every 33ms)
      if (isMobile && now - lastPointerUpdate < 33) return;
      lastPointerUpdate = now;

      const rect = container.getBoundingClientRect();
      let clientX = 0;
      let clientY = 0;

      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ('clientX' in e) {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      const x = (clientX - rect.left) / rect.width;
      const y = 1.0 - (clientY - rect.top) / rect.height;

      mousePos.x = THREE.MathUtils.clamp(x, 0, 1);
      mousePos.y = THREE.MathUtils.clamp(y, 0, 1);
    };

    // Only attach desktop mousemove if not a coarse touch-only device
    if (!isMobile) {
      window.addEventListener('mousemove', handlePointerMove, { passive: true });
    } else {
      // Use throttled touchmove for mobile
      window.addEventListener('touchmove', handlePointerMove, { passive: true });
    }

    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      const newIsMobile = window.innerWidth < 768;
      const newRatio = newIsMobile ? 1.0 : Math.min(window.devicePixelRatio || 1, 1.5);
      renderer.setPixelRatio(newRatio);
      renderer.setSize(width, height);
      uniforms.u_resolution.value.set(width, height);
      uniforms.u_is_mobile.value = newIsMobile ? 1.0 : 0.0;
    };

    window.addEventListener('resize', handleResize);

    // Visibility Observer: Pause render loop when scrolled offscreen to save mobile battery and GPU
    let isVisible = true;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return; // Skip work when offscreen!

      const dt = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      const dampingFactor = 1.0 - Math.exp(-8.0 * dt);
      currentMouse.x += (mousePos.x - currentMouse.x) * dampingFactor;
      currentMouse.y += (mousePos.y - currentMouse.y) * dampingFactor;

      const dx = currentMouse.x - lastMouse.x;
      const dy = currentMouse.y - lastMouse.y;
      const rawVel = Math.sqrt(dx * dx + dy * dy) / (dt || 0.016);
      mouseVelocity += (rawVel - mouseVelocity) * (1.0 - Math.exp(-5.0 * dt));
      lastMouse = { ...currentMouse };

      uniforms.u_time.value = currentTime * 0.001;
      uniforms.u_mouse.value.set(currentMouse.x, currentMouse.y);
      uniforms.u_velocity.value = Math.min(mouseVelocity, 2.5);

      renderer.render(scene, camera);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('resize', handleResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none w-full h-full overflow-hidden z-0 will-change-transform"
      aria-hidden="true"
    />
  );
};
