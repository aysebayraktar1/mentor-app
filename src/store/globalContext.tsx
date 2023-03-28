import React, { ReactNode, useState } from 'react'
import { useEffect } from 'react'

interface IGlobalContextProps {
    selectedMatches: IData[] | []
    setSelectedMatches: (matches: IData[]) => void
}

export const GlobalContext = React.createContext<IGlobalContextProps>({
    selectedMatches: [],
    setSelectedMatches: () => {},
})

type Props = {
    children: ReactNode
}

export const GlobalContextProvider = ({ children }: Props) => {
    const [selectedMatches, setSelectedMatches] = useState<IData[]>([])

    useEffect(() => {
        const item = window.localStorage.getItem('selectedMatches')
        setSelectedMatches(item ? JSON.parse(item) : [])
    }, [])

    useEffect(() => {
        localStorage.setItem('selectedMatches', JSON.stringify(selectedMatches))
    }, [selectedMatches])

    return (
        <GlobalContext.Provider
            value={{
                selectedMatches: selectedMatches,
                setSelectedMatches: setSelectedMatches,
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}
