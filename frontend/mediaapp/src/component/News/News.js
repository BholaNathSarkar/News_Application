import React, { useState, useEffect } from "react";
import "./News.css";
import axios from "axios";
const baseURL = "http://127.0.0.1:4000/news/getnews";

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseURL);
        const ndata = response.data;
        setNewsData(ndata.data.slice(0, 3));
        setLoading(false); // Data fetching is complete
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(newsData);

  return (
    <div className="news">
      {newsData.map((news, index) => (
        <div key={index} className={`news-section section-${index + 1}`}>
          <h5>{news.title}</h5>
          <p>{news.description}</p>
        </div>
      ))}
    </div>
  );
};

export default News;
