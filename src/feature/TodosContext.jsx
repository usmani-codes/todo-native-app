import { createContext, useContext } from 'react'
import { useState } from 'react'

const TodosContext = createContext()

export const useTodosContext = () => useContext(TodosContext)

function TodosContextProvider({ children }) {
  const [todos, setTodos] = useState([])
  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  )
}

export default TodosContextProvider
