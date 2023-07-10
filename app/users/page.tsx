import  type { Metadata } from "next"
import getAllUsers from "@/lib/getAllUsers"
export const metadata:Metadata={
title:'Users'
}

import React from 'react'
import { Users } from "@/types";
import Link from "next/link";

async function UsersPage() {
    const allUser:Promise<Users[]>=getAllUsers(); //fetch data
    const users=await allUser;// using await 
    const content=(
        <section>
            <Link href="/">back to home</Link>
            <br/>
            {/* for each on const users(users data from fetch) to print data for each elemet */}
            {users.map(user=>{
                return(
                    <>
                    <p key={user.id}>
                       <Link href={`/users/${user.id}`}>{user.name}</Link>
                    </p>
                    <br/>
                    </>
                )
            })}
        </section>
    )

    
  return content // return const above which has user data
}

export default UsersPage