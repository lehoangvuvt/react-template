import { CustomButton } from './style'
import ReactLoading from 'react-loading'

const Button = ({
    width = '100%',
    children,
    height = '50px',
    background = "#0061FF",
    color = "white",
    onClick,
    fontSize = 16,
    loading = false, }) => {
    return (
        <CustomButton
            fontSize={fontSize}
            className={loading ? 'loading' : ''}
            onClick={() => !loading && onClick()}
            width={width} height={height} background={background} color={color}>
            {loading && <ReactLoading type='spin' color={color} height={'1em'} width={'1em'} />} {children}
        </CustomButton>
    )
}

export default Button