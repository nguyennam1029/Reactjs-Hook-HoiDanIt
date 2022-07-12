import { useEffect, useState } from "react";
import axios from "axios";
import "./Covid.scss";
const Covid = () => {
  const [dataCovid, setDatacovid] = useState([]);
  useEffect(() => {
    async function getData() {
      let res = await axios.get(
        "https://api.covid19api.com/country/vietnam?from=2022-06-01T00%3A00%3A00Z&to=2022-07-01T00%3A00%3A00Z"
      );
      let data = res && res.data ? res.data : [];
      setDatacovid(data);
    }
    getData();
  }, []);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Số ca</th>
            <th>Phục hồi</th>
            <th>Ko qua khỏi</th>
            <th>Đất nước</th>
          </tr>
        </thead>
        <tbody>
          {dataCovid &&
            dataCovid.length > 0 &&
            dataCovid.map((item) => {
              return (
                <tr key={item.ID}>
                  <td>{item.Confirmed}</td>
                  <td>{item.Recovered}</td>
                  <td>{item.Deaths}</td>
                  <td>{item.Country}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};
export default Covid;
