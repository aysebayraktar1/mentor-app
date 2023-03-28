import React, { FC } from 'react'
import { Button, IconStyled } from './styled'

export const CustomButton: FC<IButtonProps> = ({
    icon,
    iconPosition,
    iconsize = 'small',
    children,
    variant = 'default',
    bg,
    onClick,
}) => {
    return (
        <Button variant={variant} bg={bg} onClick={onClick}>
            {icon && iconPosition === 'left' && (
                <IconStyled iconsize={iconsize} src={`/icons/${icon}.svg`} alt={icon} width={20} height={20} />
            )}
            {children}
            {icon && iconPosition === 'rigth' && (
                <IconStyled iconsize={iconsize} src={`/icons/${icon}.svg`} alt={icon} width={20} height={20} />
            )}
        </Button>
    )
}

export default CustomButton
