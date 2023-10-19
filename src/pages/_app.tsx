import { ThemeProvider } from '@/data/context/ThemeContext'
import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import { AuthProvider } from '@/data/context/AuthContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  )
}
