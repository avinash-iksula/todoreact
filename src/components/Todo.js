import React, { useState } from 'react'
import logo from "../images/logo.png"
const Todo = () => {

  const [inputData, setInputData] = useState('');
  const [items, setItems] = useState([]);
  const addItem = () => {
    if (!inputData) {
        alert('Enter Data first');
    } else {
      setItems([...items, inputData]);
      setInputData('');
    }

  }

  const deleteItem = (id) => {
    const updateditems = items.filter((element, index) => {
      return index != id;
    });
    setItems(updateditems);
  }

  const removeAll = () => {
    setItems([]);
  }

  return (
    <>
      <div className='child-div'>
        <figure>
          <img src={logo} alt="todo" className='app-logo' />
          <h2>Add Your TODO List Here</h2>
        </figure>
        <div className='addItems'>
          <input type="text" placeholder='Add Items....'
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <i className="fa fa-plus" title='Add Item' onClick={addItem}></i>
        </div>
        <div className='showItems'>
          {
            items.map((element, index) => {
              return (
                <>
                  <div className='eachItems' key={index}>
                    <h3>{element}</h3>
                  </div>
                  <i className="fa fa-trash" title='Delete Item' onClick={() => deleteItem(index)}></i>
                </>
              )
            })
          }
        </div>
        <button className='removeAll' onClick={removeAll}>Remove All</button>
      </div>
    </>
  )
}

export default Todo