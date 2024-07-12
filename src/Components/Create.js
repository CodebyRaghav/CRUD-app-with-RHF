import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history = useNavigate(); //For redirecting user to the read router after clicking on submit

  const header = { "Acess-Control-Allow-Origin": "*" }; //Why we define header?
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Clicked");
    axios
      .post(
        // axios is to read data from api or to api
        "https://666a85eb7013419182cf988b.mockapi.io/crud-operations/crud-youtube",
        { name: name, email: email, header }
      )
      .then(() => {
        history("/read"); //after passing the data is page par redirect kar do, user ko.
      });
  };
  return (
    <>
      <div className="d-flex justify-content-between">
        <h2>Create</h2>
        <Link to="/read">
          <button className="btn btn-primary">Show Data</button>
        </Link>
      </div>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)} //This line of code is store the input email data in the useState.
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;
