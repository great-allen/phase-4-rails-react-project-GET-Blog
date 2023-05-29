import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import Post from "./Post";
import NewPost from "./NewPost";
import Loader from './Loader'
import MyPosts from "./MyPosts";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyProfile from "./MyProfile";
function App() {
  const [user, setUser] = useState(null);
  const [posts,setPosts]=useState([])
  const [editPost,setEditPost]=useState([])
  const [follows,setFollows]=useState([])
  const [searchTerm,setSearchTerm]=useState('')
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    fetch('/follows').then(r=>r.json()).then(setFollows)
  },[])
    
      
    
  
  
  useEffect(()=>{
    fetch("/posts").then(r=>r.json()).then(setPosts)
 
},[])
  
useEffect(() => {
  // auto-login
  fetch("/me")
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
          setIsLoading(false);
          
        });
      } else {
        setIsLoading(false);
      }
    })
    .catch(() => setIsLoading(false));
}, []);

if (isLoading) {
  return <Loader/>;
}
  

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
  
  const onAddFollowing=(newFollow)=>{
    setFollows([newFollow,...follows])
  }

  const onDeleteFollow=(deleteFollow)=>{
    const deletedFollows=follows.filter((follow)=>{
      return follow.id!==deleteFollow.id
    })
    setFollows(deletedFollows)
  }

  const fetchPosts=()=>{fetch('/posts').then(r=>r.json()).then(newPosts => {
    setPosts(newPosts);
  }).catch(err=>alert(err))}

  const onAddLike=(post)=>{
    fetchPosts()
  }
  const onDeleteLike=(post)=>{
    fetchPosts()
  }

  // const handleLikeAdd=()=>{
  //   fetchPosts()
  // }
  // const handleLikeDelete=()=>{
  //   fetchPosts()
  // }

  const postsToDisplay=posts&&posts.filter((post)=>{
    return post.title.toLowerCase().includes(searchTerm.toLowerCase())
   })

  return (
    <>
    
      <NavBar user={user} setUser={setUser} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <Switch>
      <Route path="/New">
            <NewPost user={user} editPost={editPost} updatePost={updatePost} addToPosts={addToPosts} deletePost={deletePost}/>
        </Route>
          <Route path="/My">
            <MyPosts setPosts={setPosts} user={user} posts={posts} addToEdit={addToEdit} deletePost={deletePost} follows={follows} onDeleteLike={onDeleteLike} onAddLike={onAddLike} fetchPosts={fetchPosts}/>
          </Route>
          <Route path="/MyProfile">
            <MyProfile user={user} setUser={setUser}/>
          </Route>
          <Route path="/">
            <Post  user={user} posts={postsToDisplay} follows={follows} onAddFollowing={onAddFollowing} onDeleteFollow={onDeleteFollow} onAddLike={onAddLike} onDeleteLike={onDeleteLike} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </Route>
      </Switch>
    
    
    </>
    
  );
}

export default App;
