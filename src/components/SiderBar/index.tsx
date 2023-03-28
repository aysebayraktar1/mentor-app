import React from 'react'
import Image from 'next/image'
import { SideBarContainer } from './styled'

const SideBar = () => {
    return (
        <SideBarContainer>
            <Image src="/images/mentorink-logo.png" alt="mentorink logo" width="162" height="30" />
        </SideBarContainer>
    )
}

export default SideBar
