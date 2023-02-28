import React, {useState} from 'react'
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Pagination from '@mui/material/Pagination';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Stack from '@mui/material/Stack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PostDetails from "./PostDetails";
import ModeTwoToneIcon from '@mui/icons-material/ModeTwoTone';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';


const itemsPerPage = 16

function MyPosts({user,posts,setPosts,addToEdit}) {
    
    const userPosts=posts&&posts.filter((post)=>{
        return post.user.username===user.username
    })
    
    const [reviews,setReviews]=useState([])
  const [page, setPage] = useState(1);
  const [showPost,setShowPost]=useState(false)
  const [postDetail,setPostDetail]=useState([])
  
  
  // Pagination
const startIndex = (page - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const currentData = userPosts.slice(startIndex, endIndex);
const handleChange = (event, value) => {
  setPage(value);

window.scrollTo({ top: 0, behavior: 'smooth' });
};

const onEdit=(post)=>{
    addToEdit(post)
    
}
  
const handleClick=(post)=>{
  setPostDetail(post)
  setShowPost(true)
  fetch(`/posts/${post.id}`).then(r=>r.json()).then(setReviews)
  
}

  const onAddReview=(review)=>{
    setReviews([review,...reviews])
  }


  return (
    <>
    {showPost?<PostDetails postDetail={postDetail} user={user} reviews={reviews} onAddReview={onAddReview}/>:
    <div>
      <Grid container spacing={1} style={{marginLeft:"3px",marginTop:"5px"}}>
        {currentData &&currentData.map(post=>(
          <Grid item key={post.id}>
              <Card sx={{ maxWidth: 345 }} onClick={()=>handleClick(post)}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img src={post.user.image_url} alt='' />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" >
            <MoreVertIcon />
          </IconButton>
        }
        title={post.title}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={post.image_url}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Link to={{ pathname: "/New", state: { post } }} onClick={(event) => {
    event.stopPropagation();
    onEdit(post);
}}>
  <ModeTwoToneIcon />
</Link>
        
        <IconButton aria-label="delete">
            <DeleteForeverTwoToneIcon />
        </IconButton>
      </CardActions>
      
    </Card>
          </Grid>
        ))}
      </Grid>
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {userPosts.length > 9 && (
          <Pagination
            color="primary"
            shape="rounded"
            count={Math.ceil(userPosts.length / itemsPerPage)}
            page={page}
            onChange={handleChange}
            size="large"
            sx={{marginBottom:"8px"}}
          />
        )}
      </Stack>
    </div>}
    </>
  )
}

export default MyPosts