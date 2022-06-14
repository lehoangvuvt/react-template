import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useAuth = () => {
  const user = useSelector(state => state.user);
  const [isAuth, setAuth] = useState(false);

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
