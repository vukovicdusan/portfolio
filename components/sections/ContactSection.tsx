import React from "react";
import ContactForm from "../ContactForm";
import AnimationContainer from "../AnimationContainer";
import WordShuffler from "../WordShuffler";

const ContactSection = () => {
  return (
    <div id="contact" className="relative wrapper">
      <svg className="absolute fill-slate-800 opacity-30 left-1/4 -top-96 h-full w-full animate-spin-slow -z-10 ">
        <use xlinkHref={`./images/sprite.svg#thumb`}></use>
      </svg>
      <div className="stack gap-4 max-w-prose mx-auto mb-10 text-center">
        <AnimationContainer direction={"fromTop"}>
          <h2 className="font-cubano text-5xl text-secondaryAccent">
            {/* Let&apos;s ta<span className="inline-block -translate-y-1">lk</span> */}
            <WordShuffler>Let&apos;s Talk!</WordShuffler>
          </h2>
        </AnimationContainer>
        <AnimationContainer direction={"fromTop"} delay={"delay-200"}>
          <p>
            Yes, I&apos;ve mastered the{" "}
            <span className="font-cubano text-primaryAccent text-2xl">
              mystical arts
            </span>{" "}
            of crafting a contact{" "}
            <span className="font-cubano text-quinaryAccent text-2xl">
              form
            </span>{" "}
            after countless years of working in web development.
          </p>
        </AnimationContainer>
      </div>
      <AnimationContainer direction={"fromTop"} delay={"delay-300"}>
        <ContactForm
          id={"contactForm"}
          title={"Let's talk!"}
          subtitle={"Don't be a stranger"}
          ctaButton={"Send"}
        ></ContactForm>
      </AnimationContainer>
    </div>
  );
};

export default ContactSection;
