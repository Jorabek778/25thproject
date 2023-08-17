import React, {useState} from 'react'
import Cart from '../UI/Cart'
import Button from '../UI/Button'
import Error from '../ERROR/Error'
import Class from "./AddUser.module.css"

const Adduser = (props) => {
  const [isName , setIsName] = useState('')
  const [isAge , setIsAge] = useState('')
  const [isError , setIsError] = useState(false)
    const ChangeName = (e)=>{
   setIsName(e.target.value)
   console.log(isName);
  }
  const ChangeAge = (e)=>{
   setIsAge(e.target.value)
   console.log(isAge);
  }
  const SubmitForm = (e)=>{
    e.preventDefault()

    if(isName.trim().length !==0 && isAge.trim().length && +isAge>0){
      const newData = {
        name:isName,
        age:isAge
       }
       props.info(newData)
    }
    else{
      setIsError(true)
      return
    }

   

   
   setIsName('')
   setIsAge('')
   e.target.reset()
  }

  const RemoveError = ()=>{
    setIsError(false)
  }
    
  return (
    <Cart className={Class.input}>
     {isError &&  <Error FunErr={RemoveError}/>}
    <form onSubmit={SubmitForm} className={Class.input}>
     <label htmlFor='name'>UserName</label>
     <input onChange={ChangeName} type='text' id='name' />
     <label  htmlFor='age'>Age (Years)</label>
     <input onChange={ChangeAge} type='number' id='age' />
      <Button>
        Add User
        </Button>  
    </form>
    </Cart>

    
  )
  console.log(Class.input);
}

export default Adduser