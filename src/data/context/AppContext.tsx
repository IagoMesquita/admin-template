import { createContext, useState } from "react";

type Theme = 'dark' | '';

interface AppContextProps {
  theme?: Theme;
  changeTheme?: () => void;
 
}

interface Props {
  children: React.ReactNode;
}
const AppContext = createContext<AppContextProps>({})


export function AppProvider({ children }: Props) {

  const [theme, setTheme] = useState<Theme>('')

  function changeTheme() {
      setTheme(theme === ''? 'dark' : '' );
  }

  return (
    <AppContext.Provider value={{theme, changeTheme}}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContext;