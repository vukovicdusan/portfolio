import React from "react";

const AboutSection = () => {
  return (
    <div id="about" className="wrapper stack gap-10 max-w-prose">
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
          Problem-solving and creativity are what drive me and get me out of bed
          in the morning; continuous learning comes along for the ride. I find
          deep fulfillment in building and refining web solutions.
        </p>
      </div>
      <div className="mx-auto w-24 h-1 my-12 bg-gradient-to-r from-gray5 to-gray4 rounded-full"></div>
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
      <div className="mx-auto w-24 h-1 my-12 bg-gradient-to-r from-gray5 to-gray4 rounded-full"></div>
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
      <div className="mx-auto w-24 h-1 my-12 bg-gradient-to-r from-gray5 to-gray4 rounded-full"></div>
      <div className="stack text-center">
        <h3 className="text-lg font-cubano mb-2">
          My tech <span className="text-quinaryAccent text-4xl">stack</span>
        </h3>
        <ul className="list-disc list-inside">
          <li className="font-cubano">Vanilla</li>
          <li className="font-cubano">React</li>
          <li className="font-cubano">Wordpress</li>
        </ul>
        <p className="font-cubano font-lg">Looks so simple, doesn&apos;t it?</p>
        <p>
          I prefer <span className="font-cubano text-lg">React</span>, it gives
          me freedom. There&apos;s a large ecosystem around it, and I have
          plenty of my own already-built, used, and tried solutions. But it is
          not suitable for every job.
        </p>
        <p>
          To the rescue comes
          <span className="font-cubano text-lg">WordPress</span>. WordPress is
          still the king in small freelancing jobs. People want it, people like
          it, it&apos;s cheap, it is tried and true.
        </p>{" "}
        <p>
          If it&apos;s simple enough, there is always good old{" "}
          <span className="font-cubano text-lg">vanilla</span> HTML, CSS, & JS.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
