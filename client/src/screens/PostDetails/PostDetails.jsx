import React, { useEffect, useState } from "react";
import { useParams, Link, Redirect } from "react-router-dom";
import { getPost, deletePost } from "../../services/posts";
import Layout from '../../components/shared/Layout/Layout'

export default function PostDetails() {
  let [details, setDetails] = useState(null);
  let [deleted, setDeleted] = useState(false)

  let params = useParams();

  useEffect(() => {
    const helper = async () => {
      const post = await getPost(params.id);
      setDetails(post);
    };
    helper();
  }, []);

  const deletePost = async (e) => {
    e.preventDefault()
    const response = await deletePost(params.id)
  }

  if (deleted) {
    return <Redirect to='/' />
  }

  return (
    <Layout>
      {details &&
        <>
          <h2>{details.title}</h2>
          <p>Written by: {details.author}</p>
          <img src={details.imgUrl} />
          <p>{details.content}</p>
          <Link to={`/posts/${params.id}/edit`}><button>Edit</button></Link>
          <button onClick={deletePost}>Delete</button>
        </>}
    </Layout >
  );
}
