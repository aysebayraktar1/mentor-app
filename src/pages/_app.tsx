import GlobalStyle from '@/styles/globalStyle'
import { ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import theme from '@/styles/theme'
import { GlobalContextProvider } from '@/store/globalContext'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Head>
                    <title>Mentorink</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Head>
                <GlobalStyle />
                <GlobalContextProvider>
                    <Component {...pageProps} />
                </GlobalContextProvider>
            </ThemeProvider>
        </>
    )
}
