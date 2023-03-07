import React, { useState } from 'react'

import { red } from '@mui/material/colors';
// import { useHistory } from "react-router";
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise';
import { useSlopeCardMediaStyles } from '@mui-treasury/styles/cardMedia/slope';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import TextInfoContent from '@mui-treasury/components/content/textInfo';

import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing';
// import { useLabelIconStyles } from '@mui-treasury/styles/icon/label';
import IconButton from '@mui/material/IconButton';
// import PersonAddSharpIcon from '@mui/icons-material/PersonAddSharp';

const useStyles = makeStyles(() => ({
    root: {
      maxWidth: 304,
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

function PostDetails({follows,history,postDetail,user,reviews,onAddReview,showDeleteButton,onDeleteReview,onAddFollowing,onDeleteFollow}) {
  
  const userFollower=follows.filter((follow)=>{
    return follow.following_id===postDetail.user_id
  }).filter((follow)=>{
    return follow.follower_id===user.id
  })
  
  const gutterStyles = usePushingGutterStyles({ space: 3, firstExcluded: true });
  // const iconLabelStyles = useLabelIconStyles({ linked: true });  
  const cardStyles = useStyles();
  const mediaStyles = useSlopeCardMediaStyles();
  const shadowStyles = useSoftRiseShadowStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();
  const [newReview,setNewReview]=useState([])
   // eslint-disable-next-line const [errors,setErrors]=useState([])
    // const history = useHistory();
  const addReview=(e)=>{
    e.preventDefault();
    fetch('/reviews',{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            user_id: user.id,
            post_id: postDetail.id,
            content: newReview
        }),
    }).then((r) => {
    //   setIsLoading(false);
      if (r.ok) {
        r.json().then(data=>{
            onAddReview(data)
            setNewReview('')
        })
      } else {
        r.json().then((err) => alert(err.errors));
      }
    });
  }

  const deleteReview=(review)=>{
    
    fetch(`/reviews/${review.id}`,{
        method: "DELETE"
    }).then((r) => {
      
      
        if (r.ok) {
            
          r.json().then((data) => {
            
            onDeleteReview(data)
            
          })
        } else {
        r.json().then((err) => alert(err.errors));
      }
    });
  }
  
  const addFollowing=()=>{
    fetch('/follows',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
          following_id:postDetail.user_id,
          follower_id: user.id
      }),
  }).then((r) => {
      
      
      if (r.ok) {
          
        r.json().then((data) => {
          
          onAddFollowing(data)
          
        })
      } else {
      r.json().then((err) => alert(err.errors));
    }
  });
  }

  const deleteFollowing=()=>{
    fetch(`/follows/${userFollower[0].id}`,{
      method: "DELETE"
  }).then((r) => {
    
    
      if (r.ok) {
          
        r.json().then((data) => {
          
          onDeleteFollow(data)
          
        })
      } else {
      r.json().then((err) => alert(err.errors));
    }
  });
  
  }

  // const handleDeleteLike=(likePost)=>{
    
  //   const id=likePost.likes.find((post)=>{
  //     return post.user_id===user.id
  //   }).id
    
  //   fetch(`/likes/${id}`,{
  //     method: "DELETE"
  // }).then((r) => {
    
    
  //     if (r.ok) {
          
  //       r.json().then((data) => {
          
  //         handleLikeDelete(data)
          
  //       })
  //     } else {
  //     r.json().then((err) => alert(err.errors));
  //   }
  // });
  // }
  // const handleAddLike=(likePost)=>{
    
  //   fetch('/likes',{
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //         post_id: likePost.id,
  //         user_id: user.id
  //     }),
  // }).then((r) => {
  //     if (r.ok) {
  //       r.json().then((data) => {
          
  //         handleLikeAdd(data)
          
  //       })
  //     } else {
  //     r.json().then((err) => alert(err.errors));
  //   }
  // });
  // }


  return (
    <>
    <div style={{marginTop:"16px"}}>
    <Card className={cx(cardStyles.root, shadowStyles.root)}>
    <CardHeader
        
        action={postDetail.user_id===user.id?'':
          userFollower.length===0?
          <IconButton aria-label="settings" size="small" color="error" onClick={addFollowing}>
            Follow
          </IconButton>:
          <IconButton aria-label="settings" size="small" color="error" onClick={deleteFollowing}>
          Unfollow
        </IconButton>
        }
        title={postDetail.user.username}
      />
      <CardMedia
        classes={mediaStyles}
        image={
          postDetail.image_url
        }
      />
      <Avatar className={cardStyles.avatar} src={postDetail.user.image_url} />
      <CardContent className={cardStyles.content}>
        <TextInfoContent
          classes={textCardContentStyles}
          heading={postDetail.title}
          body={
            postDetail.content
          }
        />
      </CardContent>
      <Box px={2} pb={2} mt={-1}>
      <div className={gutterStyles.parent}>
      {/* <button type={'button'} tabIndex={0} className={iconLabelStyles.link}>
      {postDetail.likes.find((like)=>{return like.user_id===user.id})?<><FavoriteIcon className={iconLabelStyles.icon} onClick={()=>handleDeleteLike(postDetail)}/>{postDetail.likes.length}</>:<><FavoriteBorderIcon className={iconLabelStyles.icon} onClick={()=>handleAddLike(postDetail)}/> {postDetail.likes.length}</>}
      </button> */}
      </div>
      </Box>
    </Card>

       
   
    </div>
    <Form style={{width:"80%",marginTop:"2%",marginLeft:"10%"}} onSubmit={addReview}>
    <InputGroup className="mb-3">
        <Form.Control
          placeholder="Write your review"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={newReview}
          onChange={(e)=>setNewReview(e.target.value)}
        />
        <Button variant="outline-secondary" id="button-addon2" type="submit">
          Save
        </Button>
      </InputGroup>
      </Form>
    <div>
        <p style={{marginTop:"2%",marginLeft:"2%", fontSize:"25px", color:"purple"}}>
            Reviews:
        </p>
    </div>
    {reviews ? (
  reviews.map((review) => {
    return (
      <ListGroup as="ol" key={review.id}>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          {
            <Avatar sx={{ bgcolor: red[500] }} aria-label="user" style={{ width: 50,
              height: 50,border: '2px solid #fff','& > img': {
                margin: 0,
              },}}>
              <img src={review.image_url} alt='' />
            </Avatar>
          }
          <div className="ms-2 me-auto" style={{ marginLeft: "5%" }}>
            <div className="fw-bold">{review.username}</div>
            {review.content}
          </div>
          {showDeleteButton && <Button onClick={()=>deleteReview(review)}>Delete</Button>}
        </ListGroup.Item>
      </ListGroup>
    );
  })
) : ''}

    </>
  )
}

export default PostDetails