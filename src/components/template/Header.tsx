import AppContext from "@/data/context/AppContext"
import ButtonChangeTheme from "./ButtonChangeTheme"
import Title from "./Title"
import { useContext } from "react"

interface HeaderProps {
    title: string
    subtitle: string
}


export default function Header(props: HeaderProps) {

  const {theme, changeTheme} = useContext(AppContext)

  return (
  
    <div className={`flex`}>
        <Title title={props.title} subtitle={props.subtitle}/>
        <div className={`flex flex-grow justify-end`}>
          <ButtonChangeTheme theme={theme} changeTheme={changeTheme}/>
        </div>
    </div>
  )
}
