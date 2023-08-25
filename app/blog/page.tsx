import { getPosts } from '@/api/getPosts'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
    title: 'Blog | NEXT.JS',

}

const Blog = async () => {

    const posts = await getPosts()
    return (
        <div className='d-flex'>
            <h1 className='container'>Blog</h1>
            <ul className='text-start'>
                {
                    posts.map((post: any) => (
                        <li key={post.id} className='capitalize-first'>
                            <Link href={`/blog/${post.id}`}>{post.title} </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Blog