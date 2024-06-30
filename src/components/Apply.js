import React, { useState } from 'react'
import axios from 'axios';
import img from '../assests/img2.png'
import { Modal, Ripple, initMDB } from "mdb-ui-kit";
import Navbar2 from './Navbar2';
import { Pane, Dialog, Button } from 'evergreen-ui'

export default function Apply() {
 const [status,setStatus] = useState('')
 const [file, setFile] = useState("");
 const [toggle,setToggle] = useState(0)
 const [process,setProcess]= useState(false)
 const [isShown, setIsShown] = React.useState(false)
 const handleSubmit = async(event) => {
    // initMDB({ Modal, Ripple });
    setIsShown(true)
    event.preventDefault();
    const file = document.getElementById('avatar').files[0]
    const file1 = document.getElementById('gid').files[0]
    console.log(file)
    await axios.post('https://evisa-server.vercel.app/newvisa',{
      name:document.getElementById('name').value,
      email:document.getElementById('email').value,
      aadhaar:document.getElementById('anum').value,
      avatar:file,
      father_name:document.getElementById('fname').value,
      mother_name:document.getElementById('mname').value,
      gender:document.getElementById('gender').value,
      age:document.getElementById('age').value,
      pin_code:document.getElementById('pin').value,
      address:document.getElementById('add').value,
      applied_visa:document.getElementById('visa').value,
      applied_country:document.getElementById('cvisa').value,
      gid:file1,
      // applied_by: localStorage.getItem('username')
    }, {
      headers: { "Content-Type": "multipart/form-data" },
    }).then(response => {
      setStatus(response.data)
      setToggle(1)
      setProcess(true)
    })
    .catch(error => {
      // Handle errors
      console.error('Error:', error);
    });
  }
  // if(toggle == 1) 
  // {
  //   return(
  //     <div style={{width:"400px",height:"400px",border:"2px solid black"}}>
  //       <h1>Your Application is being processed</h1>
  //       <h2>Application token number {status}</h2>
  //     </div>
  //   )
  // }
  return (
    <>
    {/* <Navbar2/> */}
    <div style={{display:"flex",alignItems:"center",flexDirection:"column",backgroundColor:"#1d97c5"}}>
    <h1 style={{color:"white"}}>Visa Application Form</h1>
    <form action="submit_application.php" method="post" enctype="multipart/form-data" style={{border:"2px solid black",width:"900px",padding:"90px",backgroundColor:"white",color:"black"}}>
    <fieldset style={{padding:"10px"}}>
      <legend>Personal Information:</legend> <br /><br />
      <label for="fullName">Email:</label><br/>
      <input type="email" id="email" name="email" required/><br/><br/>
      <label for="fullName">Full Name:</label><br/>
      <input type="text" id="name" name="name" required/><br/><br/>
      <label for="adharnumber">Aadhaar Number:</label><br/>
      <input type="number" id="anum" name="anum" required/><br/><br/>
      <label for="fathername">Father Name :</label><br/>
      <input type="text" id="fname" name="fname" required/><br/><br/>
      <label for="mothername">Mother Name:</label><br/>
      <input type="text" id="mname" name="mname" required/><br/><br/>
      <label for="gender">Gender:</label><br/>
      <input type="text" id="gender" name="gender" required/><br/><br/>
      
      <label for="dob">Age:</label><br/>
      <input type="number" id="age" name="age" required/><br/><br/>
      
      {/* <label for="dob">Date of Birth:</label><br/>
      <input type="date" id="dob" name="dob" required/><br/><br/> */}
      <label for="passportNumber">Pin code:</label><br/>
      <input type="number" id="pin" name="pin" required/><br/><br/>
      <label for="address">Address:</label><br/>
      <textarea id="add" name="add" required></textarea><br/><br/>
    </fieldset>

    <fieldset style={{padding:"10px"}}>
      <legend>Visa Details:</legend>
      <label for="visaType">Type of Visa:</label><br/>
      <select placeholder='Select Visa type' id='visa'>
      <option>Student visa</option>
      <option>Tourist visa</option>
      <option>Medical visa</option>
      <option>Employee visa</option>
      <option>Immigrant visa</option>
      <option>Travel visa</option>
      </select><br /><br />
      <label for="countryType">Apply For :</label><br/>
      <select placeholder='Select country' id='cvisa'>
      <option>USA</option>
      <option>Uk</option>
      <option>France</option>
      <option>Japan</option>
      <option>Germany</option>
      <option>Sri lanka</option>
      </select>
      <br/><br/>
    </fieldset>

    <fieldset style={{padding:"10px"}}>
      <legend>Upload Documents:</legend>
      <label for="passportPhoto">Passport Size Photo:</label><br/>
      <input type="file" id="avatar" name="avatar" required/><br/><br/>
      <label htmlFor="Aaadhhar">upload any government id</label>
      <input type="file" id="gid" name="gid" required/><br/><br/>
    </fieldset>

    <fieldset style={{padding:"10px"}}>
      <legend>Declaration:</legend>
      <label for="declaration">I hereby declare that the information provided above is true and accurate to the best of my knowledge. I understand that any false information provided may result in the rejection of my visa application.</label><br/>
      <input type="checkbox" id="declaration" name="declaration" required/><br/><br/>
    </fieldset>


   {/* <button onClick={handleSubmit}>Apply</button> */}
   <Pane>
      <Dialog
        isShown={isShown}
        title={(process)? `Application is under verification and your application id is :  ${status}`:"Application is being processing"}
        onCloseComplete={() => setIsShown(false)}
        hasFooter={false}
      >
      </Dialog>

      <Button onClick={handleSubmit}>Apply</Button>
    </Pane>
  </form>
  <br /><br />
  
  </div>
  </>
  )
    }
