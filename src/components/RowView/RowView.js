import React, { useEffect } from "react";
import "./RowView.css";
import SideBar from "../SideBar/SideBar";
import { Avatar, IconButton } from "@material-ui/core";
// import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import CloseIcon from "@material-ui/icons/Close";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import TextTruncate from "react-text-truncate";
import Modal from "react-modal";
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

Modal.setAppElement('#root');

const RowView = () => {
  // modal experiment here...
  // let subtitle;

  const [modalIsOpen, setIsOpen] = React.useState(false);

  console.log(modalIsOpen);

  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = "#f00";
  // }

  function closeModal() {
    setIsOpen(false);
  }

  // var TextTruncate = require("react-text-truncate");

  const [news, setNews] = useState([]);

  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 4;
  const pagesVisited = pageNumber * usersPerPage;

  const removeItem = (id) => {
    const findingTitle = news.filter((singleNews) => singleNews.id != id);

    return setNews(findingTitle);
  };

  const displayNews = news
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((singleNews) => (
      <div className="row_view" style={{ width: "100%" }} key={singleNews.id}>
        <Avatar
          src={
            singleNews.image ||
            "https://www.first.org/blog/_media/board_SF_2018.jpg"
          }
        />
        <div onClick={openModal} className="card-body">
          <h5 className="card-title">
            <TextTruncate
              line={1}
              element="span"
              truncateText="…"
              text={singleNews.title}
              textTruncateChild={<a href="#"></a>}
            />
          </h5>

          <TextTruncate
            line={1}
            element="span"
            truncateText="…"
            text={singleNews.summary}
            textTruncateChild={<a href="#"></a>}
          />
          <small>{singleNews.published}</small>
        </div>
        {/* <IconButton onClick={() => removeItem(singleNews.id)}> */}
        <IconButton onClick={() => removeItem(singleNews.id)}>
          <CloseIcon color="secondary" />
        </IconButton>
        <Modal
          isOpen={modalIsOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <ModalHeader>Provided link isn't working because of (CSP). That's why I linked with Lorem ipsum website as an alternative</ModalHeader>
          <ModalBody style={{ height: "50vh", width: "95vh" }}>
            <iframe
              title={singleNews.title}
              style={{ height: "50vh", width: "104vh", borderStyle: "none" }}
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

        <div className="col-9">
          {displayNews}
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
  );
};

export default RowView;
