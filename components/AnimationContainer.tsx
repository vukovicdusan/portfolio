"use client";
import React, { useEffect, useRef, useState } from "react";
import { ChildrenProps } from "@/types/ChildrenProps";

interface AnimationContainerProps extends ChildrenProps {
  direction: string;
  delay?: string;
  wrapperClass?: string;
}

const AnimationContainer: React.FC<AnimationContainerProps> = ({
  direction,
  children,
  delay,
  wrapperClass,
}) => {
  let animationRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    let config = {
      threshold: 0.4,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShow(true);
        } else {
          setShow(false);
        }
      });
    }, config);

    if (animationRef.current) {
      observer.observe(animationRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  function directionHandler(directionProp: string) {
    let direction;
    switch (directionProp) {
      case "fromRight":
        direction = "translate-x-[50px]";
        break;
      case "fromLeft":
        direction = "-translate-x-[50px]";
        break;
      case "fromTop":
        direction = "translate-y-[50px]";
        break;
      case "fromBottom":
        direction = "-translate-y-[50px]";
        break;
      case "":
        direction = "";
    }
    return direction;
  }

  return (
    <div className={` ${wrapperClass}`} ref={animationRef}>
      <div
        className={`transition-all duration-700 ease-in-out h-full ${
          show
            ? "opacity-100 translate-x-0"
            : "opacity-0 " + directionHandler(direction)
        } ${delay ? delay : ""}`}
      >
        {children}
      </div>
    </div>
  );
};

export default AnimationContainer;
