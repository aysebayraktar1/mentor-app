import { size } from '@/utils/const'
import styled from 'styled-components'

export const SideBarContainer = styled.div`
    padding: 17px 36px 0 37px;
    width: 236px;
    max-width: 236px;
    height: 100%;
    background: #ffffff;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
    @media (max-width: ${size.large}) {
        display: none;
    }
`
