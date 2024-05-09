import React from "react";
import ContactForm from "../ContactForm";

const ContactSection = () => {
  return (
    <div id="contact" className="wrapper">
      <div className="stack gap-4 max-w-prose mx-auto mb-8 text-center">
        <h2 className="font-cubano text-5xl text-secondaryAccent">
          Let's talk!
        </h2>
        <p>
          Yes, I've mastered the{" "}
          <span className="font-cubano text-primaryAccent text-2xl">
            mystical arts
          </span>{" "}
          of crafting a contact{" "}
          <span className="font-cubano text-quinaryAccent text-2xl">form</span>{" "}
          after countless years of working in web development.
        </p>
      </div>
      <ContactForm
        id={"contactForm"}
        title={"Let's talk!"}
        subtitle={"Don't be a stranger"}
        ctaButton={"Send"}
      ></ContactForm>
    </div>
  );
};

export default ContactSection;
