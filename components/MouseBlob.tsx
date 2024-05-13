"use client";
import React, { useRef } from "react";

const MouseBlob = () => {
  const blobRef = useRef<HTMLDivElement>(null);
  // const blob = document.getElementById("blob");

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
  return (
    <>
      <div id="blob" ref={blobRef}></div>
      <div id="blur" className="fixed inset-0"></div>
    </>
  );
};

export default MouseBlob;
