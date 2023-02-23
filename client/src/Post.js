import React, { useEffect, useState } from 'react'


import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



function Post() {

  const [posts,setPosts]=useState([])
  
  useEffect(()=>{
    fetch("/posts").then(r=>r.json()).then(setPosts)
  },[])
  

  return (
    <Row xs={1} md={6} className="g-4" style={{marginTop:"10px"}}>
      {posts &&posts.map((post) => (
        <Col>
          <Card style={{height:"350px", overflow:"hidden"}}>
            <Card.Img variant="top" src={post.image_url} style={{height:"160px", width:"200px",objectFit: "cover"}} />
            <Card.Body>
              <Card.Title>C{post.title}</Card.Title>
              <Card.Text>
                {post.content}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default Post