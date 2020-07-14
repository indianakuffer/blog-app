import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getPost } from "../../services/posts";
import Layout from '../../components/shared/Layout/Layout'

export default function PostDetails() {
  let [details, setDetails] = useState(null);

  let params = useParams();

  useEffect(() => {
    const helper = async () => {
      const post = await getPost(params.id);
      setDetails(post);
    };
    helper();
  }, []);

  return (
    <Layout>
      {details &&
        <>
          <h2>{details.title}</h2>
          <p>Written by: {details.author}</p>
          <img src={details.imgUrl} />
          <p>{details.content}</p>
          <Link to={`/posts/${params.id}/edit`}><button>Edit</button></Link>
        </>}
    </Layout >
  );
}
