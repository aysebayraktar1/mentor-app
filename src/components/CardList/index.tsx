import React, { FC } from 'react'
import { Card } from '../Card'
import { CardListStyled, LoadingStyled } from './styled'

const CardList: FC<{ matches: IData[] }> = ({ matches }) => {
    return (
        <>
            <CardListStyled>
                {matches.length ? (
                    matches.map((match: IData, idx) => <Card key={idx} match={match} />)
                ) : (
                    <LoadingStyled>Loading..</LoadingStyled>
                )}
            </CardListStyled>
        </>
    )
}

export default CardList
