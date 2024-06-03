import { useAuth } from "@/data/hook/useAuth";
import Link from "next/link";

interface UserAvatarProps {
  className?: string
}

export default function UserAvatar({ className } : UserAvatarProps) {
  const { user } = useAuth()

  return (
    <Link href="/profile">
      <img 
        src={user?.imageUrl || '/default-avatar.png'} 
        alt="Avatar do Usuário" 
        className={`
          w-8 rounded-full
          ${className}
        `}
      />
    </Link>
  )
}