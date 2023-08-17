import React from 'react'
import Cart from '../UI/Cart'
import classes from "./Userlist.module.css"

const UserList = (props) => {
  return (
   <Cart className={classes.users}>
      <ul>
      {props.newItem.map((item)=>{
        return <li> {item.name} {item.age} </li>
      })}
      </ul>
   </Cart>
  )
}

export default UserList