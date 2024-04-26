import React from 'react'
import axios from 'axios'
import Navbar2 from './Navbar2'
import img from '../assests/img6.png'
import Footer from './Footer'
function Add() {
function handleSubmit()
{
    axios.post('https://evisa-server.onrender.com/newuser',{
        name:document.getElementById('un').value,
        email:document.getElementById('email1').value,
        password:document.getElementById('pwd').value,
        role:document.getElementById('role').value
      }).then((res)=>{
        console.log('Added Successfully')
      })
}
  return (
    <>
    <Navbar2/>
    <div style={{display:"flex" , justifyContent:"space-evenly",gap:"90px",alignItems:"center",margin:"20px",backgroundColor:"rgba(235, 247, 250, 1)",padding:"20px",border:"2px solid black"}}>
    <img src={img} alt="" style={{width:"400px",height:"400px"}}/>
    <div className='add-user'>
      <h1 >Add user</h1>
      Accountant name : <input type="text"  id='un'/>
      Email : <input type="email"  id='email1'/>
      Password : <input type="password"  id='pwd'/>
      <select placeholder='Select Role' id='role'>
      <option>admin</option>
      <option>user</option>
      <option>emp</option>
      </select>
      <button style={{backgroundColor:"lightblue",width:"100px"}} onClick={handleSubmit}>Add</button>
    </div>
    </div>
     <br /><br /><br />
    <Footer/>
    </>
  )
}

export default Add
