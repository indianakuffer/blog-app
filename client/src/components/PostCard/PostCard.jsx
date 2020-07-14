import React from 'react'
import { Link } from 'react-router-dom'

const PostCard = (props) => {
  return (

    <Link to={`/posts/${props.id}`} >
      <h3>{props.title}</h3>
      <p>{props.author}</p>
      <img src={props.imgUrl} />
    </Link >

  )
}

export default PostCard
