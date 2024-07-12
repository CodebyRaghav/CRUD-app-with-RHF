import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); //Why is useNavigate used? Bcz we want to go on read page after updating the fields

  //Local server ka data show/get karvane ke liye.
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  //Updated data by user handled by this.
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(
        `https://666a85eb7013419182cf988b.mockapi.io/crud-operations/crud-youtube/${id}`,
        {
          name: name,
          email: email,
        }
      )
      .then(() => {
        navigate("/read");
      });
  };

  // We pass the value attribute for getting the data in update form
  return (
    <>
      <h2>Update</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)} //This line of code is store the input email data in the useState.
            value={email}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary mx-2"
          onClick={handleUpdate}
        >
          Update
        </button>
        <Link to="/read">
          <button className="btn btn-secondary mx-2">Back</button>
        </Link>
      </form>
    </>
  );
};

export default Update;
