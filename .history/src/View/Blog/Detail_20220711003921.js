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

  return (
    <>
      <span style={{ color: "red" }} onClick={handleBackPage}>
        Quay Lại
      </span>
      <div className="item">
        {dataBlogDetail && (
          <>
            <h2>{dataBlogDetail.title}</h2>
            <p>{dataBlogDetail.body}</p>
          </>
        )}
      </div>
    </>
  );
};

export default BlogDetail;
