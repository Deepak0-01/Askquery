import React, { useEffect ,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import db, { auth } from './Firebase';
import Navigation from './Navigation';
import Post from './Post';
import Loader from 'react-loader-spinner';
import { selectSpin } from './features/spinSlice';
import AOS from 'aos';
import 'aos/dist/aos.css'; 



function Homepage() {


    const [posts, setPosts] = useState([]);
    const user =useSelector(selectUser);
    const dispatch = useDispatch();
    const isSpinning = useSelector(selectSpin);

   

    useEffect(()=>{

        AOS.init({duration:2000});


        
      

        db.collection('questions').onSnapshot(snapshot=>
            
            setPosts(snapshot.docs.map((doc)=>({


                id:doc.id,
                data:doc.data(),
            }))))





     },[]);


    


    
   

        console.log(posts);
   
   
    return (

       
        <div className="homepage">
          <Navigation/>

         

         

     

        { isSpinning?
            <div style={{textAlign:"center", marginTop:"25vh", marginBottom:"20vh",padding:"5px"}} top="50px" className="loader">

<Loader




type="Circles" color="#BB4AC9" height={280} width={280}
/>
</div>
: posts.map(({id,data:{ques,photo,dname,url,ownerid}})=>

            <Post data-aos="flip-left" key={id} id={id} ques={ques} photo={photo} dname={dname} url={url} ownerid={ownerid}/>
        )}
        
            
        </div>

        
    )
}

export default Homepage;
