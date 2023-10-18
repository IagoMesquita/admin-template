import ThemeContext from "@/data/context/ThemeContext"
import ButtonChangeTheme from "./ButtonChangeTheme"
import Title from "./Title"
import { useContext } from "react"
import AvatarUser from "./AvatarUser"

interface HeaderProps {
    title: string
    subtitle: string
}


export default function Header(props: HeaderProps) {

  const {theme, changeTheme} = useContext(ThemeContext)

  return (
  
    <div className={`flex`}>
        <Title title={props.title} subtitle={props.subtitle}/>
        <div className={`flex flex-grow justify-end items-center`}>
          <ButtonChangeTheme theme={theme} changeTheme={changeTheme}/>
          <AvatarUser className={"ml-3"}/>
        </div>
    </div>
  )
}
