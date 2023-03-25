import Image from 'next/image'
import React, { FC } from 'react'
import { HeaderStyled, HeaderTitle, HeaderRightItemRound, HeaderRightSide } from './styled'

const images = [
    { src: '/icons/notif-icon.svg', alt: 'notification icon', width: 20, height: 16 },
    { src: '/icons/question-icon.svg', alt: 'question icon', width: 8, height: 14 },
    { src: '/icons/export-icon.svg', alt: 'export icon', width: 13, height: 14 },
]

const Header: FC = () => {
    return (
        <HeaderStyled>
            <HeaderTitle>Applications</HeaderTitle>
            <HeaderRightSide>
                {images.map((image: IImageData) => (
                    <HeaderRightItemRound key={image.src}>
                        <Image src={image.src} alt={image.alt} width={image.width} height={image.height} />
                    </HeaderRightItemRound>
                ))}
            </HeaderRightSide>
        </HeaderStyled>
    )
}

export default Header
