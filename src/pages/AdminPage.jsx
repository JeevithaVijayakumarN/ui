import React from 'react'
import AdminCategory from '../components/categorycomponent/AdminCategory';
import AdminProducts from '../components/productcomponent/AdminProducts';
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