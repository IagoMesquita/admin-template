import useAuth from "@/data/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";


interface AvatarUserProps {
  className?: string;
}

export default function AvatarUser(props: AvatarUserProps) {
  const { user } = useAuth()

  return (
    <Link href="/profile">
      <Image
        src={user?.imageUrl ?? "/images/avatar.svg"}
        alt="Avatar do Usuário"
        width={40}
        height={40}
        className={`
          h-10 w-10 rounded-full cursor-pointer bg-black
          ${props.className}
        `}
      />
    </Link>
  
  )
} 


