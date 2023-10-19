import { createContext, useEffect, useState } from "react";

interface ThemeContextProps {
  theme?: string;
  changeTheme?: () => void;
}

interface Props {
  children: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextProps>({})

export function ThemeProvider({ children }: Props) {

  const [theme, setTheme] = useState('dark')

  function changeTheme() {
    const newValue = theme === '' ? 'dark' : ''
    setTheme(newValue);
    localStorage.setItem('theme', JSON.stringify(newValue))
  }

  useEffect(() => {
    const value = localStorage.getItem('theme') ?? '';

    setTheme(JSON.parse(value))

  }, [])

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext;