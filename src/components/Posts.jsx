import { useEffect } from "react";
import { useState } from "react"
import SinglePost from "./SinglePost";
import './Post.css'

export default function Posts (){
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=> res.json())
        .then(data => setPosts(data));
    },[])
    return(

        <>
           <h2>Total Posts : {posts.length}</h2>
           <div className="columns">
            {
                posts.map(post=> <SinglePost post={post} key={post.id}></SinglePost>)
            }

           </div>
        </>
       
    )
}