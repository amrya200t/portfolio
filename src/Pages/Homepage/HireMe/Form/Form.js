import React, { useEffect, useRef, useState } from "react";
import { BiMessageDetail } from "react-icons/bi";
import Input from "./Input";

console.log(process.env.SENDGRID_API_KEY);
console.log(__dirname);

export default function Form() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const titleRef = useRef();
  const messageRef = useRef();

  const sendMessageHandler = (e) => {
    e.preventDefault();
    const formData = {};
    // const name = nameRef.current.value;
    // const email = emailRef.current.value;
    // const title = titleRef.current.value;
    // const message = messageRef.current.value;

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
      field.value = "";
    });
    console.log(formData);
    // console.log(e.currentTarget.elements);
    // console.log(name, email, title, message);

    setFormSubmitted(true);
  };

  return (
    <form
      method="POST"
      className="p-4 drop-shadow-none grid grid-cols-2 gap-4"
      onSubmit={sendMessageHandler}
    >
      <Input
        id="full_name"
        reference={nameRef}
        name="Full Name"
        type="text"
        placeholder="Amr Ezzat"
        isRequired={true}
      />

      <Input
        id="email"
        reference={emailRef}
        name="Email address"
        type="email"
        placeholder="amr@amrezzat.com"
        isRequired={true}
      />

      <Input
        id="title"
        reference={titleRef}
        name="Title"
        type="text"
        placeholder="Message Title"
        isRequired={true}
        title={true}
      />

      <div className="flex flex-col gap-2 col-span-2">
        <label
          htmlFor="message"
          className="text-lightGold flex gap-2 items-center font-semibold"
        >
          <BiMessageDetail size="1.5rem" />
          Message
        </label>
        <textarea
          id="message"
          ref={messageRef}
          name="message"
          rows="5"
          className="rounded-md w-full p-3 bg-light text-darkColor font-poppins resize-none"
        />
      </div>

      <button
        type="submit"
        className="ease-in transition-all border px-4 py-2 text-gold border-gold bg-transparent hover:bg-darkGold hover:text-light active:bg-darkGold active:text-light rounded-md max-w-max h-fit "
      >
        Send Message
      </button>
    </form>
  );
}
