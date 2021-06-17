import React, { useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";

const ColumnView = () => {
  const [news, setNews] = useState([]);

  console.log(news);

  useEffect(() => {
    fetch(`https://api.first.org/data/v1/news`)
      .then((res) => res.json())
      .then((data) => setNews(data.data));
  }, []);

  return (
    <div className="row mt-5">
      <div className="col-3">
        <SideBar />
      </div>

      {news.map((singleNews) => (
        <div className="col-3">
          <div class="card" style={{ width: "18rem" }}>
            
            <div class="card-body">
              <h5 class="card-title">{singleNews.title}</h5>
              <p class="card-text">
              {singleNews.summary}
              </p>
              <small>{singleNews.published}</small>
            </div>
            <img
              src={
                singleNews.image ||
                "https://www.first.org/blog/_media/board_SF_2018.jpg"
              }
              class="card-img-top"
              alt="..."
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColumnView;
