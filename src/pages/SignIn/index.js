import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Link from "../../components/Link";
import TextField from "../../components/TextField";
import useForm from "../../hooks/useForm";
import { useRouter } from "../../hooks/useRouter";
import useScreenSize from "../../hooks/useScreenSize";
import { login, loginSuccess, resetLoginState } from "../../reducers/slices/user";
import { Container, FormContainer, Logo } from "./style";

const SignIn = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const screen = useScreenSize();
  const user = useSelector((state) => state.user);
  const initialValues = { username: "", password: "" };
  const { useForm } = Form
  const form = useForm(initialValues);

  const onSubmit = (e) => {
    const formValues = form.values();
    const { username, password } = formValues;
    dispatch(login({ username, password }));
  };

  useEffect(() => {
    dispatch(resetLoginState())
  }, [dispatch])

  useEffect(() => {
    if (localStorage.getItem("userData")) {
      dispatch(loginSuccess(JSON.parse(localStorage.getItem("userData"))));
    }
  }, [dispatch]);

  useEffect(() => {
    if (user.user) {
      router.navigate("/");
    }
  }, [user, router]);

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
        <Form onSubmit={onSubmit} error={user.error ?? false}>
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
            onClick={onSubmit}
          >
            Sign In
          </Button>
        </Form>
        <Link style={{ marginTop: "10px" }} to="/sign-up">
          Don't have an account? Sign up here
        </Link>
      </FormContainer>
    </Container>
  );
};

export default SignIn;
