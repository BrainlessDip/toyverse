import React from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "./../firebase/firebase.init";
import { toast } from "react-toastify";
import { useLocation } from "react-router";
const ForgetPassword = () => {
  const location = useLocation();
  const email = location?.state;
  const handleResetPassword = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const resetPass = sendPasswordResetEmail(auth, email);
    toast.promise(resetPass, {
      pending: "⏳ Sending password reset email...",
      success: "✅ Password reset email sent! Check your inbox.",
      error: "❌ Failed to send reset email. Please try again.",
    });
    await resetPass;
    setTimeout(() => {
      window.open("https://mail.google.com/", "_blank", "noopener,noreferrer");
    }, 1000);
  };
  return (
    <>
      <div className="flex justify-center items-center flex-col relative min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-74px)]">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend text-2xl">Forgot Password</legend>
          <form onSubmit={handleResetPassword}>
            <label className="label">Email</label>
            <input
              type="email"
              className="input focus:outline-0"
              name="email"
              defaultValue={email}
              placeholder="Email"
              autoComplete="email"
              required
            />
            <button className="btn btn-neutral mt-4 w-full">
              Reset Password
            </button>
          </form>
        </fieldset>
      </div>
    </>
  );
};

export default ForgetPassword;
