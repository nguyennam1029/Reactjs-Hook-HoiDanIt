import "./blog.scss";
import useFetch from "../../custumize/fetchApi";
const Blog = () => {
  const {
    data: dataBlogs,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/posts", false);
  let newData = [];
  if (dataBlogs && dataBlogs > 0) {
    newData = dataBlogs.slice(0, 11);
  }
  console.log("check dataBlogs: ", newData);
  return <>{<div className="blog-list"></div>}</>;
};
export default Blog;
