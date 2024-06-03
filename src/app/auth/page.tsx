'use client'

import AuthInput from "@/components/auth/AuthInput";
import { Exclamation } from "@/components/icons";
import { useAuth } from "@/data/hook/useAuth";
import { SyntheticEvent, useState } from "react";

export default function Auth() {
  const [mode, setMode] = useState<'login' | 'register'>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { register, login, loginGoogle } = useAuth()

  function showError(msg: string, timeInSeconds=5) {
    setError(msg)
    setTimeout(()=> setError(''), timeInSeconds * 1000)
  }

  async function handleSubmit(ev: SyntheticEvent) {
    ev.preventDefault()

    try {
      if(mode === 'login') {
        await login(email, password)
      } else {
        await register(email, password)
      }
    } catch (error: any) {
      showError(error?.message || 'Um erro inesperado ocorreu!')
    }
  }

  return (
    <div className="w-full md:w-1/2 p-6">
      <form 
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto"
      >
        <h1 className="font-black text-3xl text-gray-900 mb-6">
          { mode === 'login' ? 'Entre com a Sua Conta' : 'Registre-se na Plataforma' }
        </h1>

        <div 
          className={`
            ${error ? 'flex' : 'hidden'} gap-3 items-center 
            bg-red-400 text-white border-2 rounded-md
            px-5 py-2 my-3
            animate-fade-left animate-once animate-duration-200 animate-ease-in
          `}
        >
            { Exclamation() }
            <span>{error}</span>
        </div>

        <AuthInput 
          type="email"
          label="Email"
          value={email}
          onValueChange={setEmail}
          isRequired
        />

        <AuthInput 
          type="password"
          label="Senha"
          value={password}
          onValueChange={setPassword}
          isRequired
        />

        <button
          className={`
            w-full text-center px-4 py-3 rounded-lg mt-6
            bg-indigo-500 hover:bg-indigo-400 text-white transition-colors
          `}
        >
          { mode === 'login' ? 'Entrar' : 'Cadastrar' }
        </button>
        <hr className="border-gray-300 my-6" />
        <button
          type="button"
          className={`
            w-full text-center px-4 py-3 rounded-lg 
            bg-red-500 hover:bg-red-400 text-white transition-colors
          `}
          onClick={loginGoogle}
        >
          Entrar com o Google
        </button>

          { mode === 'login' ?
            <p className="mt-6">
              É novo por aqui?{' '}
              <button
                type="button"
                onClick={()=> setMode('register')}
              >
                <a 
                  className="text-blue-500 hover:text-blue-700"
                >Cria uma Conta Gratuíta</a>
              </button> 
            </p>
            : 
            <p className="mt-6">
              Já tem uma conta?{' '}
              <button
                type="button"
                onClick={()=> setMode('login')}
              >
                <a 
                  className="text-blue-500 hover:text-blue-700"
                >Entre com Suas Credencias</a>
              </button> 
            </p>
          }
      </form>
    </div>
  )
}