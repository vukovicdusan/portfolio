"use client";
import { ChildrenProps } from "@/types/ChildrenProps";
import React, { useRef, useState } from "react";

const WordShuffler = (props: ChildrenProps) => {
  const wordRef = useRef<HTMLSpanElement>(null);
  //   const dataset = useState<string>("HYPERPLEXED");
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let interval: any = null;
  const animationHandler = () => {
    let iteration: number = 0;
    clearInterval(interval);

    interval = setInterval(() => {
      if (wordRef.current) {
        wordRef.current.innerText = wordRef.current.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              if (wordRef.current)
                return (
                  wordRef.current.dataset.value &&
                  wordRef.current.dataset.value[index]
                );
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");
      }
      if (wordRef.current && wordRef.current.dataset.value)
        if (iteration >= wordRef.current.dataset.value.length) {
          clearInterval(interval);
        }

      iteration += 1 / 3;
    }, 30);
  };

  //   document.querySelector("h1").onmouseover = (event) => {
  //     let iteration: number = 0;

  //     clearInterval(interval);

  //     interval = setInterval(() => {
  //       event.target.innerText = event.target.innerText
  //         .split("")
  //         .map((letter, index) => {
  //           if (index < iteration) {
  //             return event.target.dataset.value[index];
  //           }

  //           return letters[Math.floor(Math.random() * 26)];
  //         })
  //         .join("");

  //       if (iteration >= event.target.dataset.value.length) {
  //         clearInterval(interval);
  //       }

  //       iteration += 1 / 3;
  //     }, 30);
  //   };
  return (
    <span
      data-value={props.children}
      ref={wordRef}
      onMouseOver={animationHandler}
    >
      {props.children}
    </span>
  );
};

export default WordShuffler;
