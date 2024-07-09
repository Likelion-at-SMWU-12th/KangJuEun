import React, { useState, useEffect } from "react";
import axios from "axios";

const Blist = () => {
  const [buckets, setBucket] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/bucketList").then((response) => {
      setBucket(response.data);
    });
  }, []);

  return (
    <div>
      <h1>여름 버킷리스트</h1>
      <ul>
        {buckets.map((bucket) => (
          <li key={bucket.id}>
            <h2>{bucket.title}</h2>
            <p>{bucket.detail}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blist;
