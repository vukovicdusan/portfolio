import React from "react";
import AnimationContainer from "../AnimationContainer";

const HeroSection = () => {
  return (
    <div className="w-full h-full">
      <div className="wrapper relative mt-10">
        <AnimationContainer direction="fromTop">
          <h1 className="font-extrabold font-cubano text-center text-6xl mb-8">
            <span className="inline-block -translate-y-1">Yo</span>ur
            <br />
            <span className="text-tertiaryAccent">
              <span className="inline-block translate-y-1">Front</span>-End
            </span>
            <br />
            <span className="inline-block -translate-y-1">Devel</span>oper
          </h1>
        </AnimationContainer>
        <AnimationContainer direction={"fromTop"} delay={"delay-300"}>
          <p className="relative text-2xl font-cubano max-w-prose text-center mx-auto ">
            Hey there, I&apos;m Dusan!
          </p>
          <p className="font-mona text-quaternaryAccent text-sm text-center mb-4">
            ( It&apos;s actualy Dušan, but I chose the font with ugly letter
            &apos;š&apos;. Good job!{" "}
            <svg className="fill-quaternaryAccent w-6 h-6 inline-block -translate-y-1">
              <use xlinkHref={`./images/sprite.svg#thumb`}></use>
            </svg>
            )
          </p>
          <p className="text-lg max-w-prose text-center mx-auto">
            Sadly, my designer got ill while I was crafting this{" "}
            <span className="text-quaternaryAccent font-cubano">react</span>{" "}
            overkill website.
          </p>
          <p className="text-xl font-cubano max-w-prose text-center mx-auto">
            But worry not!
          </p>
          <p className="text-lg max-w-prose text-center mx-auto">
            You can feast your eyes on some of masterpieces I designed and
            created myself.
          </p>
          <p className="text-sm text-primaryAccent mb-20 text-center">
            (Thank you, ChatGPT, for this great intro)
          </p>
        </AnimationContainer>
        <AnimationContainer direction={"fromTop"} delay={"delay-500"}>
          <div className="flex flex-col justify-center items-center">
            <div>
              <p className="font-cubano text-lg text-center">
                Check my work by clicking on this utterly pointless button{" "}
              </p>
              <p className="text-sm text-center">
                (Yep, no transitions on hover—because I&apos;m hardcore like
                that)
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
        </AnimationContainer>
        {/* <span className="block w-full h-1 bg-white mx-auto my-16"></span> */}
        <svg className="absolute fill-slate-800 opacity-30 left-1/4 top-1/3 h-full w-full animate-spin-slow -z-10 ">
          <use xlinkHref={`./images/sprite.svg#smiley`}></use>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
