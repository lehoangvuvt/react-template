import { useRouter } from "../../hooks/useRouter"
import { CustomLink } from "./style"

const Link = ({ children, to, fontSize = 15, ...rest }) => {
    const router = useRouter()

    const redirect = () => {
        router.navigate(to)
    }

    return(
        <CustomLink fontSize={fontSize} onClick={redirect} {...rest}>
            {children}
        </CustomLink>
    )
}

export default Link