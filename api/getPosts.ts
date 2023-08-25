export const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 120 } })
    if (!response.ok) throw new Error('wrong Url!')
    return response.json()
}

export const getPostId = async (id: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return response.json()
}