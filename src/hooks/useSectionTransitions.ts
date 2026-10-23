import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Cap GSAP animation framerate to 60 FPS to prevent mobile CPU overload and frame drops
gsap.ticker.fps(60);
gsap.ticker.lagSmoothing(500, 33);

export function useSectionTransitions() {
  useEffect(() => {
    // Small timeout to allow DOM layout to settle
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    const ctx = gsap.context(() => {
      // 1. Hero Exit Parallax & Fade
      const heroSection = document.querySelector('section:first-of-type');
      if (heroSection) {
        const heroContent = heroSection.querySelector('.relative.z-20');
        if (heroContent) {
          gsap.to(heroContent, {
            y: -80,
            opacity: 0.15,
            scale: 0.96,
            ease: 'none',
            scrollTrigger: {
              trigger: heroSection,
              start: 'top top',
              end: 'bottom top',
              scrub: 0.6,
            },
          });
        }
      }

      // 2. Section Transitions for all subsequent major sections
      const sections = gsap.utils.toArray<HTMLElement>('section:not(:first-of-type)');

      sections.forEach((sec) => {
        // Subtle Parallax depth entry for the section container
        gsap.fromTo(
          sec,
          {
            opacity: 0.2,
            y: 70,
          },
          {
            opacity: 1,
            y: 0,
            ease: 'power3.out',
            duration: 0.9,
            scrollTrigger: {
              trigger: sec,
              start: 'top 88%',
              end: 'top 45%',
              scrub: 0.5,
            },
          }
        );

        // Section Headers & Micro Tags Reveal
        const heading = sec.querySelector('h2');
        const badge = sec.querySelector('[class*="font-mono-tech"]');
        const subtitle = sec.querySelector('h2 + p, .max-w-xl p');

        if (badge) {
          gsap.fromTo(
            badge,
            { opacity: 0, x: -20 },
            {
              opacity: 1,
              x: 0,
              duration: 0.6,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: sec,
                start: 'top 80%',
                toggleActions: 'play reverse play reverse',
              },
            }
          );
        }

        if (heading) {
          gsap.fromTo(
            heading,
            {
              opacity: 0,
              y: 40,
              letterSpacing: '0.02em',
            },
            {
              opacity: 1,
              y: 0,
              letterSpacing: '-0.02em',
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: sec,
                start: 'top 80%',
                toggleActions: 'play reverse play reverse',
              },
            }
          );
        }

        if (subtitle) {
          gsap.fromTo(
            subtitle,
            { opacity: 0, y: 25 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              delay: 0.15,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: sec,
                start: 'top 80%',
                toggleActions: 'play reverse play reverse',
              },
            }
          );
        }

        // Section Cards & Grid Items Staggered Reveal
        const cards = sec.querySelectorAll(
          '.project-card, .group.rounded-2xl, .p-8.rounded-2xl, .p-5.rounded-2xl, form'
        );

        if (cards.length > 0) {
          gsap.fromTo(
            cards,
            {
              opacity: 0,
              y: 50,
              scale: 0.97,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.7,
              stagger: 0.12,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: sec,
                start: 'top 75%',
                toggleActions: 'play reverse play reverse',
              },
            }
          );
        }

        // Section Exit Dim / Parallax when leaving viewport upwards
        gsap.to(sec, {
          opacity: 0.25,
          y: -40,
          scale: 0.985,
          ease: 'power1.in',
          scrollTrigger: {
            trigger: sec,
            start: 'bottom 25%',
            end: 'bottom -10%',
            scrub: 0.6,
          },
        });
      });

      // 3. Dedicated About Section Pills Reveal
      const aboutPills = document.querySelectorAll('#about button');
      if (aboutPills.length > 0) {
        gsap.fromTo(
          aboutPills,
          { opacity: 0, scale: 0.85, y: 15 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.05,
            ease: 'back.out(1.5)',
            scrollTrigger: {
              trigger: '#about',
              start: 'top 65%',
              toggleActions: 'play reverse play reverse',
            },
          }
        );
      }

      // 4. Dedicated AI Mascot Section Elevation
      const mascotCanvas = document.querySelector('#ai-mascot canvas');
      if (mascotCanvas) {
        gsap.fromTo(
          mascotCanvas,
          { opacity: 0, scale: 0.8, y: 40 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '#ai-mascot',
              start: 'top 70%',
              toggleActions: 'play reverse play reverse',
            },
          }
        );
      }
    });

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, []);
}
