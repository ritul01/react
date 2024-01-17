import React from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data=useLoaderData()

    // const [data,setData]=React.useState({})
    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/hiteshchoudhary`)
    //     .then((res)=>res.json)
    //     .then(data=>{
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-400 text-white p-4 text-3xl'>
        Github
    </div>
  )
}

export default Github

export const githubInfoLoader=async()=>{
    const res=await fetch(`https://api.github.com/users/hiteshchoudhary`)
    return res.json()
}