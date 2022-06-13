import { useEffect } from "react";
import { useDispatch } from "react-redux";
import MyModal from "../../components/Modal";
import useModal from "../../hooks/useModal";
import useScreenSize from "../../hooks/useScreenSize";
import { setUser } from "../../reducers/slices/user";
import { fetchUser } from "../../saga/user";

const Home = () => {
  const { open, close, isOpen } = useModal();
  const dispatch = useDispatch();
  const screenSize = useScreenSize();

  const handleSaga = () => {
    dispatch(setUser({ username: "nhatminh0509", password: "123456" }));
  };

  return (
    <>
      <button onClick={handleSaga}>Saga</button>
      <button onClick={open}>Open</button>
      <MyModal isOpen={isOpen} close={close}></MyModal>
    </>
  );
};

export default Home;
