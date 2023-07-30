import { useParams, useHistory } from "react-router-dom";
// import useFetch from "./useFetch";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogDetail = () => {
    const [blog, setBlog] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const { id } = useParams();
    const history = useHistory();
    // const {data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id);
    useEffect(() =>{
        setTimeout(() =>{
            fetch('http://localhost:8000/blogs/' + id)
                .then(res =>{
                    return res.json();
                })
                .then(data =>{
                    setBlog(data);
                    setIsPending(false);
                })
        }, 1000)
    }, [])

    const handleClick = () =>{
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() =>{
            history.push('/');
        })
    }

    return ( 
        <div className="blog-details">
           {isPending && <div>Loading...</div>}
           {/* {error && <div>{ error }</div>} */}
           {blog && (
            <div className="article">
                <h2>{blog.title}</h2>
                <p className="author">Written by {blog.author}</p>
                <div className="body"><p>{blog.body}</p></div>
            </div>
           )}
           <div className="buttons">
                {blog && <Link to="/">Back</Link>} 
                <button onClick={handleClick}>Delete</button>
           </div>
            
        </div>

     );
}
 
export default BlogDetail;