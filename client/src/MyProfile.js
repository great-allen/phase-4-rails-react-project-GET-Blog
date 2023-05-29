import React,{useState,useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import { pink } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack'; 
import FaceIcon from '@mui/icons-material/Face';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
function MyProfile({user,setUser }) {
  const [username,setUsername]=useState(user.username)
  const [bio,setBio]=useState(user.bio)
  const [avatar, setAvatar] = useState(null);
  const [showChangeSuccess, setShowChangeSuccess] = useState(false);
  const [showChange,setShowChange]=useState(false)
  const [file, setFile]=useState('')

//   const handleAvatarClick = () => {
//     fileInputRef.current.click();
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setAvatar(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

  const changeAvatar=async (e) => {
    e.preventDefault();

    const formData = new FormData();
    // formData.append("user[username]",e.target.username.value)
    // formData.append("bio",e.target.bio.value)
    formData.append("avatar", avatar);

    try {
      const response = await fetch(`/users/${user.id}`, {
        method: 'PATCH',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data)
        setShowChange(false)
        // setShowChangeSuccess(true);
      } else {
        // Handle error
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const changeUser = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(`/users/${user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          bio: bio
        })
      });
  
      if (response.ok) {
        const data = await response.json();
        setUser(data);
        setShowChangeSuccess(true);
      } else {
        // Handle error
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: 600,  margin: 'auto', marginTop:5 }}>
        <h3>My Profile</h3>
        <div style={{border:"2px solid lightGrey",height: 400,}}> 
          <Form style={{width:550,margin:"auto",marginTop:12}} onSubmit={changeAvatar} >
          <Stack direction="row" spacing={2} style={{ marginBottom: 5 }}>
                {user.url ? (
                    <>
                    <Avatar alt={user.name} src={user.url} style={{ cursor: 'pointer' }} onClick={()=>setShowChange(true)}/>
                    
                    </>
                ) : (
                    <> 
                    <Avatar style={{ cursor: 'pointer' }} onClick={()=>setShowChange(true)} >
                    <FaceIcon  />
                    </Avatar>
                    
                    </>
                )}
                

                    <Button variant="primary" type="submit">Change Avatar</Button>
                    {showChange?<label htmlFor="avatar"> 
                    <input type="file" name="avatar" accept='image/*' onChange={(e)=>setAvatar(e.target.files[0])} style={{marginTop:5}}  />  
                    </label>:''}
            </Stack>
            </Form>
            <Form style={{width:550,margin:"auto",marginTop:12}} onSubmit={changeUser} >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" name="username" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Bio</Form.Label>
              <Form.Control as="textarea" name="bio" rows={3} type="text" value={bio} onChange={(e)=>setBio(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Form>
          {showChangeSuccess?
          <div style={{border:"1px solid black",width:550,height:30, margin:"auto",marginTop:16,position:"relative"}}>
            <div style={{width:28,height:30,border:"2px solid blue",backgroundColor:"blue"}}>

            </div>
            <DoneOutlinedIcon sx={{ color: pink[500] }} style={{position:"absolute",marginTop:-28}}/>
            <span style={{color:"blue",position:"absolute",marginTop:-28,marginLeft:40}}>
            Your changes have been saved
            </span>
          </div>:''}
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
