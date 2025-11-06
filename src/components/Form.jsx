import { toast } from "react-toastify";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

const Form = () => {
  const form = useRef();
  const recaptchaRef = useRef();

  const success = () => toast.success("Form Submitted!");
  const fail = () => toast.error("Error!");

  const sendEmail = async (e) => {
    e.preventDefault();

    const formEl = form.current;

    // 1. Honeypot check
    if (formEl._gotcha.value) {
      console.warn("Bot detected – message blocked.");
      return;
    }

    // 2. reCAPTCHA check
    const token = recaptchaRef.current.getValue();
    if (!token) {
      alert("Please verify that you're not a robot.");
      return;
    }

    // 3. Add timestamp
    const currentTime = new Date().toLocaleString();
    formEl.time.value = currentTime;

    // 4. Send email
    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formEl,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      console.log("Email sent successfully:", result.text);
      success();
      recaptchaRef.current.reset(); // reset reCAPTCHA
      formEl.reset();
    } catch (error) {
      console.error("Error sending email:", error.text);
      fail();
    }
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className="space-y-5">
        <input type="text" name="_gotcha" style={{ display: "none" }} />
        <input type="hidden" name="time" />

        <div>
          <label className="block text-sm text-gray-700 mb-1">Name*</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border-b-2 border-gray-200 focus:border-purple-500 outline-none py-2"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-1">Email*</label>
          <input
            type="email"
            name="email"
            required
            className="w-full border-b-2 border-gray-200 focus:border-purple-500 outline-none py-2"
          />
        </div>

        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-sm text-gray-700 mb-1">
              Phone No.*
            </label>
            <input
              type="number"
              name="phone"
              className="w-full border-b-2 border-gray-200 focus:border-purple-500 outline-none py-2"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm text-gray-700 mb-1">Subject</label>
            <input
              type="text"
              name="subject"
              className="w-full border-b-2 border-gray-200 focus:border-purple-500 outline-none py-2"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-1">Message*</label>
          <textarea
            rows="3"
            name="message"
            required
            className="w-full border-b-2 border-gray-200 focus:border-purple-500 outline-none py-2"
          ></textarea>
        </div>

        {/* ✅ React-based reCAPTCHA */}
        <ReCAPTCHA
          sitekey="6LfdSAQsAAAAABmIHSyRKtlhuWVaI4oS5zTerhzc"
          ref={recaptchaRef}
        />

        <button
          type="submit"
          className="mt-4 bg-brand hover:bg-purple-700 text-white px-6 py-2 rounded-md font-medium flex items-center gap-2 cursor-pointer"
        >
          Submit <span className="text-lg">➜</span>
        </button>
      </form>
    </div>
  );
};

export default Form;
