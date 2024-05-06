'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

interface MenuItemProps {
  text: string
  icon: any
  url?: string
  className?: string
  onClick?: ()=> void
}

export default function MenuItem({ text, icon, url, className, onClick } : MenuItemProps) {
  const path = usePathname()

  function renderContent() {
    return (
      <div className={`
        flex flex-col items-center px-2 py-3 
        text-gray-700 ${className}`}>
        {icon}
        <small className="text-xs">{text}</small>
      </div>
    )
  }

  return (
    <li 
      className={`
        ${path === url ? 'bg-gray-200' : ''} cursor-pointer
      hover:bg-gray-200 transition-all
      `}
      onClick={onClick}
    >
      { url ? (
        <Link href={url}>
          {renderContent()}
        </Link>
      ) : (
        renderContent()
      )}
    </li>
  )
}