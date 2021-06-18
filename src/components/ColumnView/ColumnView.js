import { Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import SideBar from "../SideBar/SideBar";

//testing area from here
import "./ColumnView.css";
import { IconButton } from "@material-ui/core";
// import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import CloseIcon from "@material-ui/icons/Close";
import ReactPaginate from "react-paginate";
import TextTruncate from "react-text-truncate";

import { ModalBody } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ColumnView = () => {
  // Modal things here...
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  // var TextTruncate = require("react-text-truncate");

  const [news, setNews] = useState([]);

  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 6;
  const pagesVisited = pageNumber * usersPerPage;

  const removeItem = (id) => {
    const findingTitle = news.filter((singleNews) => singleNews.id != id);

    return setNews(findingTitle);
  };

  const displayNews = news
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((singleNews) => (
      <div onClick={openModal}
        className="column_view col-4 p-4 mb-4"
        // style={{ width: "33%" }}
        key={singleNews.id}
      >
        <div className="">
          <h5 onClick={openModal} className="d-flex cursor_pointer">
            <TextTruncate
              line={2}
              element="span"
              truncateText="…"
              text={singleNews.title}
              textTruncateChild={<a href="#"></a>}
            />
            <IconButton onClick={() => removeItem(singleNews.id)}>
              <CloseIcon color="secondary" />
            </IconButton>
          </h5>

          <TextTruncate
            className="cursor_pointer"
            line={1}
            element="span"
            truncateText="…"
            text={
              singleNews.summary ||
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
            textTruncateChild={<a href="#"></a>}
          />
          <p>
            <small>{singleNews.published}</small>
          </p>
        </div>
        <img
          onClick={openModal}
          className="cursor_pointer"
          src={
            singleNews.image ||
            "https://www.first.org/blog/_media/board_SF_2018.jpg"
          }
          alt="news_image"
        />
        <Modal
          isOpen={modalIsOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <ModalHeader>
            Provided link isn't working because of (CSP). That's why I linked
            with Lorem ipsum website as an alternative
          </ModalHeader>
          <ModalBody style={{ height: "50vh", width: "95vh" }}>
            <iframe
              title={singleNews.title}
              style={{ height: "100%", width: "100%", borderStyle: "none" }}
              src="https://www.lipsum.com/" // Provided link isn't working because of (CSP). That's why I linked with Lorem ipsum website as an alternative
            />
          </ModalBody>
        </Modal>
      </div>
    ));

  useEffect(() => {
    fetch(`https://api.first.org/data/v1/news`)
      .then((res) => res.json())
      .then((data) => setNews(data.data));
  }, []);

  const pageCount = Math.ceil(news.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-3">
          <SideBar />
        </div>

        <div className="col-9 container">
          <div className="d-flex row">{displayNews}</div>
          <div className="pagination">
            <ReactPaginate
              previousLabel={"previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBtn"}
              previousLinkClassName={"previousBtn"}
              nextLinkClassName={"nextBtn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
              pageRangeDisplayed={"showThree"}
            />
          </div>
        </div>
      </div>
    </div>

    // <div className="container">
    //   <Row className="mt-5">
    //     <Col>
    //       <SideBar />
    //     </Col>

    //     <Col>
    //       {news.map((singleNews) => (
    //         <div className="" style={{ width: "18rem" }}>
    //           <div className="card-body">
    //             <h5 className="card-title">{singleNews.title}</h5>
    //             <p className="card-text">{singleNews.summary}</p>
    //             <small>{singleNews.published}</small>
    //           </div>
    //           <img
    //             src={
    //               singleNews.image ||
    //               "https://www.first.org/blog/_media/board_SF_2018.jpg"
    //             }
    //             class="card-img-top"
    //             alt="..."
    //           />
    //         </div>
    //       ))}
    //     </Col>
    //   </Row>
    // </div>
  );
};

export default ColumnView;
