import { useEffect, useState } from "react";
const useBMI = (url) => {
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState("");
  console.log(data);
  useEffect(() => {
    const url = `bmi.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        seterror(data.error);
        setData(data);
        setloading(false);
      });
  }, [url]);
  return { data, setData, loading, error };
};
export default useBMI;
