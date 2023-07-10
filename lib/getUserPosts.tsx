import React from 'react'

async function getUserPosts(userId:string) {
    const res=await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    if(!res.ok){throw Error("Faild to fetch user posts...")}
     return res.json()
}

export default getUserPosts