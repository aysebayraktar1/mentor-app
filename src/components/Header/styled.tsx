import styled from 'styled-components'

export const HeaderStyled = styled.div`
    background-color: ${(props) => props.theme.colors.primary};
    width: 100%;
    color: white;
    display: flex;
    align-items: center;
    padding-left: 26px;
    justify-content: space-between;
    height: 64px;
`

export const HeaderTitle = styled.h1`
    font-weight: 600;
    font-size: 18px;
`

export const HeaderRightSide = styled.div`
    display: flex;
`

export const HeaderRightItemRound = styled.button`
    width: 40px;
    height: 40px;
    background: #e2771a;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    position: relative;
    cursor: pointer;
    border: none;
`

export const BadgeStyled = styled.div`
    position: absolute;
    width: 20px;
    height: 15px;
    right: 117px;
    top: 5px;
    background: #ffffff;
    border-radius: 26px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
`
