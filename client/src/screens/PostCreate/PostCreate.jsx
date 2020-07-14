import React, { useEffect, useState } from 'react'
import Layout from '../../components/shared/Layout/Layout'
import styled from 'styled-components'
import { createPost } from '../../services/posts'
import { Redirect } from 'react-router-dom'

const CreateForm = styled.form`
  display: flex;
  flex-flow: column;
`

const PostCreate = () => {
  let [created, setCreated] = useState(false)
  let [post, setPost] = useState({
    title: '',
    author: '',
    imgUrl: '',
    content: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setPost({
      ...post,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await createPost(post)
    setCreated(true)
  }

  if (created) {
    return <Redirect to='/' />
  }

  return (
    <Layout>
      <CreateForm>
        <label htmlFor='title'></label>
        <input name='title' placeholder="title" value={post.title} onChange={handleChange}></input>
        <label htmlFor='author'></label>
        <input name='author' placeholder="author" value={post.author} onChange={handleChange}></input>
        <label htmlFor='imgUrl'></label>
        <input name='imgUrl' placeholder="image url" value={post.imgUrl} onChange={handleChange}></input>
        <label htmlFor='content'></label>
        <input name='content' placeholder="content" value={post.content} onChange={handleChange}></input>
        <button onClick={handleSubmit}>Create</button>
      </CreateForm>
    </Layout>
  )
}

export default PostCreate
