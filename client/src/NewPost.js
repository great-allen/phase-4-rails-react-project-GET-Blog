import React,{useState} from 'react';
import { useHistory } from "react-router";
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import './App.css';
import BrandCardHeader from '@mui-treasury/components/cardHeader/brand';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Stack from '@mui/material/Stack';
const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    margin: 'auto',
    top:spacing(5),
    
    borderRadius: spacing(2), // 16px
    transition: '0.3s',
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    position: 'relative',
    maxWidth: 500,
    marginLeft: 'auto',
    overflow: 'initial',
    background: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: spacing(2),
    [breakpoints.up('md')]: {
      flexDirection: 'row',
      paddingTop: spacing(2),
    },
    
  },
  media: {
    width: '88%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: spacing(-3),
    height: 0,
    paddingBottom: '48%',
    borderRadius: spacing(2),
    backgroundColor: '#fff',
    position: 'relative',
    [breakpoints.up('md')]: {
      width: '100%',
      marginLeft: spacing(-3),
      marginTop: 0,
      transform: 'translateX(-8px)',
    },
    '&:after': {
      content: '" "',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      // backgroundImage: 'linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)',
      borderRadius: spacing(2), // 16
      opacity: 0.5,
    },
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: 'initial',
  },
}));



function NewPost({editPost,user,updatePost,addToPosts}) {
  const [heading,setHeading]=useState(editPost.title)
  const [body,setBody]=useState(editPost.content)
  const [isEdit,setIsEdit]=useState(false)
  const [imageUrl,setImageUrl]=useState(editPost.image_url)
  const [title,setTitle]=useState('')
  const [content,setContent]=useState('')
  const [url,setUrl]=useState('')
 // eslint-disable-next-line const [errors,setErrors]=useState([])
  const history = useHistory();
  
  // const [isLoading, setIsLoading] = useState(false);
  const handleClick=()=>{
    return setIsEdit(true)
  }

  const onAdd=()=>{
    fetch("/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title:title,
        content:content,
        image_url:url,
        user_id:user.id
      }),
    }).then((r) => {
      
      if (r.ok) {
        r.json().then((data) => {
          history.push("/My")
          // setIsEdit(false)
          addToPosts(data)
        })
        
      } else {
        r.json().then((err) => alert(err.errors));
      }
    });
  }

  const onUpdate=()=>{
  
   fetch(`/posts/${editPost.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title:heading,
        content:body,
        image_url:imageUrl,
        user_id:user.id
      }),
    }).then((r) => {
      
      
      if (r.ok) {
        r.json().then((data) => {
          history.push("/My")
          
          updatePost(data)
        })
      } else {
        r.json().then((err) => alert(err.errors));
      }
    });
  }

  

  const styles = useStyles();
  const {
    button: buttonStyles,
    ...contentStyles
  } = useBlogTextInfoContentStyles();
  const shadowStyles = useOverShadowStyles();
  return (
    <>
    {editPost.length!==0? 
    (<div className="NewPostDiv" >
      
      <BrandCardHeader
    image={
      user.image_url
    }
    
    extra={
      <>
        <Button variant="contained" color="primary" onClick={handleClick}>
          Edit
        </Button>
        {/* <Button variant="contained" color="primary" onClick={onDelete}>
        {isLoading ? "Loading..." : "Delete"}
        </Button> */}
      </>
    }
  />
  
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        className={styles.media}
        image={
          editPost.image_url
        }
        sr
      />
      <CardContent>
        {isEdit?
        <>
        <TextInfoContent
          classes={contentStyles}
          overline={user.username}
          heading={
            <input type="text" value={heading} onChange={(e)=>setHeading(e.target.value)} style={{width:"250px",height:"40px"}}/>
          }
          body={
            <textarea value={body} onChange={(e)=>setBody(e.target.value)}  style={{width:"250px",maxHeight:"130px",overflow:"scroll"}}/>
          }
        />
        <input type="text"value={imageUrl} placeholder="enter new image_url" onChange={(e)=>setImageUrl(e.target.value)} style={{width:"250px", maxHeight:"40px", overflow:"hidden",margin:"auto",marginBottom:"5px"}}/>
        <Button className={buttonStyles} onClick={onUpdate}>Update</Button>
        </>:<TextInfoContent
        classes={contentStyles}
        overline={user.username}
        heading={
          editPost.title
        }
        body={
         editPost.content
        }
      />}
        
      </CardContent>
    </Card>
    </div>):
  (<div className="NewPostDiv" >
    <BrandCardHeader
    image={
      user.image_url
    }
    
    extra={"new post"}
  />
    <TextField
          id="outlined-multiline-flexible"
          label="title"
          multiline
          maxRows={7}
          style={{width:370,marginLeft:100}}
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />
        <TextField
          id="outlined-multiline-static"
          label="content"
          multiline
          rows={4}
          style={{width:370,marginLeft:100,marginTop:15,overflow:"hidden"}}
          value={content}
          onChange={(e)=>setContent(e.target.value)}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="image_url"
          multiline
          maxRows={7}
          style={{width:370,marginLeft:100,marginTop:15}}
          value={url}
          onChange={(e)=>setUrl(e.target.value)}
        />
        <Stack direction="row" spacing={2}>
        <Button variant="outlined" style={{marginLeft:100,marginTop:10,color:"purple"}} onClick={onAdd}>create</Button>
      </Stack>
    </div>)}
    
  </>
  )
}

export default NewPost