import { SunIcon } from "../icons";

interface ButtonChangeThemeProps {
  theme?: string;
  changeTheme?: () => void
}

export default function ButtonChangeTheme(props: ButtonChangeThemeProps) {
  return props.theme === 'dark' ? (
    <div onClick={props.changeTheme} className={`
      hidden sm:flex justify-center cursor-pointer
      bg-gradient-to-r from-yellow-300 to-yellow-600
      w-14 lg:w-24 h-8 p-1 rounded-full
    `}>
      <div className={`
        flex items-center justify-center
        bg-white text-yellow-600 
        w-6 h-6 rounded-full 
      `}> 
        {SunIcon(4)}
      </div>
      <div className={`
        hidden lg:flex items-center ml-4
        text-white 
      `}>
        <span>Claro</span>
      </div>
    </div>
  ) : (
    <div></div>
  )


}
