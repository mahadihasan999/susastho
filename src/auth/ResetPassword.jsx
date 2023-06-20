import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import TextField from "../components/Form/TextField";

export const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const auth = getAuth();

  const triggerResetEmail = async () => {
    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      alert("Password reset email sent");
      await sendPasswordResetEmail(auth, email);
    } else {
      alert("Please enter valid email");
    }
  };

  const handleChange = (event) => {
    setEmail(event.target.value);

    console.log("value is:", event.target.value);
  };
  console.log(email);

  return (
    <div className="resetPassword-main flex flex-col gap-4">
      <TextField
        type="email"
        placeholder="Enter your valid Email"
        onChange={handleChange}
      />
      <button
        onClick={triggerResetEmail}
        className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 px-3 py-3 mx-6 text-gray-100 rounded"
        type="button"
      >
        Reset password
      </button>
    </div>
  );
};
