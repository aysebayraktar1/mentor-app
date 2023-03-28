import Image from 'next/image'
import React, { FC } from 'react'
import { HeaderStyled, HeaderTitle, HeaderRightItemRound, HeaderRightSide, BadgeStyled } from './styled'

const COUNT_NOTIFICATION = 16
const Header: FC = () => {
    return (
        <HeaderStyled>
            <HeaderTitle>Applications</HeaderTitle>
            <HeaderRightSide>
                <HeaderRightItemRound>
                    <Image src="/icons/notif-icon.svg" alt="notification icon" width={20} height={16} />
                </HeaderRightItemRound>
                <BadgeStyled>{COUNT_NOTIFICATION}</BadgeStyled>
                <HeaderRightItemRound>
                    <Image src="/icons/question-icon.svg" alt="question icon" width={8} height={14} />
                </HeaderRightItemRound>
                <HeaderRightItemRound>
                    <Image src="/icons/export-icon.svg" alt="export icon" width={13} height={14} />
                </HeaderRightItemRound>
            </HeaderRightSide>
        </HeaderStyled>
    )
}

export default Header
