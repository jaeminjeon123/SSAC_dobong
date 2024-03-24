import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import PostItem from "./PostItem";




export default function  PostList(){
   // 'https://jsonplaceholder.typicode.com/posts'
const [posts,setPosts]=useState([]);

useEffect(() => {
    // axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
    //   setPosts(res.data);
    // });
    getPosts();
  }, []);
  
const getPosts=async()=>{

    const res=await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPosts(res.data.slice(0,10));
}
  return (
    <div className="post-list">
      {posts.length > 0 ?
        posts.map((post) => {
          return <PostItem post={post} key={post.id} />;
        })
        : null // posts 배열의 길이가 0보다 크지 않으면 null을 렌더링하거나, 대체할 다른 요소를 렌더링할 수 있습니다.
      }
    </div>
  );
    }  