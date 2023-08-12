import React from 'react'
import AppNavigation from './src/navigation/AppNavigation'
import RegisterContextProvider from './src/feature/RegisterContext'

const App = () => {
  return (
    <RegisterContextProvider>
      <AppNavigation />
    </RegisterContextProvider>
  )
}

export default App
