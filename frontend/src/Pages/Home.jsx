import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

function Home(){
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/blogs/')
        .then(res => res.json())
        .then(data => {
            setBlogs(data);
            console.log('Blogs Fetched.')
        })
        .catch((err) => console.log(err))
    },[]);

    const handleDelete = (id) => {
        fetch(`http://127.0.0.1:8000/api/blogs/${id}/`, {
            method: 'DELETE',
        })
        .then(() => {
            const newBlogs = blogs.filter((blog) => blog.id !== id)
            setBlogs(newBlogs);
        });
    };

    return(
        <>
        <h1 class="font-bold text-2xl" >Latest Blogs</h1>
        <p class="font-semibold" >Create & Manage your Blogs.</p>
        <br/>
        {blogs.map((blog) => (
            <div key={blog.id}>
                <h2 class="text-xl font-bold"><span class="font-bold text-blue-500 text-xl">Title:</span> {blog.title}</h2>
                <p class="font-semibold text-md">@{blog.author}</p>

                <Link to={`/blog/${blog.id}`}>Read full blog</Link><br/>
                <button class="hover:cursor-pointer  w-18 h-auto border rounded-md bg-blue-600 text-white font-bold mt-1 active:bg-blue-400" 
                onClick={() => handleDelete(blog.id)}>Delete</button><br/>

                <button class="hover:cursor-pointer  w-18 h-auto border rounded-md bg-blue-600 text-white font-bold mt-1 active:bg-blue-400" >
                    <Link to={`/edit/${blog.id}`}>Edit</Link>
                </button>
                <hr class="mt-1"/>
                <br/>
            </div>
        ))}
        </>
    );
}

export default Home;