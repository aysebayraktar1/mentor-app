import React, { ReactElement } from 'react'
import { FilledCircle, Container, Text, Circle, PercentageStyled } from './styled'

export function CircularProgressBar({ progress, label = 'Progress Bar' }: CircularProgressBarProps): ReactElement {
    const strokeWidth = 9
    const radius = 100 / 2 - (strokeWidth - 2) * 2
    const circumference = radius * 2 * Math.PI
    const offset = circumference - (progress / 100) * circumference

    return (
        <Container>
            <svg
                aria-label={label}
                aria-valuemax={100}
                aria-valuemin={0}
                aria-valuenow={progress}
                height={74}
                role="progressbar"
                width={74}
                viewBox="0 0 100 100"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
            >
                <Circle cx="50" cy="50" r={radius} strokeWidth={strokeWidth} />
                <FilledCircle
                    cx="50"
                    cy="50"
                    data-testid="progress-bar-bar"
                    r={radius}
                    strokeDasharray={`${circumference} ${circumference}`}
                    strokeDashoffset={offset}
                    strokeWidth={strokeWidth}
                />
            </svg>

            <Text data-testid="progress-bar-text">
                {progress}
                <PercentageStyled>%</PercentageStyled>
            </Text>
        </Container>
    )
}
