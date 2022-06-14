import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../reducers/slices/user";

const Home = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Home;
