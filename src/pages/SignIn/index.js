import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import useForm from "../../hooks/useForm";
import useScreenSize from "../../hooks/useScreenSize";
import { login } from "../../reducers/slices/user";
import { Container, FormContainer } from "./style";

const SignIn = () => {
  const dispatch = useDispatch()
  const screen = useScreenSize()
  const user = useSelector(state => state.user)
  const initialValues = { username: "", password: "" }
  const form = useForm(initialValues)

  const handleLogin = () => {
    const formValues = form.values()
    const { username, password } = formValues
    dispatch(login({ username, password }))
  }

  const getClassName = () => {
    let className
    if (screen.width > 768) {
      className = ''
    } else if (screen.width <= 768 && screen.width > 320) {
      className = 'st768'
    } else {
      className = 'st320'
    }
    return className
  }

  return (
    <Container>
      <FormContainer className={getClassName()}>
        <br />
        <TextField
          type="text"
          title="Username"
          placeholder="Username"
          error={form.getError("username")}
          colors={["#0061FF", "red"]}
          value={form.getValue("username")}
          onChange={(e) => {
            form.setValue('username', e.target.value)
          }} />
        <br />
        <TextField
          error={form.getError("password")}
          type="password"
          title="Password"
          placeholder="Password"
          colors={["#0061FF", "red"]}
          value={form.getValue("password")}
          onChange={(e) => {
            form.setValue('password', e.target.value)
          }} />
        <br />
        <Button loading={user.status === 'loading'} onClick={handleLogin}>
          Login
        </Button>
      </FormContainer>
    </Container>
  );
};

export default SignIn;
