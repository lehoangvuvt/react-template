import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import SignIn from "./SignIn"

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/sign-in' element={<SignIn />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App