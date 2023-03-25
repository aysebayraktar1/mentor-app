import React, { FC } from 'react'
import { MenuLeftSide, MenuRightSide, MenuContainer, ButtonStyled } from './styled'

const Menu: FC = () => {
    return (
        <MenuContainer>
            <MenuRightSide>
                <ButtonStyled icon="matching-icon" iconPosition="left" iconsize="medium">
                    Run Matching Engine
                </ButtonStyled>
                <ButtonStyled icon="list-icon" iconPosition="left" variant="outline" iconsize="small">
                    List View
                </ButtonStyled>
            </MenuRightSide>
            <MenuLeftSide>
                <ButtonStyled variant="text">Ignore</ButtonStyled>
                <ButtonStyled variant="outline">Add to Queue</ButtonStyled>
                <ButtonStyled>Match Up</ButtonStyled>
            </MenuLeftSide>
        </MenuContainer>
    )
}

export default Menu
