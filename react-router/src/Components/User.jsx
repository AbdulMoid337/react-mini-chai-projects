import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams() // we can take the params form the link to the component
  return (
    <div>
      User : {userid}
    </div>
  )
}

export default User
 