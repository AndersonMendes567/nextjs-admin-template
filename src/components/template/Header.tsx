import { useAppData } from "@/data/hook/useAppData"
import Title from "./Title"
import ToggleThemeButton from "./ToggleThemeButon"
import UserAvatar from "./UserAvatar"

interface HeaderProps {
  title: string
  subtitle: string
}

export default function Header({ title, subtitle } : HeaderProps) {
  const { theme, toggleTheme } = useAppData()

  return (
    <div className="flex justify-between items-start">
      <Title title={title} subtitle={subtitle} />
      <div className="flex items-center transition-all">
        <ToggleThemeButton theme={theme} toggleTheme={toggleTheme} />
        <UserAvatar className="ml-3" />
      </div>
    </div>
  )
}