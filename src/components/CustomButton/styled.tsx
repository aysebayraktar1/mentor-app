import Image from 'next/image'
import styled, { css } from 'styled-components'

interface ButtonStyledProps {
    variant?: 'default' | 'outline' | 'text'
}

interface IconStyledProps {
    iconsize?: 'small' | 'medium'
}

export const Button = styled.button<ButtonStyledProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    padding: 0 16px;
    font-size: 14px;
    font-weight: 400;
    border: none;
    border-radius: 8px;
    margin-right: 15px;

    ${({ variant }) => {
        if (variant === 'outline') {
            return css`
                color: #f48220;
                background-color: transparent;
                border: 1.3px solid rgba(244, 130, 32, 0.3);
            `
        } else if (variant === 'text') {
            return css`
                background-color: transparent;
                padding: 0;
                height: auto;
                color: #f48220;
            `
        } else {
            return css`
                color: #fff;
                background: #f48220;
            `
        }
    }}
`

export const IconStyled = styled(Image)<IconStyledProps>`
    margin-right: 12px;
    ${({ iconsize }) => {
        if (iconsize === 'medium') {
            return css`
                width: 24px;
                height: 24px;
            `
        } else {
            return css`
                width: 16px;
                height: 12px;
            `
        }
    }}
`
