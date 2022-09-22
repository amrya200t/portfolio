import React, { useEffect, useRef, useState } from "react";
import { BiMessageDetail } from "react-icons/bi";
import Input from "./Input";

export default function Form() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const titleRef = useRef();
  const messageRef = useRef();

  const sendMessageHandler = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const title = titleRef.current.value;
    const message = messageRef.current.value;

    console.log(name, email, title, message);

    setFormSubmitted(true);
  };

  return (
    <form
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
        className="ease-in transition-all border px-4 py-2 text-gold border-gold bg-transparent hover:bg-darkGold hover:text-light rounded-md max-w-max h-fit "
      >
        Send Message
      </button>
    </form>
  );
}
