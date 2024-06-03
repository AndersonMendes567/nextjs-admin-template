'use client'

import { createContext, useEffect, useState } from "react";

export type Theme = 'dark' | ''

type AppContextType = {
  theme: Theme,
  toggleTheme: ()=> void
}

interface AppProviderProps {
  children: any
}

export const AppContext = createContext({} as AppContextType)

export default function AppProvider({ children } : AppProviderProps) {
  
  const [theme, setTheme] = useState<Theme>('')

  const toggleTheme = (newTheme?: Theme)=> {
    if(newTheme === undefined) newTheme = theme === 'dark' ? '' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  } 

  useEffect(()=> {
    const storageTheme = localStorage.getItem('theme') || ''
    toggleTheme(storageTheme as Theme)
  }, [])

  return (
    <AppContext.Provider value={{ theme, toggleTheme }}>
      { children }
    </AppContext.Provider>
  )
}
