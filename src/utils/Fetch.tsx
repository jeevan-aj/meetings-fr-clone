
import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [data, setData] = useState([]);
  const [categories , setCategories] = useState([])

  const URL = "https://dummyjson.com/product?category=beauty";
  useEffect(() => {
    fetch(URL)
      .then((data) => data.json())
      .then((parseData) => setData(parseData?.products));
  }, []);

  console.log(data)
  useEffect(()=> {
    const filteredData = data?.map(cur => cur?.category).filter(Boolean).filter((cur,idx,arr) =>arr.indexOf(cur) === idx )
    setCategories(filteredData)
  },[])





  return (
    <div key={1} className="text-white flex max-w-2 flex-wrap">
        categories
    </div>
  );
};

export default Fetch;
