import { CustomButton } from './style'

const Button = ({
    width = '100%',
    children,
    height = '50px',
    background = "#0061FF",
    color = "white",
    onClick,
    loading = true }) => {
    return (
        <CustomButton
            className={loading ? 'loading' : ''}
            onClick={() => {
                if (loading) return
                onClick()
            }}
            width={width} height={height} background={background} color={color}>
            {children}
        </CustomButton>
    )
}

export default Button