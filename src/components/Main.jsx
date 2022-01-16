import React from 'react'
import Post from './Post'

function Main({posts, onLike}) {
    return (
        <div className="d-flex container flex-column">
        {posts.map((post) => (
          <Post key={post.id} post={post} onLike={onLike} />
        ))}
        </div>
    )
}

export default Main
