import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyModal from "../../components/Modal";
import useModal from "../../hooks/useModal";
import useScreenSize from "../../hooks/useScreenSize";
import { login } from "../../reducers/slices/user";

const Home = () => {
  const { open, close, isOpen } = useModal();
  const user = useSelector(state => state.user)
  const [loginInfo, setLoginInfo] = useState({ username: '', password: '' })
  const dispatch = useDispatch();
  const screenSize = useScreenSize();

  const handleSaga = () => {
    dispatch(login({ username: loginInfo.username, password: loginInfo.password }));
  }

  return (
    <>
      <input type='text' placeholder="username" value={loginInfo.username} onChange={(e) => {
        setLoginInfo({
          ...loginInfo,
          username: e.target.value
        })
      }} />
      <input type='text' placeholder="password" value={loginInfo.password}
      onChange={(e) => {
        setLoginInfo({
          ...loginInfo,
          password: e.target.value
        })
      }}
      />
     {user.status === 'failed' && <h1>Login failed</h1>} 
     {user.status === 'success' && <h1>Login success</h1>} 
     <br />
      <button class='bg-pink-900 text-white rounded' onClick={handleSaga}>Login</button>
    </>
  );
};

export default Home;
