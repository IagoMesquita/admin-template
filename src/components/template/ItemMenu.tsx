<<<<<<< HEAD
<<<<<<< HEAD
import Link from "next/link"

interface ItemMenuProps {
  text: string
  icon: any
  url?: string
  className?: string
  onClick?: (event: any) => void
}
export default function ItemMenu(props: ItemMenuProps) {
  return (
    <li onClick={ props.onClick } className={`
     hover:bg-gray-100 hover: dark:hover:bg-gray-800
     cursor-pointer
     `}>
      {props.url ? (
        <Link href={props.url} className={`
        flex flex-col justify-center items-center
        h-20 w-20
        dark:text-gray-200
      `}>
          {props.icon}
          <span className={` text-xs font-light text-gray-600 dark:text-gray-200 `}>
            {props.text}
          </span>
        </Link>
      ) : (
        <a className={`
        flex flex-col justify-center items-center
        text-gray-600
        h-20 w-20 ${props.className}
      `}>
          {props.icon}
          <span className={` text-xs font-light `}>
            {props.text}
          </span>
        </a>
      )}

=======
=======
import Link from "next/link"

>>>>>>> 21fa3e5 (feat: style ItemMenu)
interface ItemMenuProps {
  url: string
  text: string
  icon: any
}
export default function ItemMenu(props: ItemMenuProps) {
  return (
<<<<<<< HEAD
    <li>
      {props.icon}
>>>>>>> 92ce058 (feat: IteMIcons)
=======
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
>>>>>>> 21fa3e5 (feat: style ItemMenu)
    </li>
  )
}
