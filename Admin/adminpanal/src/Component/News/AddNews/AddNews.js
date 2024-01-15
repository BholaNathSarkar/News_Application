import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../Wrapper/Wrapper.js";
// import { useNavigate } from "react-router-dom";

function AddNews() {
  const navigate = useNavigate();
  // State to manage form inputs
  const [news, setNews] = useState({
    title: "",
    description: "",
    url: "",
    publishDate: "",
  });

  // Function to handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNews({ ...news, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("News data:", news);

    try {
      const responce = await fetch("http://localhost:4000/news/addnews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(news),
      });
      if (responce.ok) {
        const responceData = await responce.json();
        console.log("Server responce:", responceData);
      } else {
        console.error("Server returned an error:", responce.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }

    // Clear the form after submission
    setNews({
      title: "",
      description: "",
      url: "",
      publishDate: "",
    });
  };

  return (
    <Wrapper>
      <div className="text-center">
        <h2>ADD New</h2>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={news.title}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={news.description}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="url" className="form-label">
              URL
            </label>
            <input
              type="text"
              className="form-control"
              id="url"
              name="url"
              value={news.url}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="publishDate" className="form-label">
              Publish Date
            </label>
            <input
              type="date"
              className="form-control"
              id="publishDate"
              name="publishDate"
              value={news.publishDate}
              onChange={handleInputChange}
            />
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary mx-2">
              Add
            </button>
            <button
              type="button"
              className="btn btn-secondary mx-2"
              onClick={() => setNews({})}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
}

export default AddNews;
