import Image from 'next/image'
import styled, { css } from 'styled-components'

export const Button = styled.button<CustomButtonStyledProps>`
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
    cursor: pointer;

    ${({ variant, bg }) => {
        if (variant === 'outline') {
            return css`
                color: ${(props) => props.theme.colors.primary};
                background-color: transparent;
                border: 1.3px solid rgba(244, 130, 32, 0.3);
            `
        } else if (variant === 'text') {
            return css`
                background-color: transparent;
                padding: 0;
                height: auto;
                color: ${(props) => props.theme.colors.error};
            `
        } else if (bg === 'white') {
            return css`
                color: #132131;
                background: #ffffff;
                box-shadow: 0px 5px 5px -5px rgba(19, 33, 49, 0.2);
            `
        } else {
            return css`
                color: #fff;
                background: ${(props) => props.theme.colors.primary};
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
