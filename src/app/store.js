import { createStore , combineReducers } from 'redux';
import userReducer from '../features/userSlice';
import postReducer from '../features/postSlice';
import spinReducer from '../features/spinSlice';


function saveToLocalStorage(state){


  try{

    const serializedState = JSON.stringify(state);
    localStorage.setItem('state',serializedState)

  }catch(e){

    console.log(e);




  }
}

function loadFromLocalStorage(){

try{
  const serializedState = localStorage.getItem('state');
  if(serializedState==null)
  return undefined;

  return JSON.parse(serializedState);

}catch(e){
  console.log(e);

  return undefined;


}


}


const persistedState = loadFromLocalStorage();

const rootReducer =  combineReducers({
 
    user: userReducer,
    postid:postReducer,
    isSpinning:spinReducer,

 

  
});


const store = createStore(
  rootReducer,
  persistedState,
)

store.subscribe(()=>saveToLocalStorage(store.getState()))

export default store;


