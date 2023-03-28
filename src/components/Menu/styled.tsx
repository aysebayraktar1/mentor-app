import { size } from '@/utils/const'
import styled from 'styled-components'

export const MenuContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px 26px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    align-items: center;
    @media (max-width: ${size.tablet}) {
        flex-wrap: wrap;
    }
`

export const MenuRightSide = styled.div`
    display: flex;
    @media (max-width: ${size.tablet}) {
        width: 100%;
        margin-bottom: 10px;
    }
`

export const MenuLeftSide = styled.div``
