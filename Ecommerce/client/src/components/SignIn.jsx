import React from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import Button from "./Button";

const SignIn = () => {
  return (
    <div className="container flex w-full max-w-[500px] flex-col gap-9">
      <div>
        <p className="Title text-[30px] font-extrabold">Welcome to Krist 👋</p>
        <span className="text-[16px] font-normal">
          Plese login with your details here
        </span>
      </div>
      <div className="flex flex-col gap-5">
        <TextInput
          label="Email Address"
          placeholder="Enter your email address"
        />
        <TextInput label="Password" placeholder="Enter your password" />
        <p className="cursor-pointer text-end text-sm font-bold">
          Forget Password?
        </p>
        <Button text="Sign In" />
      </div>
    </div>
  );
};

export default SignIn;
