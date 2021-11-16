import React, { useState, useEffect } from 'react';
import AddPostForm from '../../components/AddPostForm/AddPostForm';
import PostFeed from "../../components/PostFeed/PostFeed";
// import PostForm from "../../components/PostForm/PostForm";
import Header from "../../components/Header/Header"
import * as postsAPI from '../../utils/postApi';

export default function Feed(){
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");


  async function handleAddPost (post){
    try{
        console.log(post)
        const data = await postsAPI.create(post);
        console.log(data.post, ' This is new survey', data, ' data variable')
        // setPosts( posts => [data.post, ...posts])
        setPosts([data.post, ...posts]);
    } catch (err){
        setError(err.message);
      console.log(err);
	  setError(err.message)
    }
   
    
  }

  
    return (
        <>
        <Header />
        <AddPostForm handleAddPost={handleAddPost}/>
        <PostFeed/>
        </>
    )
}