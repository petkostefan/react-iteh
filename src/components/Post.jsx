import React from 'react'
import {useState} from "react";

function Post({post, onLike}) {
    const [likeCount, setLikeCount] = useState(0);

    function like(){
        setLikeCount(likeCount+1);
        onLike(post.id)
    }

    return (
        <div className="card shadow border-primary mt-5">
            <div className="card-body">
                <h4 className="card-title">{post.title}</h4>
                <p className="card-text">
                    {post.description}
                </p>
                <div className="d-flex">
                <button onClick={() => like()} className="btn btn-primary">Like</button>
                <p style={{flex:1, textAlign:"right"}}>Likes: <span>{likeCount}</span></p>
                </div>
            </div>
        </div>
    )
}

export default Post
