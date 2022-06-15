import useForm from "../../hooks/useForm"
import { ErrorText } from "./style"

const Form = ({ children, onSubmit, error }) => {
    
    const handleKeyDown = (e) => {
        if(e.code === 'Enter' || e.keyCode === 13) onSubmit()
    }

    return(
        <div onKeyDown={handleKeyDown}>
            {children}
            <ErrorText>{error}</ErrorText>
        </div>
    )
}

Form.useForm = useForm

export default Form