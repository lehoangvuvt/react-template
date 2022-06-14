import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "../../hooks/useRouter";
import { addAuthRoute } from "../../reducers/slices/app";
import { logout } from "../../reducers/slices/user";

const Home = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
  }

  const handleAddRoute = () => {
    dispatch(addAuthRoute('/asd'))
  }

  useEffect(() => {
    console.log(router)
  }, [])

  return (
    <>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Home;
