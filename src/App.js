import React, { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';

import './App.css';
import { login,logout, selectUser } from './features/userSlice';
import { auth } from './Firebase';
import Homepage from './Homepage';
import Login from './Login';
import Navigation from './Navigation';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";







import {BrowserRouter as Router, Route,Link, Switch}  from "react-router-dom";
import Answers from './Answers';
import Profile from './Profile';

function App() {

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


  return (
    <div className="App">

    <Router>

  

    <Switch>

    <Route exact path ="/">
    

   

  {user?<Homepage/>:<Login/>}

  </Route>
  <Route exact path ="/answers">

  <Navigation/>
    

   

   <Answers/>
  
    </Route>


  <Route path="/myprofile">

  <Navigation/>

  <Profile/>
 

 

 </Route>


  </Switch>


  </Router>
         </div>
  );
}

export default App;
