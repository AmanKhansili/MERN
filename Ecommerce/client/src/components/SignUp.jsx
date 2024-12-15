import React from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import Button from "./Button";

const SignUp = () => {
  return (
    <div className="container flex w-full max-w-[500px] flex-col gap-9">
      <div>
        <p className="Title text-[30px] font-extrabold">
          Create New Account 👋
        </p>
        <span className="text-[16px] font-normal">
          Plese enter details to create a new account
        </span>
      </div>
      <div className="flex flex-col gap-5">
        <TextInput label="Full Name" placeholder="Enter your name" />
        <TextInput
          label="Email Address"
          placeholder="Enter your email address"
        />
        <TextInput label="Password" placeholder="Enter your password" />
        <Button text="Sign In" />
      </div>
    </div>
  );
};

export default SignUp;
