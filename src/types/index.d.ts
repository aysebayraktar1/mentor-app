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
    slice(arg0: number, PAGE_SIZE: number): React.SetStateAction<IData[]>
    movies: IData[]
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

interface ITheme {
    colors: {
        primary: string
        secondary: string
        grey: string
        darkGray: string
        error: string
        region: string
    }
}
interface ISize {
    mobileS: string
    mobileM: string
    mobileL: string
    tablet: string
    large: string
    extraLarge: string
}
