import React from 'react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getPosts } from '../../services/posts'
import Layout from '../../components/shared/Layout/Layout'
import PostList from '../../components/PostList/PostList'


export default function Home() {
  let [masterList, setMasterList] = useState(null)

  useEffect(() => {
    const helper = async () => {
      const posts = await getPosts()
      setMasterList(posts)
    }
    helper()
  }, [])

  return (
    <Layout>
      {/* add search */}
      {/* add sort */}
      <PostList masterList={masterList} />
    </Layout>
  )
}
