import { useEffect } from "react"
import { useDispatch } from 'react-redux'
import MyModal from "../../components/Modal"
import useModal from "../../hooks/useModal"
import useScreenSize from "../../hooks/useScreenSize"
import { login } from '../../reducers/slices/user'

const Home = () => {
    const { open, close, isOpen } = useModal()
    const dispatch = useDispatch()
    const screenSize = useScreenSize()

    return (
        <>
            <button onClick={open}>Open</button>
            <button onClick={() => {
                dispatch(login())
            }}>Login</button>
            <MyModal isOpen={isOpen} close={close}>
           
            </MyModal>
        </>
    )
}

export default Home