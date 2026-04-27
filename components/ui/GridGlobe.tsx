"use client";
import { useEffect, useRef } from "react";
import createGlobe from "cobe";

const GridGlobe = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const rRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let phi = 0;

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [{ location: [45.4215, -75.6972], size: 0.1 }],
      onRender: (state) => {
        if (pointerInteracting.current === null) {
          phi += 0.005;
        }
        state.phi = phi + rRef.current;
      },
    });

    const fadeIn = setTimeout(() => {
      canvas.style.opacity = "1";
    }, 100);

    return () => {
      clearTimeout(fadeIn);
      globe.destroy();
    };
  }, []);

  return (
    <div className="flex items-center justify-center absolute -left-5 top-36 md:top-40 w-full h-full">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-96 px-4">
        <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
        <canvas
          ref={canvasRef}
          onPointerDown={(e) => {
            pointerInteracting.current =
              e.clientX - pointerInteractionMovement.current;
            if (canvasRef.current) {
              canvasRef.current.style.cursor = "grabbing";
            }
          }}
          onPointerUp={() => {
            pointerInteracting.current = null;
            if (canvasRef.current) {
              canvasRef.current.style.cursor = "grab";
            }
          }}
          onPointerOut={() => {
            pointerInteracting.current = null;
            if (canvasRef.current) {
              canvasRef.current.style.cursor = "grab";
            }
          }}
          onMouseMove={(e) => {
            if (pointerInteracting.current !== null) {
              const delta = e.clientX - pointerInteracting.current;
              pointerInteractionMovement.current = delta;
              rRef.current = delta / 200;
            }
          }}
          onTouchMove={(e) => {
            if (pointerInteracting.current !== null && e.touches[0]) {
              const delta =
                e.touches[0].clientX - pointerInteracting.current;
              pointerInteractionMovement.current = delta;
              rRef.current = delta / 100;
            }
          }}
          style={{
            width: 600,
            height: 600,
            maxWidth: "100%",
            aspectRatio: 1,
            cursor: "grab",
            opacity: 0,
            transition: "opacity 1s ease",
          }}
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default GridGlobe;
