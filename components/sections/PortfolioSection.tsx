import React from "react";
import Window from "../Window";

const PortfolioSection = () => {
  let websitesArr = [
    "https://www.wlastig.com/",
    "https://www.vet4pets.rs/",
    "https://www.bojeart.com/",
    "https://volimtapete.me",
    "https://www.milicajanevski.rs/",
    "https://www.nutrilogika.rs/",
    "https://www.vladimirmilic.com/",
    "https://www.thedatawiz.co/",
    "https://www.sandracvijovic.com/",
  ];
  return (
    <div id="websites" className="wrapper h-auto">
      {websitesArr.map((el, index) => (
        <Window key={index} url={el}></Window>
      ))}
    </div>
  );
};

export default PortfolioSection;
