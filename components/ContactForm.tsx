"use client";
import useInput from "@/hooks/useInput";
import React, { useState } from "react";
import Spinner from "./Spinner";

type TResponseState = {
  message: string;
  success: boolean;
};

type CtaContentPropType = {
  id?: string;
  title?: string;
  subtitle?: string;
  list?: string[];
  ctaButton?: string;
};

const ContactForm = (props: CtaContentPropType) => {
  const [inputValue, valueHandler] = useInput();
  const [loading, setLoading] = useState<boolean>(false);

  const [responseState, setResponseState] = useState<TResponseState>({
    message: "initial_state",
    success: false,
  });

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(inputValue),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      setResponseState(await response.json());
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  function inputChecker(fieldName: string) {
    if (inputValue[fieldName])
      return Object.values(inputValue[fieldName]).length === 0;
    else return true;
  }

  return (
    <form
      id={props.id}
      onSubmit={onSubmitHandler}
      className="flex flex-col gap-6 pt-2 max-w-prose mx-auto"
    >
      <div className="relative flex flex-col w-full">
        <input
          className="max-w-[99%] py-3 px-4 peer rounded-2xl bg-darkColor border-2 border-white"
          type="text"
          name="name"
          id="name"
          autoCapitalize="none"
          autoCorrect="off"
          required
          onChange={(e) => valueHandler(e)}
        />
        <label
          className={`font-cubano absolute bg-darkColor left-4 px-2 transition-all duration-200 ease-linear peer-focus:-top-1 peer-focus:text-sm ${
            inputChecker("name")
              ? "top-1/2 -translate-y-1/2"
              : "-translate-y-1/2"
          }`}
          htmlFor="name"
        >
          Name
        </label>
      </div>
      <div className="relative flex flex-col w-full">
        <input
          className="max-w-[99%] py-3 px-4 peer rounded-2xl bg-darkColor border-2 border-white"
          type="text"
          name="email"
          id="email"
          autoCapitalize="none"
          autoCorrect="off"
          required
          pattern="[^@]+@[^\.]+\..+"
          onChange={(e) => valueHandler(e)}
        />
        <label
          className={`font-cubano absolute bg-darkColor left-4 px-2 transition-all duration-200 ease-linear peer-focus:-top-1 peer-focus:text-sm ${
            inputChecker("email")
              ? "top-1/2 -translate-y-1/2"
              : "-translate-y-1/2"
          }`}
          htmlFor="email"
        >
          Email
        </label>
      </div>
      <div className="relative flex flex-col w-full">
        <input
          className="max-w-[99%] py-3 px-4 peer rounded-2xl bg-darkColor border-2 border-white"
          type="text"
          name="website"
          id="website"
          autoCapitalize="none"
          autoCorrect="off"
          onChange={(e) => valueHandler(e)}
        />
        <label
          className={`font-cubano absolute bg-darkColor left-4 px-2 transition-all duration-200 ease-linear peer-focus:-top-1 peer-focus:text-sm ${
            inputChecker("website")
              ? "top-1/2 -translate-y-1/2"
              : "-translate-y-1/2"
          }`}
          htmlFor="website"
        >
          Company Website
        </label>
      </div>
      <div className="relative flex flex-col w-full">
        <textarea
          className="max-w-[99%] py-3 px-4 peer rounded-2xl bg-darkColor border-2 border-white"
          name="message"
          id="message"
          autoCapitalize="none"
          autoCorrect="off"
          title="Leave a message, it would be nice."
          onChange={(e) => valueHandler(e)}
        />
        <label
          className={`font-cubano absolute bg-darkColor left-4 px-2 transition-all duration-200 ease-linear peer-focus:text-sm peer-focus:-top-3 ${
            // inputValue.message && Object.values(inputValue.message).length === 0
            inputChecker("message") ? "top-3" : "-top-3"
          }`}
          htmlFor="message"
        >
          Message
        </label>
      </div>
      {responseState.message !== "initial_state" ? (
        <p
          className={`font-bold text-center ${
            responseState.success ? "text-green-500" : "text-red-500"
          }`}
        >
          {responseState.message}
        </p>
      ) : null}
      <div className="flex gap-2 items-center justify-center">
        <button className="btn-primary">{props.ctaButton}</button>
        {loading ? <Spinner></Spinner> : null}
      </div>
    </form>
  );
};

export default ContactForm;
