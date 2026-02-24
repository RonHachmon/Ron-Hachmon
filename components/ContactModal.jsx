"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const initialForm = { name: "", email: "", message: "" };

const ContactModal = ({ isOpen, onClose }) => {
  const [formState, setFormState] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const handleClose = () => {
    setFormState(initialForm);
    setStatus("idle");
    setErrorMsg("");
    onClose();
  };

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formState;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      setErrorMsg("All fields are required.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong.");
      } else {
        setStatus("success");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] bg-slate-900/80 backdrop-blur-sm flex items-center justify-center"
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 w-full max-w-md mx-4 animate-fade-in-up">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-slate-200 font-semibold text-lg">Get in Touch</h2>
          <button
            onClick={handleClose}
            aria-label="Close modal"
            className="text-slate-400 hover:text-teal-300 transition-colors duration-200"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {status === "success" ? (
          <div className="text-center py-8">
            <svg className="w-12 h-12 text-teal-300 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-slate-200 font-semibold mb-1">Message sent!</p>
            <p className="text-slate-400 text-sm">Thanks for reaching out. I'll get back to you soon.</p>
            <button
              onClick={handleClose}
              className="mt-6 px-5 py-2 rounded-lg bg-teal-300/10 text-teal-300 text-sm font-semibold hover:bg-teal-300/20 transition-colors duration-200"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-semibold tracking-widest uppercase text-slate-400 font-display mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  disabled={status === "loading"}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-slate-200 placeholder-slate-500 focus:border-teal-300 focus:ring-1 focus:ring-teal-300 outline-none transition-colors duration-200 disabled:opacity-50"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold tracking-widest uppercase text-slate-400 font-display mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  disabled={status === "loading"}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-slate-200 placeholder-slate-500 focus:border-teal-300 focus:ring-1 focus:ring-teal-300 outline-none transition-colors duration-200 disabled:opacity-50"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold tracking-widest uppercase text-slate-400 font-display mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="What's on your mind?"
                  rows={4}
                  maxLength={2000}
                  disabled={status === "loading"}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-slate-200 placeholder-slate-500 focus:border-teal-300 focus:ring-1 focus:ring-teal-300 outline-none transition-colors duration-200 resize-none disabled:opacity-50"
                />
                <p className="text-slate-500 text-xs mt-1 text-right">{formState.message.length}/2000</p>
              </div>

              {/* Error */}
              {status === "error" && (
                <p className="text-red-400 text-sm">{errorMsg}</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-[#5eead4] text-slate-900 font-semibold rounded-lg py-2.5 flex items-center justify-center gap-2 hover:bg-teal-200 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>,
    document.body
  );
};

export default ContactModal;
