import Link from "next/link"

interface ItemMenuProps {
  url: string
  text: string
  icon: any
}
export default function ItemMenu(props: ItemMenuProps) {
  return (
    <li className={` hover:bg-gray-100`}>
      <Link href={props.url} className={`
        flex flex-col justify-center items-center
        h-20 w-20
      `}>
          {props.icon}
          <span className={` text-xs font-light text-gray-600`}>
            {props.text}
          </span>
      </Link>
    </li>
  )
}
