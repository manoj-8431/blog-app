import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Create(){
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const navigate = useNavigate();

    const hanldeSubmit = (e) => {
        e.preventDefault();

        const blog = {
        title,
        body,
        author
    };

    
        fetch('http://127.0.0.1:8000/api/blogs/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blog)
        })
        .then(res => res.json())
        .then(data => {
            navigate("/");
            console.log('New Blog created !')
        }); 
    }

    return(
        <>
        <h1 class="font-bold text-2xl">Create a new blog</h1>
        <br/>
        <hr/>
        <br/>

        <form onSubmit={hanldeSubmit}>
            <input class="w-40 h-auto border rounded-md p-1"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            <br/>

            <textarea class="w-70 h-30 border rounded-md mt-4 p-1"
            placeholder="Blog Body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            />
            <br/>

            <input class="w-40 h-auto border rounded-md mt-3 p-1"
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            />
            <br/>

            <button class="hover:cursor-pointer  w-18 h-auto border rounded-md bg-blue-600 text-white font-bold mt-3 active:bg-blue-400 " 
            type="submit">Submit</button>
        </form>
        </>
    );
}

export default Create;