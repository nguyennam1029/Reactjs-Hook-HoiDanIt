import { useParams, Link } from "react-router-dom";

const blogDetail = () => {
  const params = useParams();

  return (
    <>
      <h2>Chi tiết khóa học: {params.courseId}</h2>
      {/* <Link to="/courses" className="btn btn-outline-primary">
        Xem danh sách khóa học
      </Link> */}
    </>
  );
};

export default blogDetail;
