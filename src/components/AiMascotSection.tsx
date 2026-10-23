import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { Check, Bot, Send, Clock } from 'lucide-react';

export const AiMascotSection: React.FC = () => {
  const canvasMountRef = useRef<HTMLDivElement>(null);

  // Interactive Live Chatbot Sandbox state
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'bot'; text: string; time: string }>>([
    {
      sender: 'bot',
      text: "Greetings! I am VEX-One, the autonomous concierge for VEX ASIA. I can route inquiries across our 3 branches: Jagoron TV (Online Media), VOX ANIMATION (Anime & Manga), and V-VORTEX (Creative Agency & IT). What division would you like to explore?",
      time: 'Just now',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Quick preset questions reflecting the 3 branches
  const sampleQuestions = [
    'Tell me about Jagoron TV broadcasting',
    'How does VOX produce original anime & manga?',
    'What videography & IT services does V-VORTEX offer?',
  ];

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    const newMsg = { sender: 'user' as const, text, time: 'Just now' };
    setMessages((prev) => [...prev, newMsg]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      let botReply = "VEX ASIA unites three specialized powerhouses: Jagoron TV (Online Media Cell), VOX ANIMATION (Anime & Manga Studio), and V-VORTEX (Creative Agency & IT). How can our parent network serve your organization?";
      const lower = text.toLowerCase();

      if (lower.includes('jagoron') || lower.includes('news') || lower.includes('broadcast') || lower.includes('media')) {
        botReply = "Jagoron TV is our Online Media Cell, operating 24/7 digital broadcasting, investigative journalism desks, and online news video reaching over 45M+ monthly digital viewers.";
      } else if (lower.includes('vox') || lower.includes('anime') || lower.includes('manga') || lower.includes('animation') || lower.includes('art')) {
        botReply = "VOX ANIMATION is our dedicated Anime & Manga Studio. We handle full-pipeline 2D/3D anime productions, serialized manga publishing, character bibles, and global IP licensing with 12 active series in production.";
      } else if (lower.includes('vortex') || lower.includes('video') || lower.includes('editing') || lower.includes('videography') || lower.includes('marketing') || lower.includes('it')) {
        botReply = "V-VORTEX is our Creative Agency & IT Sector powerhouse. We produce commercial cinema videography, rapid-turnaround video editing, performance marketing (4.2x ROAS), and custom WebGL/IT web platforms.";
      }

      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: botReply, time: 'Just now' },
      ]);
      setIsTyping(false);
    }, 700);
  };

  // Three.js Procedural 3D Robotic Mascot with "VEX ASIA" chest logo
  useEffect(() => {
    const container = canvasMountRef.current;
    if (!container) return;

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
    const camera = new THREE.PerspectiveCamera(
      38,
      container.clientWidth / container.clientHeight,
      0.1,
      50
    );
    camera.position.set(0, 0.4, 4.2);

    const isMobile =
      typeof window !== 'undefined' &&
      (window.innerWidth < 768 || 'ontouchstart' in window || navigator.maxTouchPoints > 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl && !isMobile,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    renderer.setPixelRatio(isSoftwareGl || isMobile ? 1.0 : Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    pmremGenerator.dispose();

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    keyLight.position.set(3, 4, 3);
    scene.add(keyLight);

    const fillLight = new THREE.HemisphereLight(0xb6ff3b, 0x111611, 1.2);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xb6ff3b, 2.0);
    rimLight.position.set(-3, -1, -2);
    scene.add(rimLight);

    const badgeCanvas = document.createElement('canvas');
    badgeCanvas.width = 512;
    badgeCanvas.height = 256;
    const ctx = badgeCanvas.getContext('2d')!;
    ctx.fillStyle = '#0a0d0a';
    ctx.fillRect(0, 0, 512, 256);

    ctx.strokeStyle = '#b6ff3b';
    ctx.lineWidth = 12;
    ctx.strokeRect(20, 20, 472, 216);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 90px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('VEX', 190, 128);

    ctx.fillStyle = '#b6ff3b';
    ctx.fillText('ASIA', 350, 128);

    const badgeTexture = new THREE.CanvasTexture(badgeCanvas);
    badgeTexture.colorSpace = THREE.SRGBColorSpace;
    badgeTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();

    const darkMetalMat = new THREE.MeshStandardMaterial({
      color: 0x141814,
      metalness: 0.88,
      roughness: 0.22,
    });

    const obsidianArmorMat = new THREE.MeshStandardMaterial({
      color: 0x080908,
      metalness: 0.45,
      roughness: 0.45,
    });

    const neonLimeMat = new THREE.MeshStandardMaterial({
      color: 0xb6ff3b,
      emissive: 0xb6ff3b,
      emissiveIntensity: 0.9,
      roughness: 0.15,
      metalness: 0.2,
    });

    const visorMat = new THREE.MeshStandardMaterial({
      color: 0x050605,
      roughness: 0.1,
      metalness: 0.95,
    });

    const badgeMat = new THREE.MeshStandardMaterial({
      map: badgeTexture,
      roughness: 0.3,
      metalness: 0.6,
      emissive: 0xb6ff3b,
      emissiveIntensity: 0.25,
    });

    const mascotGroup = new THREE.Group();

    // 1. Torso Chassis
    const torsoGeo = new THREE.CylinderGeometry(0.55, 0.42, 0.9, 32);
    const torsoMesh = new THREE.Mesh(torsoGeo, darkMetalMat);
    torsoMesh.position.y = 0;
    mascotGroup.add(torsoMesh);

    // 2. Chest Armor Plate with "VEX ASIA" Logo
    const chestPlateGeo = new THREE.BoxGeometry(0.68, 0.36, 0.15);
    const chestPlateMesh = new THREE.Mesh(chestPlateGeo, badgeMat);
    chestPlateMesh.position.set(0, 0.12, 0.48);
    mascotGroup.add(chestPlateMesh);

    // 3. Neon Core Ring
    const coreTorusGeo = new THREE.TorusGeometry(0.48, 0.04, 16, 32);
    const coreTorusMesh = new THREE.Mesh(coreTorusGeo, neonLimeMat);
    coreTorusMesh.rotation.x = Math.PI / 2;
    coreTorusMesh.position.y = -0.15;
    mascotGroup.add(coreTorusMesh);

    // 4. Cybernetic Neck Collar
    const neckGeo = new THREE.CylinderGeometry(0.25, 0.3, 0.2, 24);
    const neckMesh = new THREE.Mesh(neckGeo, obsidianArmorMat);
    neckMesh.position.y = 0.52;
    mascotGroup.add(neckMesh);

    // 5. Head Unit Group
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 0.9, 0);

    const headGeo = new THREE.SphereGeometry(0.48, 32, 24);
    headGeo.scale(1.1, 0.95, 1.0);
    const headMesh = new THREE.Mesh(headGeo, darkMetalMat);
    headGroup.add(headMesh);

    const visorGeo = new THREE.SphereGeometry(0.42, 32, 16, 0, Math.PI);
    visorGeo.scale(1.05, 0.65, 0.85);
    const visorMesh = new THREE.Mesh(visorGeo, visorMat);
    visorMesh.rotation.x = Math.PI / 2;
    visorMesh.position.set(0, 0.02, 0.22);
    headGroup.add(visorMesh);

    const eyeGeo = new THREE.CylinderGeometry(0.07, 0.07, 0.08, 16);
    eyeGeo.rotateX(Math.PI / 2);

    const leftEye = new THREE.Mesh(eyeGeo, neonLimeMat);
    leftEye.position.set(-0.16, 0.04, 0.45);
    headGroup.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeo, neonLimeMat);
    rightEye.position.set(0.16, 0.04, 0.45);
    headGroup.add(rightEye);

    const antennaGeo = new THREE.CylinderGeometry(0.015, 0.025, 0.35, 12);
    const antennaMesh = new THREE.Mesh(antennaGeo, darkMetalMat);
    antennaMesh.position.set(0, 0.55, -0.05);
    headGroup.add(antennaMesh);

    const tipOrbGeo = new THREE.SphereGeometry(0.065, 16, 16);
    const tipOrbMesh = new THREE.Mesh(tipOrbGeo, neonLimeMat);
    tipOrbMesh.position.set(0, 0.72, -0.05);
    headGroup.add(tipOrbMesh);

    const earGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.08, 16);
    earGeo.rotateZ(Math.PI / 2);

    const leftEar = new THREE.Mesh(earGeo, obsidianArmorMat);
    leftEar.position.set(-0.54, 0.02, 0);
    headGroup.add(leftEar);

    const rightEar = new THREE.Mesh(earGeo, obsidianArmorMat);
    rightEar.position.set(0.54, 0.02, 0);
    headGroup.add(rightEar);

    mascotGroup.add(headGroup);

    // 6. Floating Base & Thruster
    const baseGeo = new THREE.ConeGeometry(0.4, 0.45, 32);
    baseGeo.rotateX(Math.PI);
    const baseMesh = new THREE.Mesh(baseGeo, darkMetalMat);
    baseMesh.position.y = -0.65;
    mascotGroup.add(baseMesh);

    const thrusterRingGeo = new THREE.TorusGeometry(0.32, 0.035, 16, 32);
    thrusterRingGeo.rotateX(Math.PI / 2);
    const thrusterRing = new THREE.Mesh(thrusterRingGeo, neonLimeMat);
    thrusterRing.position.y = -0.75;
    mascotGroup.add(thrusterRing);

    const shoulderGeo = new THREE.SphereGeometry(0.22, 16, 16);
    shoulderGeo.scale(0.8, 1.4, 1.0);

    const leftShoulder = new THREE.Mesh(shoulderGeo, obsidianArmorMat);
    leftShoulder.position.set(-0.75, 0.18, 0);
    leftShoulder.rotation.z = 0.25;
    mascotGroup.add(leftShoulder);

    const rightShoulder = new THREE.Mesh(shoulderGeo, obsidianArmorMat);
    rightShoulder.position.set(0.75, 0.18, 0);
    rightShoulder.rotation.z = -0.25;
    mascotGroup.add(rightShoulder);

    const shadowGeo = new THREE.PlaneGeometry(2.2, 2.2);
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 128;
    shadowCanvas.height = 128;
    const shadowCtx = shadowCanvas.getContext('2d')!;
    const grad = shadowCtx.createRadialGradient(64, 64, 10, 64, 64, 60);
    grad.addColorStop(0, 'rgba(0, 0, 0, 0.7)');
    grad.addColorStop(0.5, 'rgba(0, 0, 0, 0.3)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    shadowCtx.fillStyle = grad;
    shadowCtx.fillRect(0, 0, 128, 128);

    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      depthWrite: false,
      opacity: 0.55,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -1.25;
    scene.add(shadowMesh);

    scene.add(mascotGroup);

    const mouseNorm = { x: 0, y: 0 };
    const targetGaze = { x: 0, y: 0 };

    let lastGazeTime = 0;
    const handlePointer = (e: MouseEvent | TouchEvent) => {
      const now = performance.now();
      if (isMobile && now - lastGazeTime < 33) return;
      lastGazeTime = now;

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

      const x = (clientX - rect.left) / rect.width - 0.5;
      const y = (clientY - rect.top) / rect.height - 0.5;
      mouseNorm.x = THREE.MathUtils.clamp(x * 2, -1, 1);
      mouseNorm.y = THREE.MathUtils.clamp(y * 2, -1, 1);
    };

    if (!isMobile) {
      window.addEventListener('mousemove', handlePointer, { passive: true });
    } else {
      window.addEventListener('touchmove', handlePointer, { passive: true });
    }

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      const newIsMobile = window.innerWidth < 768;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(newIsMobile ? 1.0 : Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Pause rendering when mascot section is not in viewport
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

    let animId: number;
    let clock = new THREE.Clock();

    const tick = () => {
      animId = requestAnimationFrame(tick);
      if (!isVisible) return; // Save mobile CPU when not on screen

      const dt = clock.getDelta();
      const time = clock.getElapsedTime();

      const damp = 1.0 - Math.exp(-8.0 * dt);
      targetGaze.x += (mouseNorm.x - targetGaze.x) * damp;
      targetGaze.y += (mouseNorm.y - targetGaze.y) * damp;

      mascotGroup.position.y = Math.sin(time * 2.2) * 0.08;
      mascotGroup.rotation.y = Math.sin(time * 0.9) * 0.06;

      headGroup.rotation.y = targetGaze.x * 0.55;
      headGroup.rotation.x = -targetGaze.y * 0.35;

      const pulse = 1.0 + Math.sin(time * 6.0) * 0.06;
      thrusterRing.scale.set(pulse, pulse, 1.0);

      shadowMat.opacity = 0.55 - mascotGroup.position.y * 0.4;

      renderer.render(scene, camera);
    };

    animId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      window.removeEventListener('mousemove', handlePointer);
      window.removeEventListener('touchmove', handlePointer);
      window.removeEventListener('resize', handleResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      scene.clear();
      renderer.dispose();
      badgeTexture.dispose();
      shadowTex.dispose();
    };
  }, []);

  return (
    <section id="ai-mascot" className="py-24 sm:py-32 relative bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono-tech text-[#b6ff3b] tracking-widest uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b6ff3b]" />
            <span>// 04. NEXT-GEN AUTOMATION</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-black text-white tracking-tight uppercase mb-4">
            AI Chatbot integration
          </h2>
          <p className="text-lg sm:text-xl text-neutral-300 font-normal leading-relaxed">
            Better conversations. Less busywork. Connect your business with customers, around the clock.
          </p>
        </div>

        {/* Main Content Grid: Checklist + 3D Mascot Canvas + Live Interactive Chat Sandbox */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Core Value Propositions & Checklist */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-4">
              {/* Feature 1 */}
              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10 hover:border-[#b6ff3b]/40 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-[#b6ff3b]/10 border border-[#b6ff3b]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#b6ff3b] stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">
                      Boost Efficiency & Reduce Costs
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Automate up to 85% of viewer, production, and client inquiries across Jagoron TV, VOX ANIMATION, and V-VORTEX.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10 hover:border-[#b6ff3b]/40 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-[#b6ff3b]/10 border border-[#b6ff3b]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#b6ff3b] stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">
                      24/7 Customer Support Automation
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Instant, sub-second responses in 40+ languages connecting fans, news audiences, and corporate partners non-stop.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10 hover:border-[#b6ff3b]/40 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-[#b6ff3b]/10 border border-[#b6ff3b]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#b6ff3b] stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">
                      Seamless Platform Integration
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Embeds natively into WhatsApp, Discord, YouTube news desks, and agency CRM systems with encrypted data flow.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro stats strip */}
            <div className="p-4 rounded-xl bg-black/60 border border-white/10 grid grid-cols-2 gap-4 text-center">
              <div>
                <span className="text-lg font-display font-black text-[#b6ff3b]">
                  &lt; 280ms
                </span>
                <span className="text-[10px] font-mono-tech text-neutral-400 block uppercase">
                  Avg First Response
                </span>
              </div>
              <div>
                <span className="text-lg font-display font-black text-white">
                  3 Divisions
                </span>
                <span className="text-[10px] font-mono-tech text-neutral-400 block uppercase">
                  Unified AI Knowledge
                </span>
              </div>
            </div>
          </div>

          {/* Center Column: Interactive Procedural 3D Robotic Mascot with "VEX ASIA" on its chest */}
          <div className="lg:col-span-4 relative flex flex-col items-center">
            <div className="relative w-full h-[360px] sm:h-[440px] flex items-center justify-center">
              <div
                ref={canvasMountRef}
                className="w-full h-full cursor-grab active:cursor-grabbing"
                title="VEX-One Mascot: Move cursor to interact"
              />

              <div className="absolute bottom-2 px-3 py-1 rounded-full bg-black/70 border border-white/10 backdrop-blur-md text-[10px] font-mono-tech text-neutral-400 flex items-center gap-2 pointer-events-none">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b6ff3b] animate-ping" />
                <span>VEX-ONE CONGLOMERATE MASCOT</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive AI Chatbot Sandbox Widget */}
          <div className="lg:col-span-4 rounded-2xl bg-neutral-900/80 border border-white/10 p-5 backdrop-blur-md flex flex-col h-[460px] justify-between shadow-2xl">
            {/* Chatbot Header */}
            <div className="flex items-center justify-between pb-3.5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-black border border-[#b6ff3b]/40 flex items-center justify-center text-[#b6ff3b]">
                    <Bot className="w-5 h-5" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#b6ff3b] border-2 border-black" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-white">VEX-AI Concierge</span>
                    <span className="text-[9px] font-mono-tech px-1.5 py-0.2 rounded bg-[#b6ff3b]/10 text-[#b6ff3b] border border-[#b6ff3b]/30">
                      LIVE
                    </span>
                  </div>
                  <span className="text-[10px] font-mono-tech text-neutral-400 flex items-center gap-1">
                    <Clock className="w-2.5 h-2.5" /> 3 Branches Synchronized
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-mono-tech text-neutral-500">
                v3.2.0
              </span>
            </div>

            {/* Chat History Container */}
            <div className="flex-1 overflow-y-auto py-4 space-y-3 pr-1 text-xs no-scrollbar">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                      msg.sender === 'user'
                        ? 'bg-[#b6ff3b] text-black font-medium rounded-tr-none'
                        : 'bg-black/80 border border-white/10 text-neutral-200 rounded-tl-none leading-relaxed'
                    }`}
                  >
                    <p>{msg.text}</p>
                    <span
                      className={`text-[9px] font-mono-tech block mt-1 ${
                        msg.sender === 'user' ? 'text-black/60' : 'text-neutral-500'
                      }`}
                    >
                      {msg.time}
                    </span>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-black/80 border border-white/10 rounded-2xl rounded-tl-none px-4 py-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b6ff3b] animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b6ff3b] animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b6ff3b] animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
            </div>

            {/* Quick question prompts */}
            <div className="pt-2 pb-3 flex gap-1.5 overflow-x-auto no-scrollbar">
              {sampleQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(q)}
                  className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono-tech text-neutral-300 hover:text-[#b6ff3b] hover:border-[#b6ff3b]/40 transition-colors shrink-0 cursor-pointer"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="pt-2 border-t border-white/10 flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about Jagoron TV, VOX, or V-VORTEX..."
                className="flex-1 bg-black/60 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#b6ff3b]"
              />
              <button
                type="submit"
                className="p-2 rounded-xl bg-[#b6ff3b] text-black hover:bg-[#c6ff5c] transition-colors cursor-pointer"
                aria-label="Send message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
