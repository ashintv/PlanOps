"use client"
import { Session } from "inspector/promises"
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react"

export default function Home() {
	
	return (
    <SessionProvider>
      <HomePage />
      </SessionProvider>
		
	)
}


export  function HomePage() {
  const { data: session } = useSession()
	return (
		
    <div>
      <p>{session?.user?.name ?? <button onClick={() => signIn()}>Sign in</button>}</p>
      <button onClick={() => signOut()}>Sign out</button>
		</div>
	)
}