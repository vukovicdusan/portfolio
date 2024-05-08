import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <div className="wrapper relative">
        <h1 className="font-extrabold text-center text-6xl mb-8">
          Your
          <br />
          <span className="text-tertiaryAccent">
            <span className="inline-block translate-y-1">Front</span>-End
          </span>
          <br />
          <span className="inline-block translate-y-1">Devel</span>oper
        </h1>
        <p className="text-2xl max-w-prose text-center mx-auto mb-4">
          Hey there, I&apos;m Dusan!
        </p>
        <p className="text-lg max-w-prose text-center mx-auto mb-4">
          Sadly, my designer got ill while I was crafting this{" "}
          <span className="text-quaternaryAccent">react</span> overkill website.
          But worry not! You can feast your eyes on some of masterpieces I
          designed myself.
        </p>
        <p className="text-sm text-primaryAccent mb-20 text-center">
          (Thank you, ChatGPT, for this great intro)
        </p>

        <div className="flex flex-col justify-center items-center">
          <div>
            <p className="text-lg font-bold">
              Check my work by clicking on this utterly pointless button{" "}
            </p>
            <p className="text-sm text-center">
              (Yep, no transitions on hover—because I&apos;m hardcore like that)
            </p>
          </div>
          <div className="animate-bounce">
            <svg className="fill-white w-10 h-10 rotate-180 inline-block my-4 ">
              <use xlinkHref={`./images/sprite.svg#pointer`}></use>
            </svg>
          </div>
          <a href="#websites" className="btn-primary ml-4">
            Check Work{" "}
            <svg className="fill-white w-5 h-5 rotate-180 inline-block ml-1">
              <use xlinkHref={`./images/sprite.svg#pointer`}></use>
            </svg>
          </a>
        </div>
        {/* <span className="block w-full h-1 bg-white mx-auto my-16"></span> */}
        <svg className="absolute fill-slate-800 opacity-30 left-1/4 top-1/3 h-full w-full animate-spin-slow -z-10 ">
          <use xlinkHref={`./images/sprite.svg#smiley`}></use>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
