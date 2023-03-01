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
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderRounded from '@material-ui/icons/FavoriteBorderRounded';
import Share from '@material-ui/icons/Share';
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise';
import { useSlopeCardMediaStyles } from '@mui-treasury/styles/cardMedia/slope';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import TextInfoContent from '@mui-treasury/components/content/textInfo';

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

function Post({user,posts}) {

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


  return (
    <>
    {showPost?<PostDetails postDetail={postDetail} user={user} reviews={reviews} onAddReview={onAddReview}/>:
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
            post.content
          }
        />
      </CardContent>
      <Box px={2} pb={2} mt={-1}>
        <IconButton>
          <Share />
        </IconButton>
        <IconButton>
          <FavoriteBorderRounded />
        </IconButton>
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