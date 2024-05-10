import React from "react";
import AnimationContainer from "../AnimationContainer";

const Header = () => {
  return (
    <header className="w-wrapperWidth p-wrapperPadding mx-auto">
      <nav>
        <AnimationContainer direction={"fromBottom"}>
          <ul className="flex gap-4 justify-center">
            <li>
              <a
                className="font-bold text-quaternaryAccent hover:text-primaryAccent"
                href="#websites"
              >
                Works
              </a>
            </li>
            <li>
              <a
                className="font-bold text-quaternaryAccent hover:text-primaryAccent"
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="font-bold text-quaternaryAccent hover:text-primaryAccent"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </AnimationContainer>
      </nav>
    </header>
  );
};

export default Header;
