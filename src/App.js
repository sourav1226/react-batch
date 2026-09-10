import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './components/Index'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Batches from './pages/Batches'
import BatchCreate from './pages/BatchCreate'
import BatchShow from './pages/BatchShow'
import Attendance from './pages/Attendance'
import Schedules from './pages/Schedules'
import Notices from './pages/Notices'
import StudyMaterials from './pages/StudyMaterials'
import Notifications from './pages/Notifications'
import MigrationHub from './pages/MigrationHub'
import AdminTrainers from './pages/AdminTrainers'
import AdminStudents from './pages/AdminStudents'
import AdminLogs from './pages/AdminLogs'
import AdminStatus from './pages/AdminStatus'
import AllLinks from './pages/AllLinks'

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/batches" element={<Batches />} />
        <Route path="/batches/new" element={<BatchCreate />} />
        <Route path="/batches/:id" element={<BatchShow />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/schedules" element={<Schedules />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/study-materials" element={<StudyMaterials />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/migration-hub" element={<MigrationHub />} />
        <Route path="/admin/trainers" element={<AdminTrainers />} />
        <Route path="/admin/students" element={<AdminStudents />} />
        <Route path="/admin/logs" element={<AdminLogs />} />
        <Route path="/admin/status" element={<AdminStatus />} />
        <Route path="/all-links" element={<AllLinks />} />
        <Route path="*" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
