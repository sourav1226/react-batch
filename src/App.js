import React from 'react'
import Login from './pages/Login'
import Batches from './pages/Batches'
import StudyMaterials from './pages/StudyMaterials'
import Notifications from './pages/Notifications'
import AdminStatus from './pages/AdminStatus'

function App() {
  return (
    <div>
      <Login/>
      <Batches/>
      <StudyMaterials/>
      <Notifications/>
      <AdminStatus/>
    </div>
  )
}

export default App