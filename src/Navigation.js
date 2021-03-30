import React, { useState } from 'react';
import './Navigation.css';
import Modal from 'react-modal';
import db, { auth, storage } from './Firebase';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { Link } from 'react-router-dom';
import { selectSpin, spinOn ,spinOff} from './features/spinSlice';

import MenuIcon from '@material-ui/icons/Menu';
import Hamburg from './Hamburg';







function Navigation() {

    const [openModal, setopenModal] = useState(false);
    const [modalText, setmodalText] = useState("");
     const [image, setimage] = useState(null);
      const [url, seturl] = useState("");

      const [nav, setnav] = useState(false);
       const [icon, seticon] = useState(window.innerWidth);

       const [progress, setProgress] = useState(0);

      const isSpinning = useSelector(selectSpin);
   


    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const handleFileUpload=(e)=>{


      setimage(e.target.files[0]);
    }




    const handleImageUpload= async()=> {


      dispatch(spinOn({


        isSpinning:true,
      }));

      closeModal();


      

     

     
      


     
      if(image)

      {

      

  const storageRef = storage.ref();
  const fileRef = storageRef.child(image.name);
  await fileRef.put(image);

     

      
  
  db.collection('questions').add({

    ques:modalText,
    photo:user.photo,
    dname:user.displayName,
    ownerid:user.uid,
    url: await fileRef.getDownloadURL(),
  
   


}).then(dispatch(spinOff({

  isSpinning:null,
}))


);
      }

      else{

        db.collection('questions').add({

          ques:modalText,
          photo:user.photo,
          dname:user.displayName,
          ownerid:user.uid,



    }).then(dispatch(spinOff({

        isSpinning:null,
      }))
      
      
      );

    }


setProgress(0);
setimage(null);

     
      

    }


 

    
    const open = ()=>{
      setnav(false);

        setopenModal(true);
    }

    
      function closeModal(){
        setopenModal(false);
       
      }

      const handleMenu =()=>{


       setnav(!nav);






      }


     
    
    return (

        <div className="navigation__bar">

       


      

       <Modal 

        className="modal"
          isOpen={openModal}
         
          onRequestClose={closeModal}
        
          contentLabel="Example Modal"
        >
 
          
         
          <div><h1>Ask your question .....</h1></div>
          <form>
            
            <textarea onChange={(e)=>setmodalText(e.target.value)} />
           
          </form>
          <div className="modal__controls">

         

          <button className="modal__buttons" onClick={closeModal}>close</button>

          <div className="modal__progress">

          <input type="file"   onChange={handleFileUpload}/>
          

          </div>

         
          <button className="modal__buttons" onClick={handleImageUpload}>Post Question</button>
         
         
         


          </div>

          
        </Modal> 


       

        <nav>

          <div className="nav__logo">

        
             <img className="logo" src="askquery.png"/>
        <MenuIcon fontSize="large"  onClick={handleMenu} className = "menu"/>
          </div>

          <div className={nav?"nav_links__div":"nav_links__hide"}>

          <ul className="nav__links">

         <Link to="/"> <li>Home</li></Link>
         <Link to="/myprofile"><li>Profile</li></Link>
         <li onClick={open}>Add question</li>
         <button  onClick={()=>auth.signOut()}>signOut</button>
            
        
         <div className="user__nav">
           <img src = {user.photo}/>
           <h5>{user.displayName}</h5>

           

         
         </div>

        

        
        

          </ul>

         

          </div>


          



        </nav>

      

        </div>
            
        
    )
}

export default Navigation
