import React, { useState } from 'react'
import axios from 'axios'
import Card from './Card'
import img11 from'../assests/img11.png'
import img13 from'../assests/img13.png'
import Navbar2 from './Navbar2'
function CheckStatus() {
  const [status,setStatus]= useState('Enter Token number for status')
  const [data,setData] = useState()
  const handleSearch = () =>{
   const id = document.getElementById('aid').value
    axios.post('https://evisa-server.vercel.app/search',{id}).then((res)=>{
      setData(res.data)
      setStatus(res.data.status)
    })
  }
  if(status == "Accepted")
  {
    return (
      <>
       <div>
      {console.log(data)}
      <div className="Group3" style={{width: '100%', height: '100%'}}>
    <div className="Group1" style={{width: 611, height: 500, left: 0, top: 0, position: 'absolute'}}>
        <div className="Rectangle1" style={{width: 611, height: 327, left: 0, top: 0, position: 'absolute', background: '#88D4FF', borderRadius: 35}} />
        <div className="MinistryOfHomeAffairs" style={{left: 194, top: 60, position: 'absolute', color: 'black', fontSize: 18, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Ministry of Home Affairs</div>
        <img className="Ellipse1" style={{width: 136, height: 118, left: 424, top: 108, position: 'absolute', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25) inset', borderRadius: 9999}} src={data.file} />
        <div className="GovernmentOfIndia" style={{left: 143, top: 17, position: 'absolute', color: '#FF0000', fontSize: 30, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Government of India   </div>
        <img className="Rectangle2" style={{width: 58, height: 57, left: 74, top: 18, position: 'absolute'}} src={img11} />
        <img className="Rectangle3" style={{width: 58, height: 57, left: 447, top: 18, position: 'absolute'}} src={img13}/>
        <div className="Validity20242025" style={{left: 448, top: 273, position: 'absolute', color: '#FF0000', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>validity : 2024-2025</div>
        <div className="AppliedThroughOnlineEVisa" style={{left: 196, top: 300, position: 'absolute', color: '#080101', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Applied through : Online E-visa</div>
    </div>
    <div className="Group2" style={{width: 232, height: 181, left: 105, top: 92, position: 'absolute'}}>
        <div className="Rectangle4" style={{width: 232, height: 200, left: 0, top: 0, position: 'absolute', background: '#99D4FF', borderRadius: 5}} />
        <div className="NameHimateja" style={{left: 11, top: 15, position: 'absolute', color: 'black', fontSize: 15.70, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Name: {data.name}</div>
        <div className="Age19" style={{left: 11, top: 43, position: 'absolute', color: 'black', fontSize: 15.70, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Age : {data.age}</div>
        <div className="GenderM" style={{left: 11, top: 71, position: 'absolute', color: 'black', fontSize: 15.70, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Gender : M</div>
        <div className="AppliedCountryUk" style={{left: 11, top: 99, position: 'absolute', color: 'black', fontSize: 15.70, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Applied Country: {data.applied_country}</div>
        <div className="AddressVijayawada" style={{left: 11, top: 127, position: 'absolute', color: 'black', fontSize: 15.70, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Address: {data.address}</div><br /><br /><br />
        <br /><div className="Ph8919827449" style={{left: 11, top: 170, position: 'absolute', color: 'black', fontSize: 15.70, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Ph : 8919827449</div>
    </div>
</div>
    </div>
      </>
    )
  }
  return (
    <div>
      <Navbar2/>
      <div style={{width:"80vw",border:"2px solid black",height:"69vh",margin:"60px"}}>
      <h1 style={{color:"teal",margin:"40px"}}>Check Status of application</h1>
      <label htmlFor="applyid" style={{color:"red",fontSize:"30px",margin:"40px"}}>Enter Application id </label>
      <input type="text" id='aid' style={{marginLeft:"50px"}}/>
      <button onClick={handleSearch}>Search</button>
      <h1 style={{color:"teal",margin:"40px"}}>Status : {status=="Rejected"?(<span style={{color:"red"}}>Rejected</span>):status=="Processing"?(<span>Prosessing</span>):(<span>Enter Application Id</span>)}</h1>
      </div>
    </div>
  )
}

export default CheckStatus
