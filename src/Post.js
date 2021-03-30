import React, { useEffect, useState } from 'react';
import './Post.css';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import db from './Firebase';
import { Link } from 'react-router-dom';
import Answers from './Answers';
import { selectPost } from './features/postSlice';
import { postIn, postOut } from './features/postSlice';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';


function Post({key,id,ques,photo,dname,url,ownerid}) {

    




    
     const user = useSelector(selectUser);


     const [openModal, setopenModal] = useState(false);
     const [modalAnswer, setmodalAnswer] = useState("");


     const post = useSelector(selectPost);

     const dispatch = useDispatch();


     const handleDelete = ()=>{


      


      db.collection('questions').doc(id).delete().then(alert("Deleted Successfully"));




     }
 
 
    
   const viewAns =()=>{

   

    dispatch(postIn({

        id:id,
    }))


   }
 
     const open = ()=>{
 
         setopenModal(true);
     }
 
     
       function closeModal(){
         setopenModal(false);
       }
 
 
      

     


     const submitPost = ()=>{

        db.collection('questions').doc(id).collection('answers').add({



            ans:modalAnswer,
            photo:user.photo,
            uname:user.displayName,
        }).then(closeModal());


        alert("Thanks for contributing! Have a nice day");

       

         
        

     }



    

   
    return (
        <div className="post">

<Modal

className="modal"
  isOpen={openModal}
 
  onRequestClose={closeModal}

  contentLabel="Example Modal"
>

  
 
  <div><h1>Add your answer here....</h1></div>
  <form>
    
    <textarea maxLength="50" onChange={(e)=>setmodalAnswer(e.target.value)} />
   
  </form>
  <div className="modal__controls">

  <button className="modal__buttons" onClick={submitPost} >Post Answer</button>
 
  

 
 


  </div>

  
</Modal>


<div className="post__user">
       <img className="post__avatar" alt="User Image" src={photo }/> 
       <h4>{dname}</h4>
       </div>

        <div className="post__ques">

       
             
               <p>{ques} </p>


             
               
              

            

               
              { url&& <img  className="post__img" src={url}/>}

             

               </div>

        {/*question*/}
        {/*answer button which will fire a modal consisting of user name and answer*/}

      

       

       <div className="post__button">

       <button className="ans__button" onClick={open}> Add Answer</button>
      <button className="view__postans"><Link onClick={viewAns} to="/answers"> Answers</Link></button>
    {user.uid==ownerid?<button className="ans__button" onClick={handleDelete}> <DeleteOutlinedIcon padding="3px" fontSize="medium"/> </button>:""}
      
      

      
      
      
       </div>


       </div>
            
       
    )
}

export default Post;
