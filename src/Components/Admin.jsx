
import { useState } from 'react';
import './Admin.css'

import AdminUser from './AdminUser';

import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';
  import { NavLink } from 'react-router-dom';
import AdminProducts from './AdminProducts';
import AdminAddProdcts from './AdminAddProdcts';

export const Admin = () => {

  

    const [user,setUser]= useState()

  return (

   <div className='main_container'   >  


       <div style={{ position:'sticky',top:'0px', display: 'flex', height: '100vh', overflow: 'scroll initial', fontFamily:" 'Quicksand', sans-serif"}}>
      <CDBSidebar   textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Admin
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink  onClick={()=>setUser(<AdminUser/>)} activeClassName="activeClicked" >
              <CDBSidebarMenuItem  icon="columns">User</CDBSidebarMenuItem>
            </NavLink>
            <NavLink  onClick={()=>setUser(<AdminProducts/>)} activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Products</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact onClick={()=>setUser(<AdminAddProdcts/>)} activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Add Products</CDBSidebarMenuItem>
            </NavLink>
           {/*
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
            </NavLink> */}
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Admin Adarsh
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
   
   <div className='Display_container' >

   {user}


   </div>




</div>
  )
}
