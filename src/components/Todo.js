import React from 'react'
import logo from "../images/logo.png"
const Todo = () => {
  return (
    <>
      
        <div className='child-div'>
          <figure>
            <img src={logo} alt="todo" className='app-logo'/>
            <h2>Add Your TODO List Here</h2>
          </figure>
          <div className='addItems'>
              <input type="text" placeholder='Add Items....'/>
              <i class="fa fa-plus" title='Add Item'></i>
          </div>
          <div className='showItems'>
              <div className='eachItems'>
                  <h3>Apple</h3>
              </div>
              <i class="fa fa-trash" title='Delete Item'></i>
          </div>
         
              <button className='removeAll'>Remove All</button>
       
        </div>
    </>
  )
}

export default Todo