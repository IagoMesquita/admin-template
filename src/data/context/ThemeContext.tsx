import { createContext, useState } from "react";

type Theme = 'dark' | '';

interface ThemeContextProps {
  theme?: Theme;
  changeTheme?: () => void;
 
}

interface Props {
  children: React.ReactNode;
}
const ThemeContext = createContext<ThemeContextProps>({})


export function AppProvider({ children }: Props) {

  const [theme, setTheme] = useState<Theme>('')

  function changeTheme() {
      setTheme(theme === ''? 'dark' : '' );
  }

  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext;