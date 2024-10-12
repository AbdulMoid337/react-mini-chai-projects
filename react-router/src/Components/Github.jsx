import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


const Github = () => {
  const data = useLoaderData()
  // const [data, setdata] = useState([])
  // useEffect(() => {
  //   fetch("https://api.github.com/users/AbdulMoid337")
  //     .then(res => res.json())
  //     .then(data => {
  //       setdata(data)
  //     })
  // }, [])
  return (
    <div>
    <img src={data.avatar_url} alt="git hub image" width={300}  />
    <div className='text-center m-3 bg-gray-700 text-white p-4 text-3xl'>Github Usename :  {data.login}</div>
    <div className='text-center m-3 bg-gray-700 text-white p-4 text-3xl'>Github Followers :  {data.followers}</div>
    </div>
  )
}

export default Github

export const gitLoader = async () => {
 const responce = await fetch("https://api.github.com/users/AbdulMoid337")
 return responce.json()
}