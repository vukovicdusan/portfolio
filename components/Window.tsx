"use client";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";

type WindowPropsType = {
  url: string;
};

const Window = (props: WindowPropsType) => {
  const [show, setShow] = useState<boolean>(false);
  const [fade, setFade] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);
  const [resizeValue, setResizeValue] = useState<string>("100");
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

  let resizeControlHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setActive(true);
    setResizeValue(e.target.value);
  };

  return (
    <>
      <div
        ref={windowRef}
        className={`relative mb-24 ${
          fade ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000`}
      >
        <div
          className="mx-auto"
          style={{ width: resizeValue + "%", minWidth: "360px" }}
        >
          <iframe
            className={`window w-full h-[70vh] outline-none ${
              active ? "" : "pointer-events-none"
            }`}
            src={show ? props.url : ""}
            title="External Website"
          ></iframe>
        </div>
        {active ? null : (
          <button
            onClick={previewActivatorHandler}
            className="btn-primary bg-quaternaryAccent absolute top-0 left-0 text-darkColor"
          >
            Activate preview
          </button>
        )}

        <div className="absolute sm:flex flex-col justify-center items-center bottom-0 left-1/2 -translate-x-1/2 bg-quaternaryAccent py-2 px-4 rounded-md hidden">
          <label htmlFor="resize-control" className="font-bold text-darkColor">
            Resize window
          </label>
          <input
            onChange={(e) => resizeControlHandler(e)}
            id="resize-control"
            type="range"
            min="30"
            max="100"
            // value="100"
            // value={resizeValue}
            step="1"
            defaultValue={100}
          />
        </div>
      </div>
    </>
  );
};

export default Window;
