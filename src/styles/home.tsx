import { size } from '@/utils/const'
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    height: 100%;
`

export const PageContainer = styled.div`
    width: 100%;
`
export const PageHeader = styled.div`
    margin: 24px 18px 0 26px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1450px;
`
export const SelectMenu = styled.div`
    display: flex;
    align-items: center;
`

export const CountSelectedText = styled.div`
    margin-right: 19px;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #132131;
`
export const PageTitle = styled.h1`
    font-size: 20px;
    line-height: 40px;
    margin: 0;
    font-weight: 400;
    @media (max-width: ${size.mobileL}) {
        font-size: 16px;
        line-height: 20px;
    }
`

export const LoadMoreButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
`
