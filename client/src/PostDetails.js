import React, { useState } from 'react'
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Card from '@mui/material/Card';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function PostDetails({postDetail}) {
    
  
    
  return (
    <>
    <div>
        <Card sx={{ maxWidth: 345, marginLeft:"2%", marginTop:"2%" }}>
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
    </Card>
   
    </div>
    <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Button
        </Button>
      </InputGroup>
    <div>
        <p style={{marginTop:"2%",marginLeft:"2%", fontSize:"25px", color:"purple"}}>
            Reviews:
        </p>
    </div>
    {postDetail.reviews ? (
  postDetail.reviews.map((review) => {
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