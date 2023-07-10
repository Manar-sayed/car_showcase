import React from 'react'

async function getAllUsers() {
    const res=await fetch('https://jsonplaceholder.typicode.com/users');
    if(!res.ok){throw Error("Faild to fetch Api data...")}
     return res.json()
}

export default getAllUsers