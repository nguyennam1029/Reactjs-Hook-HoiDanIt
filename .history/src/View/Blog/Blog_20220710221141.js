import "./blog.scss";
import useFetch from "../../custumize/fetchApi";
import { NavLink } from "react-router-dom";

const Blog = () => {
  const {
    data: dataBlogs,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/posts", false);
  let newData = [];
  if (dataBlogs && dataBlogs.length > 0) {
    newData = dataBlogs.slice(0, 12);
  }
  console.log("check dataBlogs: ", newData);
  return (
    <>
      {
        <div className="blog-list">
          {newData.map((item, index) => {
            return (
              <>
                <div className="blog-item">
                  <h3>{item.body}</h3>
                  <p>{item.title}</p>
                  <NavLink to={`/blog/${item.id}`}>Detail</NavLink>
                </div>
              </>
            );
          })}
        </div>
      }
    </>
  );
};
export default Blog;
