interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
    variant?: 'default' | 'outline' | 'text'
    icon?: string
    iconPosition?: string
    iconsize?: 'small' | 'medium'
    bg?: 'white'
    onClick?: () => void
}

interface IData {
    createdAt: string
    id: string
    menteeApplicationDate: string
    menteeFullName: string
    menteeHeadline: string
    mentorApplicationDate: string
    mentorAvatarUrl: string
    mentorFullName: string
    mentorHeadline: string
    programName: string
    score: number
}

interface IResponse {
    movies: any
    status: string
}

interface CircularProgressBarProps {
    progress: number
    label?: string
}

interface ButtonStyledProps {
    selected?: boolean
}

interface CustomButtonStyledProps {
    variant?: 'default' | 'outline' | 'text'
    bg?: 'white' | undefined
}

interface IconStyledProps {
    iconsize?: 'small' | 'medium'
}

interface ActionButtonProps {
    background?: string
    color?: string
    border?: string
    hover?: boolean
}
