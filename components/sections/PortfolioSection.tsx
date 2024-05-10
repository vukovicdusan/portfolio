import React from "react";
import Window from "../Window";
import AnimationContainer from "../AnimationContainer";

const PortfolioSection = () => {
  let websitesArr = [
    {
      url: "https://www.wlastig.com/",
      description:
        "I developed and designed this Next.js website for a web agency, complete with Firebase and Klaviyo integrations. The website includes a user dashboard on the backend and a blog section currently not used yet.",
    },
    {
      url: "https://www.vet4pets.rs/",
      description:
        "This is a website for a veterinary clinic based in Belgrade using React with Next.js. The website is designed by me and features custom calculators for tasks such as determining calorie requirements for dogs and assessing chocolate toxicity levels, etc.",
    },
    {
      url: "https://www.bojeart.com/",
      description:
        "I designed and developed a portfolio website for two talented artists, incorporating a backend system for image uploading and compression, along with a section for written content. The backend was powered by Firebase, ensuring efficient data management and storage.",
    },
    {
      url: "https://volimtapete.me",
      description:
        "I created and designed this WordPress e-commerce website for a company based in Montenegro, owned by a larger Roma company from Serbia, specializing in exquisite wallpapers. The website features a custom design tailored to showcase the beauty of the wallpapers, utilizing a free theme to enhance functionality and aesthetics.",
    },
    {
      url: "https://www.milicajanevski.rs/",
      description:
        "I transitioned a portfolio website for a Serbian actress from WordPress to React with Next.js due to hosting considerations. This migration preserved the original design and content while leveraging the advantages of React and Next.js for enhanced performance and flexibility. The WordPress version was also developed and designe by me beforehand.",
    },
    {
      url: "https://www.nutrilogika.rs/",
      description:
        "Vanilla HTML, CSS, and JavaScript website developed and designed by me for a Serbian Instagram coaching sensation. The website includes a calorie calculator feature and a basic backend system for blogging purposes.",
    },
    {
      url: "https://www.vladimirmilic.com/",
      description:
        "I crafted a already designed portfolio website for a web analytics consultant specialist using React with Gatsby during the peak of Gatsby's popularity. The website effectively showcased the consultant's expertise while leveraging the advanced capabilities of Gatsby for optimal performance and user experience.",
    },
    {
      url: "https://www.thedatawiz.co/",
      description:
        "I designed and developed a portfolio website for a web analytics consultancy. The website effectively showcases the consultancy's expertise in web analytics, providing visitors with insights into their services, methodologies, and success stories.",
    },
    {
      url: "https://www.sandracvijovic.com/",
      description:
        "I created a small and quick WordPress portfolio website for a talented artist based in Belgrade. The website features custom image uploading functionality and a lightbox gallery made with Advanced Custom Fields (ACF), allowing for a visually engaging showcase of the artist's work.",
    },
  ];
  return (
    <div id="websites" className="sm:wrapper h-auto stack gap-10 !mb-0">
      <AnimationContainer direction={"fromTop"}>
        <div className="stack">
          <h2 className="font-cubano text-5xl text-quaternaryAccent text-center">
            Wo<span className="inline-block -translate-y-1">rk</span>
          </h2>
          <p className="max-w-prose text-center mx-auto">
            This is some of my work that I have permission to display as my own.
            Much of my work involves tasks such as fixing, correcting,
            improving, and adding animations to websites owned by others and
            done by/for others.
          </p>
        </div>
      </AnimationContainer>
      {websitesArr.map((el, index) => (
        <Window key={index} url={el.url} description={el.description}></Window>
      ))}
    </div>
  );
};

export default PortfolioSection;
