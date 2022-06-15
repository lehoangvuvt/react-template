import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import Link from "../../components/Link";
import TextField from "../../components/TextField";
import useForm from "../../hooks/useForm";
import useScreenSize from "../../hooks/useScreenSize";
import { login } from "../../reducers/slices/user";
import { Container, FormContainer, Logo } from "./style";

const SignUp = () => {
  const dispatch = useDispatch();
  const screen = useScreenSize();
  const user = useSelector((state) => state.user);
  const initialValues = { username: "", password: "", email: "", name: "" };
  const form = useForm(initialValues);

  const handleLogin = () => {
    const formValues = form.values();
    const { username, password } = formValues;
    dispatch(login({ username, password }));
  };

  const getClassName = () => {
    let className;
    if (screen.width > 768) {
      className = "";
    } else if (screen.width <= 768 && screen.width > 320) {
      className = "st768";
    } else {
      className = "st320";
    }
    return className;
  };

  return (
    <Container>
      <FormContainer className={getClassName()}>
        <Logo src="https://brandlogos.net/wp-content/uploads/2021/10/meta-logo.png" />
        <br />
        <TextField
          error={form.getError("name")}
          type="text"
          label="Name"
          placeholder="Name"
          colors={["#0061FF", "red"]}
          value={form.getValue("name")}
          onChange={(e) => {
            form.setValue("name", e.target.value);
          }}
        />
        <br />
        <TextField
          error={form.getError("email")}
          type="email"
          label="Email"
          placeholder="Email"
          colors={["#0061FF", "red"]}
          value={form.getValue("email")}
          onChange={(e) => {
            form.setValue("email", e.target.value);
          }}
        />
        <br />
        <TextField
          type="text"
          label="Username"
          placeholder="Username"
          error={form.getError("username")}
          colors={["#0061FF", "red"]}
          value={form.getValue("username")}
          onChange={(e) => {
            form.setValue("username", e.target.value);
          }}
        />
        <br />
        <TextField
          error={form.getError("password")}
          type="password"
          label="Password"
          placeholder="Password"
          colors={["#0061FF", "red"]}
          value={form.getValue("password")}
          onChange={(e) => {
            form.setValue("password", e.target.value);
          }}
        />
        <br />
        <Button
          style={{ marginTop: "10px" }}
          height={"50px"}
          disabled={
            form.getValue("username")?.trim().length === 0 ||
            form.getValue("password")?.trim().length === 0
          }
          loading={user.status === "login-loading"}
          onClick={handleLogin}
        >
          Sign Up
        </Button>
        <Link style={{ marginTop: "25px" }} to="/sign-in">
          Already have an account? Sign in here
        </Link>
      </FormContainer>
    </Container>
  );
};

export default SignUp;
