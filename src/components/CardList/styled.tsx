import { size } from '@/utils/const'
import styled from 'styled-components'

export const CardListStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: 11px;

    @media (max-width: ${size.large}) {
        justify-content: center;
        margin-left: 0;
    }
`

export const LoadingStyled = styled.h3`
    margin-left: 16px;
`
