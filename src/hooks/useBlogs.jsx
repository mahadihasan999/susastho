import { useEffect, useState } from "react";
const useBlogs = (url) => {
  const [blog, setBlog] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState("");
  console.log(blog);
  useEffect(() => {
    const url = "https://susasto.malihatabassum.com/blogs";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        seterror(data.error);
        setBlog(data.blogs);
        setloading(false);
      });
  }, [url]);
  return { blog, setBlog, loading, error };
};
export default useBlogs;
