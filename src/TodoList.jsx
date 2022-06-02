import React from 'react'



const TodoList = (props) => {
   
  return (
    <div className='todo_style'>
   
 
  
   <i class="fa-thin fa-circle-xmark" aria-hidden="true"  onClick={()=>{
       props.onSelect(props.id);
   }}></i>
 

    <li>{props.text}</li>
      
    </div>
  )
}

export default TodoList
