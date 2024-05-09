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
    <div id="websites" className="sm:wrapper h-auto stack gap-10">
      <h2 className="font-cubano text-5xl text-quaternaryAccent text-center">
        Work
      </h2>
      {websitesArr.map((el, index) => (
        <Window key={index} url={el}></Window>
      ))}
    </div>
  );
};

export default PortfolioSection;
