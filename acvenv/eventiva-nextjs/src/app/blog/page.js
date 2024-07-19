import React from 'react'
import PageHeader from '@/components/common/PageHeader'
import BlogTwo from '@/components/blogs/BlogTwo'
import Subscription from '@/components/subscriptions/SubscriptionOne'

export const metadata = {
  title: 'Eventiva next.js - blog',
  description: 'Eventiva next.js multipage webdite with next.js and bootstrap',
}
const Blog = () => {
  return (
    <>
      <PageHeader currentPage={"Blog"} banner={"banner-1"} />
      <BlogTwo />
      <Subscription styleNum={1}/>
    </>
  )
}

export default Blog