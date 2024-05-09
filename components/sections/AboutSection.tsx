import React from "react";

const AboutSection = () => {
  return (
    <div className="wrapper stack gap-4 max-w-prose">
      <h2 className="font-cubano text-4xl text-quaternaryAccent">About me</h2>
      <div>
        <h3 className="text-lg font-cubano">
          I&apos;m a freelance web{" "}
          <span className="text-secondaryAccent">developer</span> coming from
          Belgrade, Serbia.
        </h3>
        <p>
          Problem-solving and creativity are what drives me and gets me out of
          the bed in the morning, the continuous learning comes along for the
          ride. I find deep fulfillment in building and refining web solutions.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-cubano">
          I build websites optimized for{" "}
          <span className="text-tertiaryAccent text-xl">speed</span>.
        </h3>
        <p>
          I try to keep things light so that users get your content{" "}
          <span className="text-lg font-cubano">fast</span> and with small
          bandwith costs. We talk about what realy matters to you and then
          filter your content, making it straight to the point, light and easy
          to use.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-cubano">
          I build websites for{" "}
          <span className="text-primaryAccent text-xl">everyone</span> and{" "}
          <span className="text-secondaryAccent text-xl">anyone</span>.
        </h3>
        <p>
          <span className="font-cubano text-xl">Everyone</span> should get a
          good web experience whatever the device and conectivity is being used.
          Your content must be delivered to the user no mather what.{" "}
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
