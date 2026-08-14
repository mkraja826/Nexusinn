"use client";

import { useEffect, useRef } from "react";

type NexusinnLogoProps = {
  className?: string;
  ariaLabel?: string;
  variant?: "header" | "footer";
};

export default function NexusinnLogo({
  className,
  ariaLabel = "Nexusinn — Innovation, Talent, Impact",
  variant = "header",
}: NexusinnLogoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const image = new Image();
    image.decoding = "async";
    image.src = "/nexusinn-logo-exact.webp";

    image.onload = () => {
      canvas.width = image.naturalWidth || 1536;
      canvas.height = image.naturalHeight || 512;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

      const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = frame.data;
      const width = canvas.width;
      const height = canvas.height;
      const total = width * height;
      const visited = new Uint8Array(total);
      const stack = new Int32Array(total);
      let top = 0;

      const enqueue = (index: number) => {
        if (index < 0 || index >= total || visited[index]) return;
        stack[top++] = index;
      };

      for (let x = 0; x < width; x++) {
        enqueue(x);
        enqueue((height - 1) * width + x);
      }
      for (let y = 0; y < height; y++) {
        enqueue(y * width);
        enqueue(y * width + width - 1);
      }

      const isBackground = (index: number) => {
        const p = index * 4;
        return data[p + 3] > 0 && data[p] <= 12 && data[p + 1] <= 12 && data[p + 2] <= 12;
      };

      while (top > 0) {
        const index = stack[--top];
        if (visited[index]) continue;
        visited[index] = 1;
        if (!isBackground(index)) continue;

        data[index * 4 + 3] = 0;
        const x = index % width;
        const y = Math.floor(index / width);
        if (x > 0) enqueue(index - 1);
        if (x + 1 < width) enqueue(index + 1);
        if (y > 0) enqueue(index - width);
        if (y + 1 < height) enqueue(index + width);
      }

      ctx.putImageData(frame, 0, 0);
    };
  }, []);

  const style = variant === "footer"
    ? {
        display: "block",
        width: "min(100%, 238px)",
        height: "auto",
        aspectRatio: "3 / 1",
        filter: "drop-shadow(1px 0 0 #fff) drop-shadow(-1px 0 0 #fff) drop-shadow(0 1px 0 #fff) drop-shadow(0 -1px 0 #fff) drop-shadow(1px 1px 0 #fff) drop-shadow(-1px 1px 0 #fff) drop-shadow(1px -1px 0 #fff) drop-shadow(-1px -1px 0 #fff)",
      }
    : {
        display: "block",
        width: "clamp(185px, 19vw, 250px)",
        height: "auto",
        aspectRatio: "3 / 1",
      };

  return (
    <canvas
      ref={canvasRef}
      className={className}
      role="img"
      aria-label={ariaLabel}
      style={style}
    />
  );
}
