'use client'
import { getPostIBySearch } from '@/api/getPosts';
import React, { FormEventHandler, useState } from 'react'
import useSWR from 'swr'


const PostSearch = () => {

    const { mutate } = useSWR('posts')
    const [search, setSearch] = useState('')

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        const posts = await getPostIBySearch(search)
        mutate(posts)
    }

    return (
        <form onSubmit={handleSubmit} className='m-2'>
            <input className='bg-slate-100 p-2 rounded-l' type='search' placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)} />
            <button type='submit' className='bg-slate-400 p-2 rounded-r'>Search</button>
        </form>
    )
}

export default PostSearch