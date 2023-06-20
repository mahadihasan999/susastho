import { useEffect, useState } from "react";
const useDiaseas = (url) => {
  const [diaseas, setDiaseas] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState("");

  useEffect(() => {
    const url = "https://susasto.malihatabassum.com/dashboard";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        seterror(data.error);
        setDiaseas(data[0]);
        setloading(false);
      });
  }, [url]);
  return { diaseas, setDiaseas, loading, error };
};
export default useDiaseas;
