"use client";

import { useTheme } from "next-themes";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";

export default function ParticlesBackground() {
  const { theme } = useTheme();
  const currentTheme = theme === "dark" ? "dark" : "light";

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: currentTheme === "dark" ? "#000000" : "#ffffff",
        },
        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: currentTheme === "dark" ? "#ffffff" : "#000000",
          },
          links: {
            enable: true,
            distance: 150,
            color: currentTheme === "dark" ? "#ffffff" : "#000000",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            outModes: {
              default: "bounce",
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            push: {
              quantity: 2,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}