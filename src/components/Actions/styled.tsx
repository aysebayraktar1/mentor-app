import styled, { css } from 'styled-components'
import { ButtonStyled } from '../Card/styled'

export const ActionButtonStyled = styled(ButtonStyled)<ActionButtonProps>`
    color: ${(props) => props.theme.colors.grey};
    border: 1px solid ${(props) => props.theme.colors.region};
    margin-top: 10px;
    position: relative;

    ${({ hover }) => {
        if (hover) {
            return css`
                border: none;
                z-index: 100;
            `
        }
    }}
`

export const HoverButton = styled(ButtonStyled)<ActionButtonProps>`
    margin-top: 6px;
    border: 1.3px solid rgba(244, 130, 32, 0.3);
    background: ${(props) => props.background};
    color: ${(props) => props.color};
    border: ${(props) => props.border};
    width: 110px;
    height: 32px;
    border-radius: 48px;
    position: relative;
    font-size: 11px;
`
export const ActionHoverContainer = styled.div`
    color: ${(props) => props.theme.colors.grey};
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #ffffff;
    border: 1px solid #e1e7ee;
    box-shadow: 0px 10px 20px -5px rgba(0, 0, 0, 0.15);
    border-radius: 13px;
    z-index: 15;
    padding: 46px 16px 20px;
    top: 44px;
    left: -35px;
    min-width: 150px;
`
