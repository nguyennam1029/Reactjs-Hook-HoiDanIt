import { Routes, Route, useParams } from "react-router-dom";

const blogDetail = () => {
  let { id } = useParams();

  return (
    <>
      <h2>Chi tiết khóa học: {id}</h2>
      {/* <Link to="/courses" className="btn btn-outline-primary">
        Xem danh sách khóa học
      </Link> */}
    </>
  );
};

export default blogDetail;
