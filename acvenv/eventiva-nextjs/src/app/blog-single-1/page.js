import React from 'react'
import PageHeader from '@/components/common/PageHeader'
import SingleBlog from '@/components/blogs/singleBlog/SingleBlog'
import Subscription from '@/components/subscriptions/SubscriptionOne'

export const metadata = {
    title: 'Eventiva next.js - blog-single-1',
    description: 'Eventiva next.js multipage webdite with next.js and bootstrap',
}
const BlogSingle1 = () => {
    return (
        <>
            <PageHeader currentPage={"Blog"} banner={"banner-1"} isBlogDetails={true} />
            <SingleBlog imgTop={false} />
            <Subscription styleNum={5}/>
        </>
    )
}

export default BlogSingle1