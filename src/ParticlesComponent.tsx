import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  // MoveDirection,
  OutMode,
} from "@tsparticles/engine";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const App = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#000000", // Background color
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push", // Adds more particles when clicked
          },
          onHover: {
            enable: true,
            mode: "grab", // Interactivity on hover
          },
        },
        modes: {
          grab: {
            distance: 200,
          },
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#dbd8d6", // Particle color
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: false,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "top-left", // Keep direction free for circular motion
          enable: true,
          path: {
            enable: true, // Enable path movement
            options: {
              type: "circle", // Circular movement
            },
          },
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 1, // Adjust speed for a smoother effect
          straight: false, // Avoid straight lines
          attract: { // Simulates circular attraction towards a center
            enable: true,
            x: 6000, // Rotation effect in 3D space
            y: 6000,
          },
        },
        number: {
          density: {
            enable: true,
            area: 800, // Control particle density area
          },
          value: 150, // Number of particles
        },
        opacity: {
          value: 0.5, // Particle opacity
        },
        shape: {
          type: "triangle", // Shape of particles
        },
        size: {
          value: { min: 1, max: 5 }, // Particle size range
        },
      },
      detectRetina: true, // Retina display support
    }),
    [],
  );
  

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};

export default App; 