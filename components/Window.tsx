"use client";
import React, { useEffect, useRef, useState } from "react";

type WindowPropsType = {
  url: string;
};

const Window = (props: WindowPropsType) => {
  const [show, setShow] = useState(false);
  let windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let config = {
      threshold: 0.4,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShow(true);
          //   observer.unobserve(windowRef.current!);
        }
      });
    }, config);

    if (windowRef.current) {
      observer.observe(windowRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <>
      <div ref={windowRef} className="mb-10">
        <iframe
          className="window w-full h-[70vh] outline-none"
          src={show ? props.url : ""}
          title="External Website"
        ></iframe>
      </div>
    </>
  );
};

export default Window;
