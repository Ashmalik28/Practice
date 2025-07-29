"use client"
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();
  return <div>
    {JSON.stringify(session)}
  </div>
  
}
