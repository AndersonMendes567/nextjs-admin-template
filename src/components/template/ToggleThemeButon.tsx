import { Theme } from "@/data/context/AppContext";
import { Moon, Sun } from "../icons";

interface ToggleThemeButtonProps {
  theme: Theme,
  toggleTheme: ()=> void
}

export default function ToggleThemeButton({ theme, toggleTheme } : ToggleThemeButtonProps) {
  return (
    theme === 'dark' ? (
      <button 
        onClick={()=> toggleTheme()} 
        className={`
          hidden sm:flex items-center p-1 rounded-full w-14 lg:w-24
          bg-gradient-to-r from-yellow-300 to-yellow-600
        `}
      >
        <div className={`
          w-6 h-6 rounded-full 
          bg-white text-yellow-600 
          flex justify-center items-center
        `}>{ Sun(4) }</div>
        <div className="text-white hidden h-full lg:flex items-center ml-4">
          <small>Claro</small>
        </div>
      </button>
    ) : (
      <button 
        onClick={()=> toggleTheme()} 
        className={`
          hidden sm:flex justify-end items-center p-1 rounded-full w-14 lg:w-24
          bg-gradient-to-r from-gray-900 to-gray-500
        `}
      >
        <div className="text-white hidden h-full lg:flex items-center mr-3">
          <small>Escuro</small>
        </div>
        <div className={`
          w-6 h-6 rounded-full 
          bg-white text-yellow-600 
          flex justify-center items-center
        `}>{ Moon(4) }</div>
      </button>
    )
  )
}