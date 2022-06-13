import { useState } from "react";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import useForm from "../../hooks/useForm";
import { Container, FormContainer } from "./style";

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
    <Container>
      <FormContainer>
        <br />
        <TextField
          type="text"
          title="Username"
          placeholder="Username"
          color="#0061FF"
          value={getValue("username")}
          onChange={(e) => {
            setValue('username', e.target.value)
          }} />
        <br />
        <TextField
          type="password"
          title="Password"
          placeholder="Password"
          color="#0061FF"
          value={getValue("password")}
          onChange={(e) => {
            setValue('password', e.target.value)
          }} />
        <br />
        <Button>
          Login
        </Button>
      </FormContainer>
    </Container>
  );
};

export default SignIn;
