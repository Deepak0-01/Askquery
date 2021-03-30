import React from 'react';
import './Profile.css';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';

function Profile() {

    const user = useSelector(selectUser);
    return (
        <div className="profile">

        {/*image*/}
        {/*Name*/}
        {/*email*/}

        <img className="profile__img" src={user.photo} alt="img"/>
        <h2>{user.displayName}</h2>
        <h3>{user.email}</h3>

       


        
            
        </div>
    )
}

export default Profile
