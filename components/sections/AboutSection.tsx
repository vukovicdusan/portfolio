import React from "react";
import AnimationContainer from "../AnimationContainer";

const AboutSection = () => {
  return (
    <div id="about" className="relative wrapper stack gap-10 max-w-prose">
      <AnimationContainer direction={"fromTop"}>
        <h2 className="font-cubano text-5xl text-quaternaryAccent text-center">
          About <span className="inline-block -translate-y-1">me</span>
        </h2>
        <div className="stack text-center">
          <h3 className="text-lg font-cubano mb-2">
            I&apos;m a freelance web{" "}
            <span className="text-secondaryAccent text-4xl">developer</span>{" "}
            coming from Belgrade, Serbia.
          </h3>
          <p>
            Problem-solving and creativity are what drive me and get me out of
            bed in the morning; continuous learning comes along for the ride. I
            find deep fulfillment in building and refining web solutions.
          </p>
        </div>
      </AnimationContainer>
      <div className="spacer"></div>
      <AnimationContainer direction={"fromTop"}>
        <div className="stack text-center">
          <h3 className="text-lg font-cubano mb-2">
            I build websites optimized for{" "}
            <span className="text-tertiaryAccent text-4xl">speed</span>.
          </h3>
          <p>
            I try to keep things light so that users get your content{" "}
            <span className="text-lg font-cubano">fast</span> and with small
            bandwith costs. We discuss what realy matters to you and then filter
            your content, making it straightforward, light, and easy to use.
          </p>
        </div>
        <div className="spacer"></div>
      </AnimationContainer>
      <AnimationContainer direction={"fromTop"}>
        <div className="stack text-center">
          <h3 className="text-lg font-cubano mb-2">
            I build websites for{" "}
            <span className="text-primaryAccent text-4xl">everyone</span> and{" "}
            <span className="text-secondaryAccent text-4xl">anyone</span>.
          </h3>
          <p>
            <span className="font-cubano text-lg">Everyone</span> should have a
            good web experience regardless of the the{" "}
            <span className="font-cubano text-lg">device</span> and{" "}
            <span className="font-cubano text-lg">conectivity</span> being used.
            Your content must be delivered to the user no mather what.{" "}
          </p>
        </div>
        <div className="spacer"></div>
      </AnimationContainer>
      <AnimationContainer direction={"fromTop"}>
        <div className="stack text-center">
          <h3 className="text-lg font-cubano mb-2">
            My tech <span className="text-quinaryAccent text-4xl">stack</span>
          </h3>
          <ul className="list-disc list-inside font-cubano">
            <li>Vanilla</li>
            <li>React</li>
            <li>Wordpress</li>
          </ul>
          <p className="font-cubano font-lg">
            Looks so simple, doesn&apos;t it?
          </p>
          <p>
            I prefer <span className="font-cubano text-lg">React</span>, it
            gives me freedom. There&apos;s a large ecosystem around it, and I
            have plenty of my own already-built, used, and tried solutions. But
            it is not suitable for every job.
          </p>
          <p>
            To the rescue comes
            <span className="font-cubano text-lg">WordPress</span>. WordPress is
            still the king in small freelancing jobs. People want it, people
            like it, it&apos;s cheap, it is tried and true.
          </p>{" "}
          <p>
            If it&apos;s simple enough, there is always good old{" "}
            <span className="font-cubano text-lg">vanilla</span> HTML, CSS, &
            JS.
          </p>
          <p>
            Ofcourse there are other tools in the toolbox of every developer:
          </p>
          <ul className="list-disc list-inside font-cubano">
            <li>
              Photoshop/Gimp{" "}
              <span className="font-mona text-sm block">
                (I prefer GIMP because I&apos;m a Linux user and a cheapskate)
              </span>
            </li>
            <li>Bootstrap</li>
            <li>Figma</li>
            <li>Tailwind</li>
            <li>
              Smooth js animations{" "}
              <span className="font-mona text-sm block">
                (Check the jumping pointer down below! Exquisite, I know!)
              </span>
            </li>
            <li>Redux</li>
            <li>Styled components</li>
            <li>Git</li>
            <li>GatsbyJS</li>
            <li>Yes, I just wanted a longer list</li>
          </ul>
        </div>
        <div className="spacer"></div>
      </AnimationContainer>
      <AnimationContainer direction={"fromTop"}>
        <div className="stack text-center">
          <p className="font-cubano">
            If I&apos;ve already won you over with spining smileys in the
            background, feel free to
            <span className="text-quaternaryAccent text-lg"> hire me</span>!
          </p>
          <div className="animate-bounce">
            <svg className="fill-white w-10 h-10 rotate-180 inline-block my-4 ">
              <use xlinkHref={`./images/sprite.svg#pointer`}></use>
            </svg>
          </div>
          <a href="#contact" className="btn-primary max-w-max mx-auto">
            Contact me{" "}
            <svg className="fill-white w-5 h-5 rotate-180 inline-block ml-1">
              <use xlinkHref={`./images/sprite.svg#pointer`}></use>
            </svg>
          </a>
        </div>
      </AnimationContainer>
      <svg className="absolute fill-slate-800 opacity-30 right-1/4 top-1/3 h-full w-full animate-spin-slow -z-10 ">
        <use xlinkHref={`./images/sprite.svg#smiley-2`}></use>
      </svg>
    </div>
  );
};

export default AboutSection;
