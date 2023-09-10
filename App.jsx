import React from 'react'
import AppNavigation from './src/navigation/AppNavigation'
import RegisterContextProvider from './src/feature/RegisterContext'
import Dashboard from './src/screens/dashboard'

const App = () => {
  return (
    <RegisterContextProvider>
      <AppNavigation />
      {/* {<Dashboard />} */}
    </RegisterContextProvider>
  )
}

export default App
