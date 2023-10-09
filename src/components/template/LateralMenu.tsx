import { HomeIcon, AdjustmentsIcon, BellIcon } from "../icons";
import ItemMenu from "./ItemMenu";

export default function LateralMenu() {
  return (
    <aside>
      <ul>
        <ItemMenu url="/" text="Iníco" icon={HomeIcon}/>
        <ItemMenu url="/adjustments" text="Ajustes" icon={AdjustmentsIcon}/>
        <ItemMenu url="/notifications" text="Notificações" icon={BellIcon}/>
      </ul>
    </aside>
  )
}
