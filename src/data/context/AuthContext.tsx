import { createContext, useEffect, useState } from 'react'
import route from 'next/router'
import User from '@/model/User'
import firebase from '../../firebase/config'
import Cookies from 'js-cookie'

// https://www.npmjs.com/package/js-cookie

interface AuthContextProps {
  user?: User | undefined | null
  isLoading?: boolean
  register?: (email: string, password: string) => Promise<void>
  login?: (email: string, password: string) => Promise<void>
  loginGoogle?: () => Promise<void>
  logout?: () => Promise<void>
}

type firebaUser = firebase.User | null;

interface Props {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextProps>({})

async function normalizedUser(userFirebase: firebase.User): Promise<User> {
  const token = await userFirebase.getIdToken()
  return {
    uid: userFirebase?.uid,
    name: userFirebase.displayName!,
    email: userFirebase.email!,
    token,
    provider: userFirebase.providerData[0]?.providerId!,
    imageUrl: userFirebase.photoURL!

  }
}

function manageCookies(isLogged: boolean) {
  if (isLogged) {
    Cookies.set('admin-template-cod3r-auth', `${isLogged}`, {
      expires: 7
    });
  } else {
    Cookies.remove('admin-template-cod3r-auth')
  }
}

export function AuthProvider(props: Props) {

  const [user, setUser] = useState<User | undefined | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  async function configureSession(userFirebase: firebaUser) {
    if (userFirebase?.email) {
      const user = await normalizedUser(userFirebase)
      setUser(user)
      manageCookies(true)
      setIsLoading(false)

      return user.email
    } else {
      setUser(null)
      manageCookies(false)
      setIsLoading(false)

      return false
    }
  }

  async function register(email: string, password: string) {

    try {
      setIsLoading(true)
      const resp = await firebase.auth().createUserWithEmailAndPassword(email, password)

      if (resp.user !== null) {
        await configureSession(resp.user)
        route.push('/')
      }
    } finally {
      setIsLoading(false)
    }

  }

  async function login(email: string, password: string) {

    try {
      setIsLoading(true)
      const resp = await firebase.auth().signInWithEmailAndPassword(email, password)


      await configureSession(resp.user)
      route.push('/')

    } finally {
      setIsLoading(false)
    }

  }

  async function loginGoogle() {

    try {
      setIsLoading(true)
      const resp = await firebase.auth().signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      )

      if (resp.user !== null) {
        await configureSession(resp.user)
        route.push('/')
      }
    } finally {
      setIsLoading(false)
    }

  }

  async function logout() {
    try {
      setIsLoading(true)
      await firebase.auth().signOut()
      await await configureSession(null)
      route.push('/authentication')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (Cookies.get('admin-template-cod3r-auth')) {
      // Funcão que diz quando houve mudança no token do usuário, chamando a funcão configureService 
      const cancel = firebase.auth().onIdTokenChanged(configureSession)
      return () => cancel()
    } else {
      setIsLoading(false)
    }
  }, [])


  return (
    <AuthContext.Provider value={{
      user,
      isLoading,
      register,
      login,
      loginGoogle,
      logout,
    }}>
      {props.children}
    </AuthContext.Provider>
  )


}

export default AuthContext