import "./blog.scss";
import useFetch from "../../custumize/fetchApi";
const Blog = () => {
  const {
    data: dataBlogs,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/posts", false);
  let dataBlog = [];
  if (dataBlogs && dataBlogs > 0) {
    dataBlog = dataBlogs.slice(0, 11);
  }
  console.log("check dataBlogs: ", dataBlog);
  return <>{<div className="blog-list"></div>}</>;
};
export default Blog;
