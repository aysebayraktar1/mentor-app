import React from 'react'
import { render } from '@testing-library/react'
import { CircularProgressBar } from './index'

describe('CircularProgressBar', () => {
    test('renders progress bar with correct progress and label', () => {
        const { getByRole, getByTestId } = render(<CircularProgressBar progress={50} label="Test Progress Bar" />)

        const progressBar = getByRole('progressbar')
        expect(progressBar.getAttribute('aria-valuenow')).toBe('50')
        expect(progressBar.getAttribute('aria-label')).toBe('Test Progress Bar')

        const progressBarText = getByTestId('progress-bar-text')
        expect(progressBarText).toHaveTextContent('50%')
    })

    test('updates progress bar when progress prop changes', () => {
        const { getByTestId, rerender } = render(<CircularProgressBar progress={25} />)
        const progressBar = getByTestId('progress-bar-bar')

        expect(progressBar.getAttribute('stroke-dashoffset')).toBe('193.20794819577225')

        rerender(<CircularProgressBar progress={75} />)
        expect(progressBar.getAttribute('stroke-dashoffset')).toBe('64.40264939859077')
    })
    it('should match snapshot', () => {
        const { container } = render(<CircularProgressBar progress={50} />)
        expect(container.firstChild).toMatchSnapshot()
    })
})
