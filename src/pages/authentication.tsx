import AuthInput from "@/components/auth/AuthInput";
// import Image from "next/image";
import { useState } from "react";

export default function Authentication() {
  const [mode, setMode] = useState<'login' | 'register'>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function onSubmit() {
    if (mode === 'login') {
      console.log('Login')
    } else {
      console.log('Cadastrar')

    }
  }

  return (
    <div className="h-screen flex  items-center  justify-center ">
      <div className="hidden md:block md:w-1/2">
        <img  
          src="https://source.unsplash.com/random"
          alt="Imagens aleatótias da tela de autenticação"
          className=" h-screen w-full object-cover"
        />
      </div>
      <div className=" m-10 w-full md:w-1/2">
        <h1 className={`text-3xl font-bold mb-5`}>
          {mode === 'login' ? 'Entre com sua senha' : 'Cadastre-se na Plataforma'}
        </h1>
        <AuthInput
          type="text"
          label="Email"
          value={email}
          changeValue={setEmail}
          required
        />
        <AuthInput
          type="password"
          label="Senha"
          value={password}
          changeValue={setPassword}
          required
        />

        <button onClick={onSubmit}
          className={`
          w-full bg-indigo-500 hover:bg-indigo-400
          text-white rounded-lg px-4 py-3 mt-6
        `}
        >
          {mode === 'login' ? 'Entrar' : 'Cadastrar'}
        </button>

        <hr className="my-6 border-gray-300 w-full" />

        <button onClick={onSubmit}
          className={`
          w-full bg-red-500 hover:bg-red-400
          text-white rounded-lg px-4 py-3 
        `}
        >
          Entrar com Google
        </button>

        {mode === 'login' ? (
          <p className="mt-8">
            Novo por aqui?
            <a onClick={() => setMode('register')}
              className={`
                text-blue-500 hover:text-blue-700 font-semibold
                cursor-pointer
                pl-2
              `}
            >
              Criar uma conta Gratuitamente.
            </a>
          </p>
        ) :(
          <p className="mt-8">
          Já faz parte da nossa comunidade?
          <a onClick={() => setMode('login')}
            className={`
              text-blue-500 hover:text-blue-700 font-semibold
              cursor-pointer
              pl-2
            `}
          >
            Entre com suas Credenciais.
          </a>
        </p>
        )}

      </div>
    </div>

  )
}
