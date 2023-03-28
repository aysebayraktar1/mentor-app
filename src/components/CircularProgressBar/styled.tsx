import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    border: 1px solid #e7edf3;
    border-radius: 50%;
`

export const Circle = styled.circle`
    fill: transparent;
    stroke: #fbece0;
    stroke-linecap: round;
`

export const FilledCircle = styled(Circle)`
    stroke: ${(props) => props.theme.colors.primary};
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
    transition: stroke-dashoffset 0.5s ease-out;
`

export const Text = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    margin-bottom: 1rem;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 10;
    letter-spacing: -0.04em;
    color: #132131;
    font-size: 18px;
    font-weight: 600;
`
export const PercentageStyled = styled.span`
    font-size: 13px;
`
