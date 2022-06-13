import { useState } from 'react'
import { InputContainer, Input, Title } from './style'

const TextField = ({
    value = '',
    onChange, width = '100%',
    title, placeholder,
    color = "blue",
    type = "text",
    fontSize = 16,
    height = 50,
    required = false
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
        <InputContainer height={height} fontSize={fontSize} color={color} width={width} className={focus ? 'focus' : ''}>
            <Input
                type={type}
                className={focus || value.trim().length > 0 ? 'focus' : 'blur'}
                onChange={onChange}
                onBlur={() => { setFocus(false) }}
                onFocus={() => { setFocus(true) }}
                value={value} placeholder={focus ? '' : placeholder ?? title} />
            <Title color={color} className={getClassName()}>{title ?? ""} {required && '*'}</Title>
        </InputContainer>
    )
}

export default TextField