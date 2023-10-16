import { createContext, useState } from 'react'
import route from 'next/router'
import User from '@/model/User'
import firebase from 'firebase'



interface AuthContextProps {
  user?: User
  loginGoogle?: () => Promise<void>
}

interface Props {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextProps>({})

// async function normalizedUser(userFirebase: firebase.User): Promise<User> {
//   const token = await userFirebase.getIdToken()
//  return {
//     uid: userFirebase.uid,
//     name: userFirebase.displayName,
//     email: userFirebase.email,
//     token,
//     provider: userFirebase.providerData[0]?.providerId,
//     imageUrl: userFirebase.photoURL

//   }
// }

export function AuthProvider(props: Props) {

  const [user, setUser] = useState<User>()

  async function loginGoogle() {
    console.log('Login Google...')
    route.push('/')
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