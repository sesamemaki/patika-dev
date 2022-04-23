import React from 'react'


function List(
  { todos,
    addTodos,
    filteredTodos,
    updateCompleteTodos,
    removeTodos,
    activeTodos,
    setActiveTodos
  }
) {


  const clearItems = () => {
    addTodos([]);
  }



  return (
    <div>

      <ul className='list' >
        {
          filteredTodos.map((todos, i) => (
            <li key={i}
              className={todos.complete ? 'completed' : undefined}>
              <div className='view'>
                <input
                  className="toggle"
                  type="checkbox"
                  checked={todos.complete}
                  onChange={() => updateCompleteTodos(todos.duty)}
                />
                <label className='borderbottom'>{todos.duty}</label>
                <button className='destroy' onClick={() => removeTodos(todos.duty)}></button>
              </div>
            </li>
          ))
        }


      </ul>

      <div className='footer'>
        <span><strong>{todos.length}</strong>left </span>

        <ul className='filters'>
          <li>
            <a onClick={(e) => { setActiveTodos("All") }}
              className={activeTodos === "All" ? 'selected' : undefined}>All </a>
          </li>

          <li>
            <a onClick={(e) => { setActiveTodos("Active") }}
              className={activeTodos === "Active" ? 'selected' : undefined}>Active </a>
          </li>

          <li>
            <a onClick={(e) => { setActiveTodos("Completed") }}
              className={activeTodos === "Completed" ? 'selected' : undefined}>Completed </a>
          </li>

        </ul>
        <button className='clear-completed' onClick={clearItems}>Clear Completed</button>


      </div>


    </div>



  )
}

export default List;