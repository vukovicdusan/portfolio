"use client";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";

type WindowPropsType = {
  url: string;
  description: string;
};

const Window = (props: WindowPropsType) => {
  const [getUrl, setGetUrl] = useState<boolean>(false);
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
          setGetUrl(true);
          //   observer.unobserve(windowRef.current!);
        }
      });
    }, config);

    if (windowRef.current) {
      observer.observe(windowRef.current);
    }

    if (getUrl) {
      setTimeout(() => {
        setFade(true);
      }, 500);
    }

    return () => {
      observer.disconnect();
    };
  }, [getUrl]);

  let previewActivatorHandler = () => {
    setActive(true);
  };

  let resizeControlHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setActive(true);
    setResizeValue(e.target.value);
  };

  return (
    <div>
      <div
        ref={windowRef}
        className={`${
          fade ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000`}
      >
        <div
          className="relative mx-auto"
          style={{ width: resizeValue + "%", minWidth: "360px" }}
        >
          <iframe
            className={`window w-full min-h-[650px] outline-none ${
              active ? "" : "pointer-events-none"
            }`}
            src={getUrl ? props.url : ""}
            title="External Website"
          ></iframe>
          {active ? (
            <a
              href={props.url}
              className="btn-primary bg-quaternaryAccent absolute top-0 left-0 text-darkColor font-mona z-10"
              rel="noopener"
              target="__blank"
            >
              Go to the site
            </a>
          ) : (
            <button
              onClick={previewActivatorHandler}
              className="font-mona btn-primary bg-quaternaryAccent absolute top-0 left-0 text-darkColor z-10"
            >
              Activate preview
            </button>
          )}
          <div className="absolute sm:flex flex-col justify-center items-center bottom-0 left-1/2 -translate-x-1/2 bg-quaternaryAccent py-2 px-4 rounded-md hidden z-10">
            <label
              htmlFor="resize-control"
              className="font-mona text-darkColor"
            >
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
      </div>
      {getUrl ? (
        <div className=" mt-4 text-center max-w-prose mx-auto">
          <p className="text-lg px-2">{props.description}</p>
        </div>
      ) : null}
      <div className="spacer"></div>
    </div>
  );
};

export default Window;
