import React, { FC } from 'react'
import CustomButton from '../CustomButton'
import { MenuLeftSide, MenuRightSide, MenuContainer } from './styled'

const Menu: FC = () => {
    return (
        <MenuContainer>
            <MenuRightSide>
                <CustomButton icon="matching-icon" iconPosition="left" iconsize="medium">
                    Run Matching Engine
                </CustomButton>
                <CustomButton icon="list-icon" iconPosition="left" variant="outline" iconsize="small">
                    List View
                </CustomButton>
            </MenuRightSide>
            <MenuLeftSide>
                <CustomButton variant="text">Ignore</CustomButton>
                <CustomButton variant="outline">Add to Queue</CustomButton>
                <CustomButton>Match Up</CustomButton>
            </MenuLeftSide>
        </MenuContainer>
    )
}

export default Menu
