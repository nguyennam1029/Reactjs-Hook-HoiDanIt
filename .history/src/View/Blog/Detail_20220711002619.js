import { Routes, Route, useParams, useNavigate } from "react-router-dom";

const BlogDetail = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const handleBackPage = () => {
    navigate("/blog");
  };
  return (
    <>
      <span style={{ color: "red" }} onClick={handleBackPage}>
        Quay Lại
      </span>
      <h2>Chi tiết khóa học: {id}</h2>
      {/* <Link to="/courses" className="btn btn-outline-primary">
        Xem danh sách khóa học
      </Link> */}
    </>
  );
};

export default BlogDetail;
