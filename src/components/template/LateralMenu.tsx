<<<<<<< HEAD
import { HomeIcon, AdjustmentsIcon, BellIcon, LogoutIcon } from "../icons";
import ItemMenu from "./ItemMenu";
import Logo from "./Logo";

export default function LateralMenu() {
  return (
    <aside className={`
    flex flex-col
    bg-gray-200 text-gray-700
    dark:bg-gray-900
    `}>
      <div className={` 
        h-20 w-20  
        bg-gradient-to-r from-indigo-500 to-purple-800
        flex flex-col justify-center items-center 
        `}>
        <Logo />
      </div>
      <ul className="flex-grow">
        <ItemMenu url="/" text="Iníco" icon={HomeIcon} />
        <ItemMenu url="/adjustments" text="Ajustes" icon={AdjustmentsIcon} />
        <ItemMenu url="/notifications" text="Notificações" icon={BellIcon} />
      </ul>
      <ul>
        <ItemMenu
          onClick={() => console.log("Sair!!!")}
          text="Sair"
          icon={LogoutIcon} 
          className={`
          text-red-600 dark:text-red-400 
            hover:bg-red-400 hover:text-white dark:hover:text-white
          `}
        />
=======
import { HomeIcon, AdjustmentsIcon, BellIcon } from "../icons";
import ItemMenu from "./ItemMenu";

export default function LateralMenu() {
  return (
    <aside>
      <ul>
        <ItemMenu url="/" text="Iníco" icon={HomeIcon}/>
        <ItemMenu url="/ajustes" text="Ajustes" icon={AdjustmentsIcon}/>
        <ItemMenu url="/notificacoes" text="Notificações" icon={BellIcon}/>
>>>>>>> 41e516d (feat: Icons in LateralMenu)
      </ul>
    </aside>
  )
}
