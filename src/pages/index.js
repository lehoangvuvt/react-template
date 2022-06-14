import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import { useRouter } from "../hooks/useRouter";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const App = () => {
  const user = useSelector(state => state.user)
  const app = useSelector(state => state.app)
  const router = useRouter()

  useEffect(() => {
    const currentPath = router.pathname
    if (app.authRoutes.find(route => route === currentPath)) {
      if(!localStorage.getItem('userData')) router.navigate('/sign-in')
    }
  }, [router, app])

  useEffect(() => {
    if (user.status === 'logout-success') router.navigate('/sign-in')
  }, [user, router])

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/asd" element={<Home />} />
        </Route>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default App;
