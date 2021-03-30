import React, { useState,useEffect } from 'react';
import './Answers.css';
import { selectPost } from './features/postSlice';
import { useDispatch, useSelector } from 'react-redux';
import db from './Firebase';
import Post from './Post';


function Answers() {

    const postid = useSelector(selectPost);

    const pid = postid.id;

   

     const [postAnswers, setpostAnswers] = useState([]);
     





    


     useEffect(()=>{

        





        db.collection('questions').doc(pid).collection('answers').onSnapshot(snapshot=>
            setpostAnswers(snapshot.docs.map((doc)=>({


                id:doc.id,
                data:doc.data(),

            }))));
          







     },[])


    return (
        <div className="answers">

        {/*Question*/}

        {/*answers list*/}


      


        
        {postAnswers.map(({id,data:{uname,photo,ans}})=>





     

        <div className="answer">

        <div className="answer__profile">

        <img src ={photo}></img>

      

       
       <h5>{uname}</h5>

      



        </div>

      
        <div className="answer__content">
       <h4>{ans}</h4>

       </div>

       </div>

        
        

)}


      


            
        </div>
    )
}

export default Answers;
