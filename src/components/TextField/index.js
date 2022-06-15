import { useState } from 'react'
import { InputContainer, Input, Label, Container, ErrorText } from './style'

const TextField = ({
    value = '',
    onChange, width = '100%',
    label, placeholder, 
    colors = ["#0061FF", "red"],
    type = "text",
    fontSize = 15,
    height = 50,
    required = false,
    error,
}) => {
    const [focus, setFocus] = useState(false)

    const getClassName = () => {
        let className = ''
        if (focus && value.trim().length === 0) {
            className = 'focus-no-value'
        } else if (focus && value.trim().length > 0) {
            className = 'focus-has-value'
        } else if (!focus && value.trim().length > 0) {
            className = 'blur-has-value'
        }
        return className
    }

    return (
        <Container>
            <InputContainer height={height} fontSize={fontSize} color={error ? colors[1] : colors[0]} width={width} className={focus ? 'focus' : ''}>
                <Input
                    type={type}
                    className={focus || value.trim().length > 0 ? 'focus' : 'blur'}
                    onChange={onChange}
                    onBlur={() => { setFocus(false) }}
                    onFocus={() => { setFocus(true) }}
                    value={value} placeholder={focus ? '' : placeholder ?? label} />
                <Label color={error ? colors[1] : colors[0]} className={getClassName()}>{label ?? ""} {required && '*'}</Label>
            </InputContainer>
            {error && <ErrorText color={colors[1]}>{error}</ErrorText>}
        </Container>
    )
}

export default TextField