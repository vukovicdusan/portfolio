"use client";
import React, { useEffect, useRef, useState } from "react";

type WindowPropsType = {
  url: string;
};

const Window = (props: WindowPropsType) => {
  const [show, setShow] = useState<boolean>(false);
  const [fade, setFade] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);
  let windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let config = {
      threshold: 0,
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

    if (show) {
      setTimeout(() => {
        setFade(true);
      }, 500);
    }

    return () => {
      observer.disconnect();
    };
  }, [show]);

  let previewActivatorHandler = () => {
    setActive(true);
  };

  return (
    <>
      <div
        ref={windowRef}
        className={`relative mb-24 ${
          fade ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000`}
      >
        <iframe
          className={`window w-full h-[70vh] outline-none ${
            active ? "" : "pointer-events-none"
          }`}
          src={show ? props.url : ""}
          title="External Website"
        ></iframe>
        {active ? null : (
          <button
            onClick={previewActivatorHandler}
            className="btn-primary bg-quaternaryAccent absolute top-0 left-0"
          >
            Activate preview
          </button>
        )}
      </div>
    </>
  );
};

export default Window;
