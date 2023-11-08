import axios from "axios"

interface PostBlogProps {
    content: string,
    title: string
}

// const postBlog = (data: string) => {

// }

const postBlog = async ({ title, content }: PostBlogProps) => {

    const payload = {
        title: title,
        content: content,
        name: 'karthik',
        createdAt: '2023-11-07'
    }

    await axios.post('http://localhost:3002/blogs', payload,)
}

const getAllBlogs = async () => {
    const res = await axios.get('http://localhost:3002/blogs')
    return res;
}

const getBlog = async (id: string | number) => {
    const res = await axios.get(`http://localhost:3002/blogs/${id}`)
    return res.data
}

export {
    postBlog,
    getAllBlogs,
    getBlog
}