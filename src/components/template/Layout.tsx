'use client'

import { useAppData } from "@/data/hook/useAppData"
import { ReactNode } from "react"
import Content from "./Content"
import Header from "./Header"
import SideMenu from "./SideMenu"

interface LayoultProps {
  title: string
  subtitle: string
  children: ReactNode
}

export default function Layout({ title, subtitle, children } : LayoultProps) {
  const { theme } = useAppData()

  return (
    <div className={`${theme} h-screen w-screen flex`}>
      <SideMenu />
      <div className={`
        w-full p-7 flex flex-col bg-gray-300 dark:bg-gray-900
      `}>
        <Header title={title} subtitle={subtitle} />
        <Content>
          { children }
        </Content>
      </div>
    </div>
  )
}