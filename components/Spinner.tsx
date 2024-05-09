import React from "react";

const Spinner = () => {
  return (
    <div className="animate-spin w-max">
      {/* <Image
        className="invert"
        alt="rocket"
        src={rocket}
        width={30}
        height={30}
      ></Image> */}
      <svg className="w-10 h-10 fill-quaternaryAccent">
        <use xlinkHref={`./images/sprite.svg#smiley`}></use>
      </svg>
    </div>
  );
};

export default Spinner;
