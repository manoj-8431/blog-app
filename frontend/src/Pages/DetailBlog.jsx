import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function DetailedBlog(){
    const {id} = useParams();
    const [blogs, setBlogs] = useState(null);

    const API_URL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        fetch(`${API_URL}/api/blogs/${id}/`)
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[]);

    return (
        <>
        <h1 class="font-bold text-2xl" >Complete Detailed Blog</h1>
        <br/>
        <hr/>
        <br/>
        {!blogs && <p>Loading...</p>}

        {blogs && (
            <>
            <h2 class="text-2xl font-bold">Title: {blogs.title}</h2>
            <p class="font-semibold text-lg mt-2">Body: {blogs.body}</p>
            <p class=" text-md">Post By: {blogs.author}</p>
            </>
        )}

        </>
    );
}

export default DetailedBlog;