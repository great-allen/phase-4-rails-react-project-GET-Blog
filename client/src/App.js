import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import Post from "./Post";
import NewPost from "./NewPost";

import MyPosts from "./MyPosts";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [posts,setPosts]=useState([])
  const [editPost,setEditPost]=useState([])
  

 
  useEffect(()=>{
    fetch("/posts").then(r=>r.json()).then(setPosts)
 
},[])
  
  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  

  if (!user) return <Login onLogin={setUser} />;
   
  const addToEdit=(post)=>{
    setEditPost(post)
  }


  const addToPosts=(newPost)=>{
    setPosts([newPost,...posts])
  }

  const updatePost=(newPost)=>{
    
    const updatedPosts=posts.map((post)=>{
      return post.id===newPost.id? newPost:post
      
    })
    setPosts(updatedPosts)
    
  }

  // const deletePost=(deletedPost)=>{
    
  //   const deletePosts=posts.filter((post)=>{
  //     return post.id!==deletedPost.id
  //   })
  //   setPosts(deletePosts)
    
  // }
  const deletePost = (deletedPost) => {
    fetch('/posts')
      .then(r => r.json())
      .then(newPosts => {
        setPosts(newPosts);
      })
      .catch(error => {
        console.error(error);
      });
  };
  

  return (
    <>
    
      <NavBar user={user} setUser={setUser}/>
      <Switch>
      <Route path="/New">
            <NewPost user={user} editPost={editPost} updatePost={updatePost} addToPosts={addToPosts} deletePost={deletePost}/>
        </Route>
          <Route path="/My">
            <MyPosts setPosts={setPosts} user={user} posts={posts} addToEdit={addToEdit} deletePost={deletePost} />
          </Route>
          <Route path="/">
            <Post  user={user} posts={posts}/>
          </Route>
      </Switch>
    
    
    </>
    
  );
}

export default App;
