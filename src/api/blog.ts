import axios from "axios"

const postBlog = (data: string) => {

}

const updateBlog = async (data: string) => {

    const payload = {
        title: 'Test post',
        content: data,
        name: 'karthik',
        createdAt: '2023-11-07'
    }

    await axios.post('http://localhost:3002/blogs', payload,)
}

const getAllBlogs = async () => {
    const res = axios.get('http://localhost:3002/blogs')
    return res;
}

export {
    postBlog,
    updateBlog,
    getAllBlogs
}