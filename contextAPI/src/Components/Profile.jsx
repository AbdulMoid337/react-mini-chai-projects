import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'
import '../Components/Profile.css' 

const Profile = () => {
    const { user } = useContext(UserContext)
    if (!user) return <div className="no-user">No User</div> 
    return <div className="welcome">Welcome : {user.username ?  user.username : "Guest"}</div> 
}

export default Profile
