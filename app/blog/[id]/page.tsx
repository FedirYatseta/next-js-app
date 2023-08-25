import { getPostId } from '@/api/getPosts'
import { Metadata } from 'next'
import React from 'react'

type Props = {
    params: {
        id: string
    }
}



export const generateMetadata = async ({ params: { id } }: Props): Promise<Metadata> => {
    const post = await getPostId(id)
    return {
        title: post.title
    }
}

const Post = async ({ params: { id } }: Props) => {

    const post = await getPostId(id)
    console.log('post', post)
    return (
        <>
            <h2 className='text-4xl my-3'>{post.title}</h2>
            <p className='mb-3 text-gray-500 "dark:text-gray-400"'>{post.body}</p>
        </>
    )
}

export default Post