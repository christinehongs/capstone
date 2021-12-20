import reducer from './reducers';
import thunkMiddleware from 'redux-thunk'
import {createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'


const saveToLocalStorage = (reduxGlobalState) => {
    //serialization = converting js object to a string
    try{
      const serializeState = JSON.stringify(reduxGlobalState)
      localStorage.setItem('state', serializeState)
    }
    catch(e){
      console.log(e)
    }
  }
  
const loadFromLocalStorage = () => {
  //deserialization = converting string to an object
  const serializeState = localStorage.getItem('state');

  if(serializeState == null){
    return undefined;
  }
  else{
    return JSON.parse(serializeState)
  }
  }
  
  const persistedState = loadFromLocalStorage()

  const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
  
  const store = createStore(reducer, persistedState, composedEnhancer)

  store.subscribe(()=> {
    //happens everytime there is a change to global state
    saveToLocalStorage(store.getState())
  })

  export default store