import React from 'react'
import logo from "../images/logo.png"
const Todo = () => {
  return (
    <>
      <div className='main-div'>
        <div className='child-div'>
          <figure>
            <img src={logo} alt="todo" className='app-logo'/>
          </figure>
        </div>

      </div>
    </>
  )
}

export default Todo