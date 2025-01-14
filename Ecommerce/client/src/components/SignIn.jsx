import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import Button from "./Button";
import { UserSignIn } from "../api/index";
import { useDispatch } from "react-redux";
import { openSnackbar } from "../redux/reducers/snackbarSlice";
import { loginSuccess } from "../redux/reducers/userSlice";

const SignIn = () => {
  const dispatch = useDispatch();
  const [buttonLoading, setButtonLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateInputs = () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return false;
    }
    return true;
  };

  const handleSignIn = async () => {
    setButtonLoading(true);
    setButtonDisabled(true);
    if (validateInputs()) {
      await UserSignIn({ email, password })
        .then((res) => {
          dispatch(loginSuccess(res.data));
          dispatch(
            openSnackbar({
              message: "Login Successful",
              severity: "success",
            }),
          );
        })
        .catch((err) => {
          if (err.response) {
            setButtonLoading(false);
            setButtonDisabled(false);
            alert(err.response.data.message);
            dispatch(
              openSnackbar({
                message: err.response.data.message,
                severity: "error",
              }),
            );
          } else {
            setButtonDisabled(false);
            setButtonLoading(false);
            dispatch(
              openSnackbar({
                message: err.message,
                severity: "error",
              }),
            );
          }
        });
    }
    setButtonDisabled(false);
    setButtonLoading(false);
  };
  return (
    <div className="container flex w-full max-w-[500px] flex-col gap-9">
      <div>
        <p className="Title text-[30px] font-extrabold">Welcome to Krist 👋</p>
        <span className="text-[16px] font-normal">
          Please login with your details here
        </span>
      </div>
      <div className="flex flex-col gap-5">
        <TextInput
          label="Email Address"
          placeholder="Enter your email address"
          value={email}
          handelChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          label="Password"
          placeholder="Enter your password"
          password
          value={password}
          handelChange={(e) => setPassword(e.target.value)}
        />
        <p className="cursor-pointer text-end text-sm font-bold">
          Forget Password?
        </p>
        <Button
          text="Sign In"
          onClick={handleSignIn}
          isLoading={buttonLoading}
          isDisabled={buttonDisabled}
        />
      </div>
    </div>
  );
};

export default SignIn;
