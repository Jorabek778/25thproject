import React, { useState } from 'react'
import Adduser from './Companents/Adduser';
import UserList from './Companents/UserList';
import './App.css';



function App() {

  const [state , setInform] = useState([])
  const ADDdata = (elem)=>{
    console.log(elem);
  setInform((item)=>[
    ...item,
    elem
  ])
  }

  return (
    <>
      <section id="userInput">
    <Adduser info={ADDdata}/>
    </section>
    <section id='userList'>
     <UserList newItem={state} />
    </section>
    </>
  );
}

export default App;
