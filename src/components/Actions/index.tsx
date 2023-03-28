import React, { FC } from 'react'
import { ActionButtonStyled, ActionHoverContainer, HoverButton } from './styled'
import { useState } from 'react'

const Actions: FC = () => {
    const [hover, setHover] = useState(false)

    return (
        <>
            <ActionButtonStyled onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} hover={hover}>
                Actions
            </ActionButtonStyled>
            {hover && (
                <ActionHoverContainer onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                    <HoverButton border="none" background="#f48220" color="#FFFFFF">
                        Match Up
                    </HoverButton>
                    <HoverButton color="#F48220">Add to Queue</HoverButton>
                    <HoverButton border="none" color="#132131" background="#EDF0F3">
                        Details
                    </HoverButton>
                    <HoverButton border="none" color="#E75050" background="#FFF3F3">
                        Ignore
                    </HoverButton>
                </ActionHoverContainer>
            )}
        </>
    )
}
export default Actions
