import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Form/Button";
import TextField from "../components/Form/TextField";
import { authentication } from "../firebase/firebase-config";
import useAuth from "../hooks/useAuth";
import GoogleSignIn from "./GoogleSignIn";
import { ResetPassword } from "./ResetPassword";
const SignIn = () => {
  const [err, setErr] = useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  const { signInUser } = useAuth();

  // handle change
  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  //handle submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signInUser(userInput.email, userInput.password);
  };

  //form inputs
  const Inputs = [
    {
      id: 1,
      type: "email",
      placeholder: "Email",
      value: `${userInput.email}`,
      name: "email",
    },
    {
      id: 2,
      type: "password",
      placeholder: "Password",
      value: `${userInput.password}`,
      name: "password",
    },
  ];

  const handleSubmitReset = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(authentication, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <main className="h-screen w-full banner">
      <div className="flex flex-col justify-center items-center h-screen">
        {/* logo  */}
        {/* <Brand /> */}
        {/* sign up form  */}

        <div className="bg-white w-96 mt-6 p-4 rounded-lg shadow-lg">
          <div className="py-6 justify-center items-center">
            <div className="">
              {/* <p
                tabIndex={0}
                role="heading"
                aria-label="Login to your account"
                className="text-2xl font-bold leading-6 text-gray-800"
              >
                Login to your account
              </p> */}
              {/* <p className="text-sm mt-4 font-medium leading-none text-gray-500">
                Dont have account?{" "}
                <Link to="/sign-up">
                  <span
                    tabIndex={0}
                    role="link"
                    aria-label="Sign up here"
                    className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer"
                  >
                    {" "}
                    Sign up here
                  </span>
                </Link>
              </p> */}

              <button
                onClick={() => setShowModal(true)}
                className="text-base text-cyan-500 text-center my-4 hover:underline "
              >
                Forgot Admin Password ?
              </button>
            </div>
          </div>
          {showModal ? (
            <>
              <div className="justify-center items-center  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none py-6 text-center">
                    <div className="flex justify-end pr-5 mt-[-10px]">
                      <button onClick={() => setShowModal(false)}>
                        <AiFillCloseCircle></AiFillCloseCircle>
                      </button>
                    </div>
                    <h1 className="">Reset Your Password</h1>

                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <ResetPassword />
                    </div>
                    {/*footer*/}
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
          <form className="" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-6">
              {Inputs.map((input) => (
                <TextField
                  key={input.id}
                  type={input.type}
                  placeholder={input.placeholder}
                  value={input.value}
                  name={input.name}
                  onChange={handleChange}
                />
              ))}
            </div>
            <Button text="Sign In" />
            <GoogleSignIn text="Sign In With Google" />
          </form>
        </div>
      </div>
    </main>
  );
};

export default SignIn;
