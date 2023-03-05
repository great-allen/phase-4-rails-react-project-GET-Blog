import React, { useState} from 'react'
import Grid from '@mui/material/Grid';

import Pagination from '@mui/material/Pagination';

import Stack from '@mui/material/Stack';

import PostDetails from "./PostDetails";
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise';
import { useSlopeCardMediaStyles } from '@mui-treasury/styles/cardMedia/slope';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing';
import { useLabelIconStyles } from '@mui-treasury/styles/icon/label';

const useStyles = makeStyles(() => ({
  root: {
    width: 304,
    height:410,
    margin: 'auto',
  },
  content: {
    padding: 24,
  },
  avatar: {
    width: 50,
    height: 50,
    border: '2px solid #fff',
    margin: '-48px 32px 0 auto',
    '& > img': {
      margin: 0,
    },
  },
}));



const itemsPerPage = 16

function Post({user,posts,follows,onAddFollowing,onDeleteFollow,onAddLike,onDeleteLike}) {
  const gutterStyles = usePushingGutterStyles({ space: 3, firstExcluded: true });
  const iconLabelStyles = useLabelIconStyles({ linked: true });
  const cardStyles = useStyles();
  const mediaStyles = useSlopeCardMediaStyles();
  const shadowStyles = useSoftRiseShadowStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();

  const [reviews,setReviews]=useState([])
  const [page, setPage] = useState(1);
  const [showPost,setShowPost]=useState(false)
  const [postDetail,setPostDetail]=useState([])
  
  
  // Pagination
const startIndex = (page - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const currentData = posts.slice(startIndex, endIndex);
const handleChange = (event, value) => {
  setPage(value);

window.scrollTo({ top: 0, behavior: 'smooth' });
};

  
const handleClick=(post)=>{
  setPostDetail(post)
  setShowPost(true)
  fetch(`/posts/${post.id}`).then(r=>r.json()).then(setReviews)
  
}

  const onAddReview=(review)=>{
    setReviews([review,...reviews])
  }

 const deleteLike=(likePost)=>{
    const id=likePost.likes.find((post)=>{
      return post.user_id===user.id
    }).id
    
    fetch(`/likes/${id}`,{
      method: "DELETE"
  }).then((r) => {
    
    
      if (r.ok) {
          
        r.json().then((data) => {
          
          onDeleteLike(data)
          
        })
      } else {
      r.json().then((err) => alert(err.errors));
    }
  });
  }
  const addLike=(likePost)=>{
    fetch('/likes',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
          post_id: likePost.id,
          user_id: user.id
      }),
  }).then((r) => {
      
      
      if (r.ok) {
          
        r.json().then((data) => {
          
          onAddLike(data)
          
        })
      } else {
      r.json().then((err) => alert(err.errors));
    }
  });
  }
  
  return (
    <>
    {showPost?<PostDetails postDetail={postDetail} user={user} reviews={reviews} onAddReview={onAddReview} follows={follows} onAddFollowing={onAddFollowing} onDeleteFollow={onDeleteFollow}  />:
    <div>
      <Grid container spacing={3} style={{marginLeft:"4%",marginTop:"5px"}}>
        {currentData &&currentData.map(post=>(
          <Grid item key={post.id}>
             <Card className={cx(cardStyles.root, shadowStyles.root)} onClick={()=>handleClick(post)}>
      <CardMedia
        classes={mediaStyles}
        image={
          post.image_url
        }
      />
      <Avatar className={cardStyles.avatar} src={post.user.image_url} />
      <CardContent className={cardStyles.content}>
        <TextInfoContent
          classes={textCardContentStyles}
          heading={post.title}
          body={
            post.content.length > 20 ? post.content.substring(0, 22) + "..." : post.content
          }
        />
      </CardContent>
      <Box px={2} pb={2} mt={-1}>
      <div className={gutterStyles.parent}>
      <button type={'button'} tabIndex={0} className={iconLabelStyles.link}>
        {post.likes.find((like)=>{return like.user_id===user.id})?<><FavoriteIcon className={iconLabelStyles.icon} onClick={(e)=>{
          e.stopPropagation()
          deleteLike(post)}}/>{post.likes.length}</>:
          <><FavoriteBorderIcon className={iconLabelStyles.icon} onClick={(e)=>{
            e.stopPropagation()
            addLike(post)}} /> {post.likes.length}</>}
        
      </button>
      </div>
      </Box>
    </Card>
              
          </Grid>
        ))}
      </Grid>
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {posts.length > 9 && (
          <Pagination
            color="primary"
            shape="rounded"
            count={Math.ceil(posts.length / itemsPerPage)}
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

export default Post