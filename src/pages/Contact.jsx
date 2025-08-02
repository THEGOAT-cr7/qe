import React from "react";

const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form className="space-y-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Your name"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="your@email.com"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Your message..."
          ></textarea>
        </div>

        <div className="form-control">
          <button type="submit" className="btn btn-primary w-fit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
