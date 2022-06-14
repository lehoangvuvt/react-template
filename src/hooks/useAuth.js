import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../reducers/slices/user";

const useAuth = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("userData") && user.status === "idle") {
      dispatch(loginSuccess(JSON.parse(localStorage.getItem("userData"))));
    }
  }, [])

  useEffect(() => {
    if (user.status === "login-success") {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, [user])

  return {
    isAuth,
  }
}

export default useAuth;
