import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import useForm from "../../hooks/useForm";
import { login } from "../../reducers/slices/user";
import { Container, FormContainer } from "./style";

const SignIn = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const initialValues = { username: "", password: "" }
  const form = useForm(initialValues)

  const handleLogin = () => {
    const formValues = form.values()
    const { username, password } = formValues
    dispatch(login({ username, password }))
  }

  return (
    <Container>
      <FormContainer>
        <br />
        <TextField
          type="text"
          title="Username"
          placeholder="Username"
          error={true}
          color="#0061FF"
          value={form.getValue("username")}
          onChange={(e) => {
            form.setValue('username', e.target.value)
          }} />
        <br />
        <TextField
          type="password"
          title="Password"
          placeholder="Password"
          color="#0061FF"
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
