import { createContext, useContext } from 'react'
import { useState } from 'react'

const RegisterContext = createContext()

export const useRegisterContext = () => useContext(RegisterContext)

function RegisterContextProvider({ children }) {
  const [users, setUsers] = useState([
    {
      id: 4,
      username: 'usmani',
      email: 'abc@abc.com',
      password: 'newPassword',
    },
  ])
  const [todos, setTodos] = useState([
    { id: 1, task: 'Learn ui/ux when it is 12am' },
    { id: 2, task: 'Learn basics of coding' },
    { id: 3, task: 'Learn Programming' },
    { id: 4, task: 'Learn javascript' },
    { id: 5, task: 'Practice Figma' },
  ])

  const state = { users, setUsers, todos, setTodos }
  return (
    <RegisterContext.Provider value={{ ...state }}>
      {children}
    </RegisterContext.Provider>
  )
}

export default RegisterContextProvider
