import React from "react";
import { Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useStore from "../../hooks/useStore";

const SendEmail = () => {
  const { emailCollection } = useStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    const isSendEmail = window.confirm("Are you sure?");
    if (isSendEmail) {
      fetch("http://localhost:5000/sendEmail", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.messageId) {
            alert("Message send successfully");
            reset();
          }
        });
    }
  };

  return (
    <Container className="my-4">
      <h1 className="text-center my-4">
        <span className="border-bottom border-2 border-info">Send Email</span>
      </h1>
      <form className="form-control" onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input
          placeholder="Email"
          defaultValue={`${emailCollection.join(",")}`}
          className="form-control"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-danger">This field is required</span>
        )}
        <br />
        <label>Subject</label>
        <input
          placeholder="Subject"
          className="form-control"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <span className="text-danger">This field is required</span>
        )}
        <br />
        <label>Message</label>
        <textarea
          placeholder="Your Message"
          rows="5"
          className="form-control"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <span className="text-danger">This field is required</span>
        )}

        <br />
        <Button variant="primary" type="submit">
          <i className="fas fa-paper-plane"></i> Send
        </Button>
      </form>
      <div className="text-center my-4">
        <Link to="/">
          <h4>Back to home</h4>
        </Link>
      </div>
    </Container>
  );
};

export default SendEmail;
