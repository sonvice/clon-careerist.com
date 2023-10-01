import Button from "./Button";
import  "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { useEffect } from "react";

const Form = () => {
  useEffect(() => {
    const input = document.querySelector("#phone");
    intlTelInput(input, {
      utilsScript:
        "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
    });
  }, []);

  return (
    <div className="grid dark:bg-gray-800 dark:text-slate-50 md:grid-cols-2 gap-2xl p-xl bg-white rounded-lg">
      <div>
        <h2 className="text-xl font-barlow font-bold uppercase">
          Get started with careerist
        </h2>
        <p className="text-base mt-md">
          Get matched with a career Advisor, helping you select and enroll in
          the right program for you ask them about a free class
        </p>
      </div>
      <form>
        <div>
          <label htmlFor="name" className="sr">
            Name
          </label>
          <input
            className="d-block dark:bg-gray-800 outline-0 focus:border-black text-md px-sm py-base w-full border-b"
            id="name"
            type="text"
            placeholder="Your full name"
          />
        </div>
        <div className="mt-lg">
          <label htmlFor="phone" className="sr">
            Number Phone
          </label>
          <input
            className="d-block outline-0 dark:bg-gray-800  focus:border-black text-md px-sm py-base w-full border-b"
            id="phone"
            type="tel"
            placeholder="Phone Number"
          />
        </div>
        <div className="mt-lg">
          <label htmlFor="email" className="sr">
            Email
          </label>
          <input
            className="d-block dark:bg-gray-800  outline-0 focus:border-black text-md px-sm py-base w-full border-b"
            id="email"
            type="text"
            placeholder="E-mail"
            required
          />
        </div>
        <div className="flex items-start mt-lg">
          <input type="checkbox" className="appearance-none" name="check" required />
          
          <span>
            <p className="text-sm">
              By participating, you agree to receive automated text messages.
              Consent is nota condition of purchase. You can unsubscribe at any
              time. We never share your data.
            </p>
          </span>
        </div>
        <Button></Button>
      </form>
    </div>
  );
};

export default Form;
