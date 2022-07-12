import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import useFetch from "../../custumize/fetchApi";
const BlogDetail = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const handleBackPage = () => {
    navigate("/blog");
  };
  const {
    data: dataBlogDetail,
    loading,
    error,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false);
  console.log(dataBlogDetail);
  return (
    <>
      <span style={{ color: "red" }} onClick={handleBackPage}>
        Quay Lại
      </span>
      <h2>Chi tiết khóa học: {id.title}</h2>
      {/* <Link to="/courses" className="btn btn-outline-primary">
        Xem danh sách khóa học
      </Link> */}
    </>
  );
};

export default BlogDetail;
