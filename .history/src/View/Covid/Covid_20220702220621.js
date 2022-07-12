import { useEffect, useState } from "react";
import axios from "axios";
import "./Covid.scss";
const Covid = () => {
  let [dataCovid, setDatacovid] = useState();
  useEffect(async () => {
    const res = await axios.get(
      "https://api.covid19api.com/country/vietnam?from=2021-10-01T00%3A00%3A00Z&to=2021-10-20T00%3A00%3A00Z"
    );
    console.log("check ress>>> ", res);
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
