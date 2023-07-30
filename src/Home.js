import BlogList from "./blogList";
import useFetch from "./useFetch";

const Home = () => {
    const {data: blogs, isPending, error} = useFetch('https://blog-endpoint.onrender.com/blogs');

    return (
        <div className="Home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs = {blogs} title = "All Blogs" />}
        </div>
    );
}

export default Home;