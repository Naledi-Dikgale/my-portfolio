import { useRef, useState } from "react";
import Socials from "./Socials";
import emailjs from "@emailjs/browser";
import { ScaleLoader } from "react-spinners";
import ErrModal from "./ErrModal";
const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_a10c5s9",
        "template_3tgmknn",
        form.current,
        "j_Ar9-EUBPJ-lYNPr"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          setError(true);
        }
      );
  };

  const handleError = () => {
    setError(false);
    setLoading(false);
  };
  return (
    <div
      id="contact"
      className="flex gap-5 max-sm:gap-2 justify-around max-sm:justify-start items-center max-sm:w-full md:w-2/3  rounded p-10 max-sm:p-3 mt-10 "
    >
      <Socials flex="flex-col" />
      <form
        ref={form}
        onSubmit={sendEmail}
        method="post"
        className="flex flex-col gap-4 w-11/12 md:w-2/3"
      >
        <span className="text-4xl text-pink-400 font-agbalumo font-bold ">Contact Me</span>
        <input
          type="text"
          name="user_name"
          required
          placeholder="Name"
          className="p-3 text-dimBlue font-mono border border-secondary rounded"
        />
        <input
          type="email"
          name="user_email"
          required
          placeholder="Email"
          className="p-3 text-dimBlue font-mono border border-secondary rounded "
        />
        <textarea
          name="message"
          id=""
          cols="30"
          rows="6"
          required
          placeholder="Message"
          className="p-3 text-dimBlue font-mono border border-secondary rounded"
        ></textarea>
        <button
          type="submit"
          className="bg-secondary text-neutral-50 p-4 font-lobster text-3xl hover:bg-pink-400 hover:text-neutral-50 rounded "
        >
          {loading ? <ScaleLoader /> : "Send"}
        </button>
      </form>
      <ErrModal disp={error} close={handleError} />
    </div>
  );
};

export default Contact;
