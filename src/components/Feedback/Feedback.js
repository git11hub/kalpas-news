import React from "react";
import "./Feedback.css";
import Modal from "react-modal";

import { ModalBody } from "react-bootstrap";
import User from "../User/User";

import { useForm } from "react-hook-form";

const customStyles = {
  content: {
    top: "50%",
    left: "45%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Feedback = () => {
  // hook form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log({data});

  //   let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="feedback">
      <h3>Have a Feedback?</h3>
      <button onClick={openModal} className="btn btn-info">
        We're Listening!
      </button>

      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ModalBody style={{ height: "82vh", width: "120vh" }}>
          <div className="row">
            <div className="col-4">
              <User />
              <Feedback />
            </div>
            <div className="col-8">
              <h3>Thank you so much for taking the time!</h3>
              <small>Please provide the below details!</small>
              <br />
              <br />
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input defaultValue="" {...register("example")} placeholder="First name"/>
                <br />
                <br />
                {/* register your input into the hook by invoking the "register" function */}
                <input defaultValue="" {...register("example")} placeholder="Last name"/>
                <br />
                <br />
                {/* register your input into the hook by invoking the "register" function */}
                <input style={{width:"100%", height:"100px"}} defaultValue="" {...register("example")} placeholder="Enter your full postal address"/>
                <br />
                <br />

                {/* include validation with required or other standard HTML validation rules */}
                <input placeholder="country" {...register("country", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.country && <span style={{color:"red"}}> This field is required</span>}
                <br />
                <br />

                {/* include validation with required or other standard HTML validation rules */}
                <input placeholder="email" type="email" name="email" {...register("email", { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })} />
                {/* errors will return when field validation fails  */}
                {errors.email && <span style={{color:"red"}}> Please enter a valid email</span>}
                <br />
                <br />

                

                {/* include validation with required or other standard HTML validation rules */}
                <input style={{width: "10%", marginRight:"5px"}} placeholder="+91" {...register("number", { required: true })} />
                <input placeholder="Phone Number" {...register("number", { required: true, pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im })} />
                {/* errors will return when field validation fails  */}
                {errors.number && <span style={{color:"red"}}> Please provide valid phone number</span>}
                <br />
                <br />

                <button className="btn btn-success" type="submit">Submit Feedback</button>

              </form>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Feedback;
