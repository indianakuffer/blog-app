import React, { useEffect, useState } from 'react'
import Layout from "../../components/shared/Layout/Layout"
import styled from "styled-components"
import { useParams, Redirect } from "react-router-dom"
import { getPost, updatePost } from "../../services/posts"


const EditForm = styled.form`
display: flex;
flex-flow: column;
`

const PostEdit = () => {
  let [saved, setSaved] = useState(false)
  let [details, setDetails] = useState({
    title: "",
    author: "",
    imgUrl: "",
    content: ""
  });

  let params = useParams();

  useEffect(() => {
    const helper = async () => {
      const post = await getPost(params.id);
      setDetails(post);
    };
    helper();
  }, []);

  function handleChange(e) {
    const { name, value } = e.target
    setDetails({
      ...details,
      [name]: value
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const response = await updatePost(params.id, details)
    setSaved(true)
  }

  if (saved) {
    return <Redirect to={`/posts/${params.id}`} />
  }

  return (
    <Layout>
      <EditForm>
        <label htmlFor="title"></label>
        <input type="text" name="title" value={details.title} onChange={handleChange} />
        <label htmlFor="author"></label>
        <input type="text" name="author" value={details.author} onChange={handleChange} />
        <label htmlFor="imgUrl"></label>
        <input type="text" name="imgUrl" value={details.imgUrl} onChange={handleChange} />
        <label htmlFor="content"></label>
        <textarea type="text" name="content" value={details.content} onChange={handleChange} />
        <button onClick={handleSubmit}>Save</button>
      </EditForm>
    </Layout>
  )
}

export default PostEdit
