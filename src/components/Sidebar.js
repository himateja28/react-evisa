import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

import React from 'react'
import Home from './Home';

function Siderbar() {
  return (
    <div style={{display:"flex"}}>
    
        <Sidebar style={{backgroundColor:"f0f0f0",display:"flex", height:"80vh"}}>
          <br /><br /><br />
            <Link to='/home' style={{color:"red",fontSize:"20px",padding:"30px"}}>Welcome,Admin</Link><br /><br />
  <Menu style={{display:"flex",flexDirection:"column", gap:"40px"}}>
    <MenuItem component={<Link to="/home" />}> Home</MenuItem>
    <MenuItem component={<Link to="/check" />}> Check Status</MenuItem>
    <MenuItem component={<Link to="/apply" />}> Apply</MenuItem>
    <MenuItem component={<Link to="/addusers" />}> Add users</MenuItem>
    <MenuItem component={<Link to="/show" />}> Applications</MenuItem>
    <MenuItem component={<Link to="/accepted" />}> Accepted Visa's</MenuItem>
  </Menu>
</Sidebar>
<Home/>
    </div>
  )
}

export default Siderbar

