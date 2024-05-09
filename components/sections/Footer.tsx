import React from "react";

const Footer = () => {
  return (
    <footer className="wrapper pb-0 mb-0 text-center">
      <div className="mb-10 flex justify-center items-center gap-8">
        <a
          href="https://github.com/vukovicdusan"
          target="__blank"
          rel="noopener"
        >
          <svg className="fill-white w-10 h-10">
            <use xlinkHref={`./images/sprite.svg#github`}></use>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/dusan-vukovic-a237181bb/"
          target="__blank"
          rel="noopener"
        >
          <svg className="fill-white w-10 h-10 ">
            <use xlinkHref={`./images/sprite.svg#linkedin`}></use>
          </svg>
        </a>
      </div>
      <p className="text-xs text-gray-400">Copyright © 2024 DusanVukovic </p>
    </footer>
  );
};

export default Footer;
