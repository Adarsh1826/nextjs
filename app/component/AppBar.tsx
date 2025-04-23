"use client"
import {signIn,useSession} from 'next-auth/react'
export const AppBar = () => {
    const session = useSession()
  return (
    <div>
       <button
        onClick={()=>{
            signIn()
        }}
       >Signin</button>
       {JSON.stringify(session)}
    </div>
  )
}
