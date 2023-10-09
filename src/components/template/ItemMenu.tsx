interface ItemMenuProps {
  url: string
  text: string
  icon: any
}
export default function ItemMenu(props: ItemMenuProps){
  return (
    <li>
      {props.icon}
    </li>
  )
}
