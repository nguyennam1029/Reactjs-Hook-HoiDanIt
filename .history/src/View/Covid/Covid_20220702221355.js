import { useEffect, useState } from "react";
import axios from "axios";
import "./Covid.scss";
const Covid = () => {
  const [dataCovid, setDatacovid] = useState([]);
  useEffect(async () => {
    let res = await axios.get(
      "https://api.covid19api.com/country/vietnam?from=2021-10-01T00%3A00%3A00Z&to=2021-10-20T00%3A00%3A00Z"
    );
    let data = res && res.data ? res.data : [];
    console.log("check ress>>> ", data);
  }, []);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default Covid;
