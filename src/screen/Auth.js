import React from "react";
import SimpleInput from "../components/input";
import Button from "../components/button";

const Auth = () => {
  return (
    <div className=" h-screen flex-col justify-center flex">
      <div className="p-2 flex flex-row justify-around  cursor-pointer  ">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <h4 className="text-center text-2xl font-sans  m-4">
              Let's get you Login
            </h4>
            <h5 className="text-center text-sm m-4">
              Enter your information below
            </h5>
            <div className="p-1 border-2 border m-2 border-gray-200 w-96 h-10 bg-white flex flex-row items-center justify-center rounded-3xl">
              <img src="google.png" alt="" className="h-8" />
              <p>Google</p>
            </div>
            <div className="flex flex-row items-center m-2">
              <hr className="border w-52" />
              <p>or log in with</p>
              <hr className="border w-52" />
            </div>
          </div>

          <SimpleInput label={"Email"} placeholder={"Enter your email"} classname={"w-96"}/>
          <SimpleInput label={"Password"} placeholder={"Enter your password"} classname={"w-96"}/>
          <div className="">
            <p className="text-end w-96 cursor-pointer">Forget password?</p>
          </div>
          <div className="m-2">
            <p className="text-sm">
              By continuing you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
          <Button name={"login"} />
          <div>
            <p>
              Don't have an account yet? <span>Sign Up</span>{" "}
            </p>
          </div>
        </div>
        <div>
          <img src="auth.jpg" alt="" className="w-96 h-96" />
        </div>
      </div>
    </div>
  );
};

export default Auth;
