import { useAppData } from "@/data/hook/useAppData"
import Title from "./Title"
import ToggleThemeButton from "./ToggleThemeButon"

interface HeaderProps {
  title: string
  subtitle: string
}

export default function Header({ title, subtitle } : HeaderProps) {
  const { theme, toggleTheme } = useAppData()

  return (
    <div className="flex justify-between items-start">
      <Title title={title} subtitle={subtitle} />
      <div className="flex transition-all">
        <ToggleThemeButton theme={theme} toggleTheme={toggleTheme} />
      </div>
    </div>
  )
}