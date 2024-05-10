import React from "react";

type SpinnerPropTypes = {
  wrapperClasses?: string;
  svgClasses?: string;
  svgName?: string;
};

const Spinner = (props: SpinnerPropTypes) => {
  return (
    <div className={`w-max ${props.wrapperClasses && props.wrapperClasses}`}>
      <svg
        className={`animate-spin ${
          props.svgClasses
            ? props.svgClasses
            : "w-10 h-10 fill-quaternaryAccent"
        }`}
      >
        <use
          xlinkHref={`./images/sprite.svg#${
            props.svgName ? props.svgName : "smiley"
          }`}
        ></use>
      </svg>
    </div>
  );
};

export default Spinner;
