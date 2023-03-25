import React from 'react'
import Image from 'next/image'
import { SiderBarContainer } from './styled'

const SideBar = () => {
    return (
        <SiderBarContainer>
            <Image src="/images/mentorink-logo.png" alt="mentorink logo" width="162" height="30" />
        </SiderBarContainer>
    )
}

export default SideBar
