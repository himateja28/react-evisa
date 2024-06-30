import React, { useState } from 'react'
import Navbar2 from './Navbar2';

import axios from 'axios'
function Avisa() {
    const [data,setData]= useState([])
    if(data.length==0){
    axios.get('https://evisa-server.vercel.app/acceptedvisa',).then((res)=>{
        console.log(res.data)
        setData(res.data)
    })
}
  return (
    <div>
        <Navbar2/>
        <h1>Accepted Visa Applications</h1>
        <table>
           <tr>
            <th id='head'> Name</th>
            <th id='head'> Email </th>
            <th id='head'> Aadhaar </th>
            <th id='head'> Father name </th>
            <th id='head'> Mother name </th>
            <th id='head'> Gender </th>
            <th id='head'> Age </th>
            <th id='head'>Address</th>           
            <th id='head'>Type</th>           
            <th id='head'>country</th>           
            <th id='head'>Avatar</th>           
            <th id='head'>Government id</th>           
           </tr>
            {data.map((user)=>{
                return(
                    
                        <tr>
                            <td> {user.name} </td>
                            <td > {user.email} </td>
                            <td > {user.aadhaar} </td>
                            <td> {user.father_name} </td>
                            <td> {user.mother_name} </td>
                            <td> {user.gender} </td>
                            <td> {user.age} </td>
                            <td> {user.address} </td>
                            <td> {user.applied_visa} </td>
                            <td> {user.applied_country} </td>
                            <td> <a href={user.file} target="_blank">Avatar</a></td>
                            <td> <a href={user.gid} target="_blank"> Gid </a> </td>
                        </tr>
                    
                )
            })}
        </table>
    </div>
  )
}

export default Avisa
