import React, { useState, useEffect } from "react";
import "./Sports.css";
import axios from "axios";
import Wrapper from "../../Wrapper/Wrapper";

const baseURL = "http://127.0.0.1:4000/news/getsportsnews";

const Sports = () => {
  const [editedNews, setEditedNews] = useState(null);
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        const ndata = response.data;
        // console.log(ndata);
        setNewsData(ndata.data);
        setLoading(false); // Data fetching is complete
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // The empty dependency array ensures that this effect runs only once on component mount

  const handleEdit = (news) => {
    setEditedNews(news);
  };

  const handleDelete = (newsId) => {
    setEditedNews(null);
    setNewsData((prevNews) => prevNews.filter((news) => news.id !== newsId));
  };

  return (
    <>
      <Wrapper>
        <h2>Sports News</h2>
        <div className="center-news-body">
          <table className="news-table">
            <thead>
              <tr>
                <th>News Title</th>
                <th>Description</th>
                <th>Publish Date</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                // Show a loading indicator while data is being fetched
                <tr>
                  <td colSpan="5">Loading...</td>
                </tr>
              ) : (
                // Data has been fetched, map over newsData to render the table rows
                newsData.map((news) => (
                  <tr key={news.id}>
                    <td>{news.title}</td>
                    <td>{news.description}</td>
                    <td>{news.publishDate}</td>
                    <td>
                      <button onClick={() => handleEdit(news)}>Edit</button>
                    </td>
                    <td>
                      <button onClick={() => handleDelete(news.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Wrapper>
    </>
  );
};

export default Sports;
