import React, { useState } from 'react'

import { red } from '@mui/material/colors';

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

import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

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

function PostDetails({postDetail,user,reviews,onAddReview}) {
    const cardStyles = useStyles();
  const mediaStyles = useSlopeCardMediaStyles();
  const shadowStyles = useSoftRiseShadowStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();
  const [newReview,setNewReview]=useState([])

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
      }).then(r=>r.json()).then(data=>{
        onAddReview(data)
        setNewReview('')
      })
  }
    
  return (
    <>
    <div>
    <Card className={cx(cardStyles.root, shadowStyles.root)}>
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
        <IconButton>
          <Share />
        </IconButton>
        <IconButton>
          <FavoriteBorderRounded />
        </IconButton>
      </Box>
    </Card>

        {/* <Card sx={{ maxWidth: 345, marginLeft:"2%", marginTop:"2%" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="user">
            <img src={postDetail.user.image_url} alt='' />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={postDetail.title}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={postDetail.image_url}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {postDetail.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
      </CardActions>
    </Card> */}
   
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
            <Avatar sx={{ bgcolor: red[500] }} aria-label="user">
              <img src={review.image_url} alt='' />
            </Avatar>
          }
          <div className="ms-2 me-auto" style={{ marginLeft: "5%" }}>
            <div className="fw-bold">{review.username}</div>
            {review.content}
          </div>
          {/* <Badge bg="primary" pill>
            14
          </Badge> */}
        </ListGroup.Item>
      </ListGroup>
    );
  })
) : (
  <p>No Review yet, please write your review</p>
)}

    </>
  )
}

export default PostDetails