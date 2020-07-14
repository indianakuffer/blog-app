import React from 'react'

export default function PostList(props) {

  return (
    <div>
      {props.masterList && props.masterList.map(post => {
        return <>
          {post.title}
        </>
      })}
    </div>
  )
}
