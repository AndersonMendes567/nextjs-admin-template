'use client'

import { useEffect } from "react"

export default function SetTheme() {
  useEffect(()=> {
    function checkTheme(isLightMode: boolean) {
      // Verifica se o tema preferido do usuário é claro
      const { body } = document
      const hasDark = body.classList.contains('dark')

      if (isLightMode) {
          console.log("O tema preferido do usuário é claro.");
          if(hasDark) {
              body.classList.remove('dark')
          }
      } else {
          console.log("O tema preferido do usuário é escuro.");
          if(!hasDark) {
              body.classList.add('dark')
          }
      }
    }

    // Adiciona um ouvinte de eventos para verificar mudanças no tema do sistema
    const themeQuery = window.matchMedia('(prefers-color-scheme: light)');
    themeQuery.addEventListener('change', (ev)=>checkTheme(ev.matches));

    // Verifica o tema do sistema pela primeira vez
    checkTheme(themeQuery.matches);
    
  }, [])

  return null
}