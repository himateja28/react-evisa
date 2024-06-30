import axios from 'axios'
import {useState} from 'react'
import Navbar2 from './Navbar2';

function Applied_users()
{
    const handleAccept = ()=>{
        axios.post('https://evisa-server.vercel.app/accepted',r[0]).then((res)=>{
            console.log('Application accepted')
        })
    }
    const handleReject = ()=>{
        let obj = {...r[0]}
        axios.post('https://evisa-server.onrender.com/rejected',r[0]).then((res)=>{
            console.log('Application rejected')
        })
    }
    const [ r,setR] = useState([])
    let data =[]
    if(r.length==0)
    {
        axios.get('https://evisa-server.onrender.com/appiledusers',{}).then((res)=>{
            console.log(res.data)
            setR(res.data)
            data = {...r}
        })
    }
    
    return(
        <div>
            <Navbar2/>
            <h1 style={{marginLeft:"50px", color:"cadetblue"}}>Details of Applicants applied for E-visa</h1>
        <div style={{width:"70vw",display:"flex",marginTop:"50px",marginLeft:"30px"}}>
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
            <th id='head'></th>           
            <th id='head'></th>           
           </tr>
            {r.map((user)=>{
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
                            <td> <a href={user.file} target="_blank">Verify Avatar</a></td>
                            <td> <a href={user.gid} target="_blank"> Verify Gid </a> </td>
                            <td><button style={{backgroundColor:"lightgreen" ,marginTop:"0px",height:"30px",color:"white"}}onClick={handleAccept}>Accept</button></td>
                            <td><button  style={{backgroundColor:"red" ,marginTop:"0px",height:"30px",color:"white"}}onClick={handleReject}>Reject</button></td>
                        </tr>
                    
                )
            })}
        </table>
        {/* <button onClick={handleAccept} style={{backgroundColor:"lightgreen" ,marginTop:"100px",height:"30px"}}>Accept</button>
        <button onClick={handleReject}  style={{backgroundColor:"red" ,marginTop:"100px",height:"30px"}}>Reject</button> */}
        </div>
        </div>
    )
}
export default Applied_users
