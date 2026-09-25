import { toast } from "react-toastify";
import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Form = () => {
  const form = useRef();
  const recaptchaRef = useRef();

  const success = () => toast.success("Form Submitted!");
  const fail = () => toast.error("Error!");

  const submitForm = async (e) => {
  e.preventDefault();

  const formEl = form.current;

  // Honeypot
  if (formEl._gotcha.value) {
    console.warn("Bot detected - message blocked.");
    return;
  }

  // reCAPTCHA
  const token = recaptchaRef.current.getValue();

  if (!token) {
    alert("Please verify that you're not a robot.");
    return;
  }

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formEl.name.value,
        email: formEl.email.value,
        phone: formEl.phone.value,
        subject: formEl.subject.value,
        message: formEl.message.value,
        recaptchaToken: token,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Submission failed");
    }

    console.log("Form submitted:", data);

    success();
    recaptchaRef.current.reset();
    formEl.reset();
  } catch (error) {
    console.error("Form submission error:", error);
    fail();
  }
};

  return (
    <div>
      <form ref={form} onSubmit={submitForm} className="space-y-5">
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
        <div className="recaptcha-wrapper">
          <ReCAPTCHA
            sitekey="6LfdSAQsAAAAABmIHSyRKtlhuWVaI4oS5zTerhzc"
            ref={recaptchaRef}
          />
        </div>

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
