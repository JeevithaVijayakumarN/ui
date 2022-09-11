import React from 'react'
import AdminCategory from '../components/AdminCategory'
import AdminProducts from '../components/AdminProducts'
import AppBar from '../components/AppBar'
import AdminUser from '../components/AdminUser';


const AdminPage = () => {
  return (
    <div>
        <AppBar/>
        <AdminProducts/>
        <AdminCategory/>
        <AdminUser/>
    </div>
  )
}

export default AdminPage