import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditBlog(){
    const {id} = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/blogs/${id}/`)
        .then(res => res.json())
        .then(data => {
            setTitle(data.title);
            setBody(data.body);
            setAuthor(data.author);
        });
    },[id]);

    const handleUpdate = (e) => {
        e.preventDefault();

        const updatedBlog = {
            title,
            body,
            author
        };

        fetch(`http://127.0.0.1:8000/api/blogs/${id}/`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedBlog)
        })
        .then(res => res.json())
        .then(data => {
            console.log('Blog Updated.')
            navigate("/")
        });
    };

    return(
        <>
        <h1 class="font-bold text-2xl">Edit / Update Blog</h1>
        <br/>
        <hr/>
        <br/>
        
        <form onSubmit={handleUpdate}>
            <input class="w-40 h-auto border rounded-md p-1"
            type="text"
            placeholder="New Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            <br/>

            <textarea class="w-70 h-30 border rounded-md mt-4 p-1"
            placeholder="New Body"
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
            type="submit">Update</button>

        </form>
        </>
    );
}

export default EditBlog;