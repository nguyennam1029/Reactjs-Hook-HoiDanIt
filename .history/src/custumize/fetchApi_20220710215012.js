import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
const useFetch = (url, isCovid) => {
  const [data, setDatacovid] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setEroor] = useState(false);
  useEffect(() => {
    try {
      async function fetchData() {
        let res = await axios.get(url);
        let data = res && res.data ? res.data : [];
        if (data && data.length > 0 && isCovid === true) {
          data.map((item) => {
            item.Date = moment(item.Date).format("DD - MM - YYYY");
            return item;
          });
          data = data.reverse();
        }
        setDatacovid(data);
        setLoading(false);
        setEroor(false);
      }
      fetchData();
    } catch (e) {
      setEroor(true);
      setLoading(false);

      // console.e(e.name + ": " + e.message);
    }
  }, [url, isCovid]);

  return {
    data,
    loading,
    error,
  };
};
export default useFetch;
