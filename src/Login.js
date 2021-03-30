import React, { useEffect } from 'react';
import db, {auth, provider } from './Firebase';
import { login,logout, selectUser } from './features/userSlice';

import './Login.css';
import { useDispatch, useSelector } from 'react-redux';



function Login() {

    const user = useSelector(selectUser);
  
   const dispatch = useDispatch();

   useEffect(() => {

    auth.onAuthStateChanged((authUser)=>{

      if(authUser)
      {
        dispatch(login({

          uid:authUser.uid,
          photo:authUser.photoURL,
          email:authUser.email,
          displayName:authUser.displayName,

        }));
      }

      else{
        dispatch(logout());
      }
    });
    
   }, [])
   

   

const handleLogin = ()=>{

    auth.signInWithPopup(provider)
    .catch(error=>alert(error.message));
}





    return (
        <div className="login">

       

        {/*logo*/}
        {/*tagline*/}

        {/*login buttons*/}

        <div className="login__page">

      <img src="askquery.png" alt="text"/>
        <h3>Get Your Queries Answered here</h3>

        <button onClick= {handleLogin} className="login__button">Log in with Google</button>
       


        </div>




           
        </div>
        


            
       
    )
}

export default Login;
