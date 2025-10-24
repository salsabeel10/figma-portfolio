import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const currentTime = new Date().toLocaleString();
    form.current.time.value = currentTime;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent!");
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send message, please try again.");
        }
      );
  };
  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className="space-y-5">
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
            <label className="block text-sm text-gray-700 mb-1">Phone No.*</label>
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
