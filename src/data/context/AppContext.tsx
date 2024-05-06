'use client'

import { createContext, useState } from "react";

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
  const [theme, setTheme] = useState<Theme>('dark')

  const toggleTheme = ()=> setTheme(theme === 'dark' ? '' : 'dark')

  return (
    <AppContext.Provider value={{ theme, toggleTheme }}>
      { children }
    </AppContext.Provider>
  )
}
