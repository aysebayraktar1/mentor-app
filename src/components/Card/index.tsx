import { formatDate } from '@/utils/formatDate'
import React, { FC } from 'react'
import { CircularProgressBar } from '../CircularProgressBar'
import Image from 'next/image'
import { useState } from 'react'
import {
    CardWrapper,
    MenteeInfo,
    MenuActions,
    MentorInfo,
    AvatarStyled,
    NameStyled,
    HeadLineStyled,
    MissionStyled,
    DateStyled,
    ProgramNameStyled,
    MenteeProgramNameStyled,
    ButtonStyled,
    MenteeMissionStyled,
    MenuActionButtons,
} from './styled'
import Actions from '../Actions'
import { useGlobalContext } from '@/store/'

export const Card: FC<{
    match: IData
}> = ({ match }) => {
    const {
        mentorFullName,
        mentorAvatarUrl,
        mentorHeadline,
        menteeHeadline,
        menteeFullName,
        mentorApplicationDate,
        programName,
        menteeApplicationDate,
        score,
        id,
    } = match
    const { setSelectedMatches, selectedMatches } = useGlobalContext()

    const handleSelect = () => {
        setSelectedMatches([match, ...selectedMatches])
    }

    const selectedItem = selectedMatches?.some((match: IData) => match.id === id)
    const buttonText = selectedItem ? 'Selected' : 'Select'

    return (
        <CardWrapper selected={selectedItem}>
            <MentorInfo>
                <AvatarStyled loading="lazy" src={mentorAvatarUrl} alt="mentor avatar" width={60} height={60} />
                <NameStyled>{mentorFullName}</NameStyled>
                <HeadLineStyled>{mentorHeadline}</HeadLineStyled>
                <MissionStyled>Mentor</MissionStyled>
                <DateStyled>Applied on {formatDate(mentorApplicationDate)}</DateStyled>
                <ProgramNameStyled>{programName}</ProgramNameStyled>
            </MentorInfo>
            <MenuActions>
                <CircularProgressBar progress={score} />
                <MenuActionButtons>
                    <ButtonStyled selected={selectedItem} onClick={handleSelect}>
                        {selectedItem && <Image src="/icons/check-icon.svg" alt="check icon" width={12} height={9} />}
                        {buttonText}
                    </ButtonStyled>
                    <Actions />
                </MenuActionButtons>
            </MenuActions>
            <MenteeInfo>
                <AvatarStyled loading="lazy" src={mentorAvatarUrl} alt="mentor avatar" width={60} height={60} />
                <NameStyled>{menteeFullName}</NameStyled>
                <HeadLineStyled>{menteeHeadline}</HeadLineStyled>
                <MenteeMissionStyled>Mentee</MenteeMissionStyled>
                <DateStyled>Applied on {formatDate(menteeApplicationDate)}</DateStyled>
                <MenteeProgramNameStyled>{programName}</MenteeProgramNameStyled>
            </MenteeInfo>
        </CardWrapper>
    )
}
