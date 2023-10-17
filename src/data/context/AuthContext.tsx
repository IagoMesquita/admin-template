import { createContext, useState } from 'react'
import route from 'next/router'
import User from '@/model/User'
import firebase from '../../firebase/config'
import Cookies from 'js-cookie'

// https://www.npmjs.com/package/js-cookie

interface AuthContextProps {
  user?: User
  loginGoogle?: () => Promise<void>
}

interface Props {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextProps>({})

async function normalizedUser(userFirebase: firebase.User): Promise<User> {
  const token = await userFirebase.getIdToken()
  return {
    uid: userFirebase?.uid,
    name: userFirebase.displayName ?? '',
    email: userFirebase!.email ?? '',
    token,
    provider: userFirebase.providerData[0]?.providerId ?? '',
    imageUrl: userFirebase.photoURL ?? ''

  }
}

function manageCookies(isLogged: boolean) {
  if(isLogged) {
    Cookies.set('admin-template-cod3r-auth', `${isLogged}`, {
      expires: 7
    });
  } else {
    Cookies.remove('admin-template-cod3r-auth')
  }
}



export function AuthProvider(props: Props) {

  const [user, setUser] = useState<User>()

  async function loginGoogle() {

    try {
      const resp = await firebase.auth().signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      )

      // se user vier nulo por algum motivo, "email" só será chamado se "user?" estiver diferente de nulo válido
      if (resp.user?.email) {
        const user = await normalizedUser(resp.user)
        setUser(user)

        route.push('/')
      }
    } catch (error) {
      console.error("ERROR AQUIII", error)
    }


  }


  return (
    <AuthContext.Provider value={{
      user,
      loginGoogle
    }}>
      {props.children}
    </AuthContext.Provider>
  )


}

export default AuthContext