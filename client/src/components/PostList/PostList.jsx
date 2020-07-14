import React from 'react'
import PostCard from "../PostCard/PostCard"

export default function PostList(props) {

  return (
    <div>
      {props.masterList && props.masterList.map(post => {
        return <>
          <PostCard title={post.title} author={post.author} imgUrl={post.imgUrl} id={post._id} />
        </>
      })}
    </div>
  )
}
