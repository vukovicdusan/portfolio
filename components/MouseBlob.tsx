"use client";
import React, { useEffect, useRef } from "react";

const MouseBlob = () => {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.onpointermove = (event) => {
      const { clientX, clientY } = event;

      blobRef.current &&
        blobRef.current.animate(
          {
            left: `${clientX}px`,
            top: `${clientY}px`,
          },
          { duration: 3000, fill: "forwards" }
        );
    };
  }, []);
  return <div id="blob" ref={blobRef}></div>;
};

export default MouseBlob;
