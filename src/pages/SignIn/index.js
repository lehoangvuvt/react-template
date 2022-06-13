import { useState } from "react";
import useForm from "../../hooks/useForm";
import { Containter, FormContainer } from "./style";

const SignIn = () => {
  const { values, getValue, setValue } = useForm({
    username: "asd",
    password: "asd"
  })

  useState(() => {
  }, [])

  const handleLogin = () => {
    console.log(values)
  }

  return (
    <Containter>
      <FormContainer>
        <input
          type="text"
          value={getValue("username")}
          onChange={(e) => {
            setValue("username", e.target.value);
          }}
        />
        <input
          type="password"
          value={getValue("password")}
          onChange={(e) => {
            setValue("password", e.target.value);
          }}
        />
        <br />
        <button onClick={() => { handleLogin() }}>
            print value
        </button>
        <h1>{getValue("password")}</h1>
      </FormContainer>
    </Containter>
  );
};

export default SignIn;
