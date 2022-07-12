import { useEffect, useState } from "react";
import useFetch from "../../custumize/fetchApi";
import "./Covid.scss";
const Covid = () => {
  const [dataCovid, setDatacovid] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setEroor] = useState(false);
  useEffect(() => {
    // try {
    //   async function fetchData() {
    //     let res = await axios.get(
    //       "https://api.covid19api.com/country/vietnam?from=2022-06-01T00%3A00%3A00Z&to=2022-07-01T00%3A00%3A00Z"
    //     );
    //     let data = res && res.data ? res.data : [];
    //     if (data && data.length > 0) {
    //       data.map((item) => {
    //         item.Date = moment(item.Date).format("DD - MM - YYYY");
    //         return item;
    //       });
    //       data = data.reverse();
    //     }
    //     setDatacovid(data);
    //     setLoading(false);
    //     setEroor(false);
    //   }
    //   fetchData();
    // } catch (e) {
    //   setEroor(true);
    //   setLoading(false);
    // }
    const {
      data: dataCovid,
      loading,
      error,
    } = useFetch(
      "https://api.covid19api.com/country/vietnam?from=2022-06-01T00%3A00%3A00Z&to=2022-07-01T00%3A00%3A00Z"
    );
  }, []);
  return (
    <>
      <h1>Thống kê covid 19</h1>
      <table>
        <thead>
          <tr>
            <th>Ngày</th>
            <th>Số ca</th>
            <th>Phục hồi</th>
            <th>Ko qua khỏi</th>
            <th>Đất nước</th>
          </tr>
        </thead>
        <tbody>
          {loading === false &&
            error === false &&
            dataCovid &&
            dataCovid.length > 0 &&
            dataCovid.map((item) => {
              return (
                <tr key={item.ID}>
                  <td>{item.Date}</td>
                  <td>{item.Confirmed}</td>
                  <td>{item.Recovered}</td>
                  <td>{item.Deaths}</td>
                  <td>{item.Country}</td>
                </tr>
              );
            })}
          {loading === true && (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                Loading...
              </td>
            </tr>
          )}
          {error === true && (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                Dữ liệu chưa phản hồi - vui lòng quay lại sau...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};
export default Covid;