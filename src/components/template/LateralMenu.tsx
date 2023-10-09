import { HomeIcon, AdjustmentsIcon, BellIcon } from "../icons";
import ItemMenu from "./ItemMenu";
import Logo from "./Logo";

export default function LateralMenu() {
  return (
    <aside>
      <div className={` 
        h-20 w-20  
        bg-gradient-to-r from-indigo-500 to-purple-800
        flex flex-col justify-center items-center 

        `}>
          <Logo/>
        </div>
      <ul>
        <ItemMenu url="/" text="Iníco" icon={HomeIcon} />
        <ItemMenu url="/adjustments" text="Ajustes" icon={AdjustmentsIcon} />
        <ItemMenu url="/notifications" text="Notificações" icon={BellIcon} />
      </ul>
    </aside>
  )
}
