interface IImageData {
    src: string
    alt: string
    width: number
    height: number
}

interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
    variant?: 'default' | 'outline' | 'text'
    icon?: string
    iconPosition?: string
    iconsize?: 'small' | 'medium'
}
