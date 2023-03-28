import { size } from '@/utils/const'
import styled, { css } from 'styled-components'

export const CardWrapper = styled.div<ButtonStyledProps>`
    width: 460px;
    height: 260px;
    background: #ffffff;
    box-shadow: 0px 2px 4px -2px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    margin: 15px;
    display: flex;
    justify-content: center;
    padding: 30px;
    border: 2px solid transparent;
    @media (max-width: ${size.extraLarge}) {
        width: 355px;
    }

    :hover {
        border: 2px solid rgba(244, 130, 32, 0.3);
    }
    ${({ selected }) => {
        if (selected) {
            return css`
                border: 2px solid rgba(244, 130, 32, 0.3);
            `
        }
    }}
`
export const MentorInfo = styled.div`
    width: 130px;
    max-width: 130px;
`

export const AvatarStyled = styled.img`
    border-radius: 50%;
`

export const NameStyled = styled.div`
    font-weight: 600;
    font-size: 14px;
    color: #132131;
    margin-top: 8px;
    white-space: nowrap;
`
export const HeadLineStyled = styled.div`
    font-size: 11px;
    line-height: 13px;
    color: ${(props) => props.theme.colors.darkGray};
    margin-top: 2px;
    white-space: nowrap;
`

export const MissionStyled = styled.div`
    background: ${(props) => props.theme.colors.secondary};
    border-radius: 50px;
    padding: 0 10px;
    color: ${(props) => props.theme.colors.primary};
    width: 61px;
    font-weight: 556;
    font-size: 12px;
    line-height: 26px;
    margin-top: 10px;
`
export const MenteeMissionStyled = styled(MissionStyled)`
    background: #edf2f8;
    color: #436b97;
    width: 62px;
`

export const DateStyled = styled.div`
    font-weight: 400;
    font-size: 11px;
    margin-top: 20px;
    color: ${(props) => props.theme.colors.darkGray};
`

export const ProgramNameStyled = styled.div`
    font-weight: 500;
    font-size: 12px;
    margin-top: 3px;
`
export const MenteeProgramNameStyled = styled(ProgramNameStyled)`
    text-align: end;
`

export const ButtonStyled = styled.button<ButtonStyledProps>`
    background: #ffffff;
    border: 1.3px solid rgba(244, 130, 32, 0.6);
    border-radius: 38px;
    font-weight: 600;
    font-size: 12px;
    color: ${(props) => props.theme.colors.primary};
    width: 70px;
    border: 1.3px solid rgba(244, 130, 32, 0.6);
    height: 36px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;

    ${({ selected }) => {
        if (selected) {
            return css`
                color: #ffffff;
                width: 90px;
                background: ${(props) => props.theme.colors.primary};
            `
        }
    }}
`

export const ProgressBarStyled = styled.div`
    color: ${(props) => props.theme.colors.grey};
    border: 1px solid ${(props) => props.theme.colors.region};
    margin-top: 10px;
`

export const MenuActions = styled.div`
    width: 130px;
    max-width: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
export const MenteeInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    width: 130px;
    max-width: 130px;
`
export const MenuActionButtons = styled.div`
    position: relative;
`
