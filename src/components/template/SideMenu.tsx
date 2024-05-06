'use client'

import { Adjustments, Bell, Home, Logout } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function SideMenu() {

  return (
    <aside className={`
      flex flex-col
    `}>
      <div className={`
        w-full h-20 bg-gradient-to-r from-indigo-500 to-purple-800
        flex justify-center items-center
      `}>
        <Logo />
      </div>
      <ul className="flex-1">
        <MenuItem url="/" text="Home" icon={Home} />
        <MenuItem url="/settings" text="Ajustes" icon={Adjustments} />
        <MenuItem url="/notifications" text="Notificações" icon={Bell} />
      </ul>
      <ul>
        <MenuItem 
          text="Sair" icon={Logout} 
          onClick={()=> console.log('logout')}
          className={`
          text-red-600
            hover:bg-red-400 hover:text-white
          `}
        />
      </ul>
    </aside>
  )
}