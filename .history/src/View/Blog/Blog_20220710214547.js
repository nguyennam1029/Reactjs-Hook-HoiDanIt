import "./blog.scss";
import useFetch from "../../custumize/fetchApi";
const Blog = () => {
  const {
    data: dataBlogs,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/posts", false);
  console.log("blogs ", dataBlogs);
  return <>{<div className="blog-list"></div>}</>;
};
export default Blog;
