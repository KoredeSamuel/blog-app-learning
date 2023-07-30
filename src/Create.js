import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        setIsPending(true);
        e.preventDefault();
        const blog = { title, body, author };
        console.log(blog);
        setTimeout(() =>{
            fetch('https://blog-endpoint.onrender.com/blogs', {
                method: 'POST',
                headers : {"Content-Type": "application/json"},
                body : JSON.stringify(blog)
            }).then(() =>{
                console.log("new blog added");
                setIsPending(false);
                // history.go(-1);
                history.push('/');
            })
        }, 1000)
        
    }
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form action="" onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input 
                    type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Blog Title"
                    required
                />
                <label>Blog Body</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)} placeholder="Write Blog"></textarea>
                <label>Blog Author</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="">-- Select --</option>
                    <option value="Samuel">Samuel</option>
                    <option value="Mario">Mario</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled >Adding</button>}
            </form>
        </div>
     );
}
 
export default Create;