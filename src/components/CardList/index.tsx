import { useGlobalContext } from '@/store'
import React, { FC } from 'react'
import { Card } from '../Card'
import { CardListStyled, LoadingStyled } from './styled'

const CardList: FC<{ matches: IData[] }> = ({ matches }) => {
    const { selectedMatches, setSelectedMatches } = useGlobalContext()

    const handleCardClick = (id: string) => {
        if (selectedMatches.includes(id)) {
            setSelectedMatches(selectedMatches.filter((matchId) => matchId !== id))
        } else {
            setSelectedMatches([...selectedMatches, id])
        }
    }

    return (
        <>
            <CardListStyled>
                {matches.length ? (
                    matches.map((match: IData) => (
                        <Card
                            key={match.id}
                            match={match}
                            selected={selectedMatches.includes(match?.id)}
                            onClick={handleCardClick}
                        />
                    ))
                ) : (
                    <LoadingStyled>Loading..</LoadingStyled>
                )}
            </CardListStyled>
        </>
    )
}

export default CardList
