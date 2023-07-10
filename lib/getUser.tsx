import React from 'react'

async function getUser(userId:string) {
    const res=await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if(!res.ok){throw Error("Faild to fetch userby id...")}
     return res.json()
}

export default getUser