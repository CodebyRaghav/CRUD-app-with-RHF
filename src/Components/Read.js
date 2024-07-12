import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//useEffect ek hook hai jo hit hoga jab bhi aapke data me koi bhi change hoga

const Read = () => {
  const [data, setData] = useState([]); //Creating an empty array for storing the data which is recieved
  const [tabledark, setTabledark] = useState(""); //For Dark mode
  //Reading the Data from the API-Why it is getting Data two times?
  function getData() {
    axios
      .get(
        "https://666a85eb7013419182cf988b.mockapi.io/crud-operations/crud-youtube"
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data); //Storing the recieved data for showing it on the page.
      });
  }

  //Handling Delete
  function handleDelete(id) {
    axios
      .delete(
        `https://666a85eb7013419182cf988b.mockapi.io/crud-operations/crud-youtube/${id}`
      )
      .then(() => {
        getData();
      });
  }
  //This is for showing the data to the local storage if we click on edit button for particular id.
  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };
  useEffect(() => {
    getData();
  }, []); //This wil hit every time when we change the data on our site. Also if we pass data in this empty array [data] it continue to call infinite times. So pass it empty it, so this function is called only one time.

  return (
    <>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          onClick={() => {
            if (tabledark === "table-dark") {
              setTabledark("");
            } else {
              setTabledark("table-dark");
            }
          }}
        />
        <label className="form-check-label">Dark Mode</label>
      </div>
      <div className="d-flex justify-content-between">
        <h2>Read Operation</h2>
        <Link to="/">
          <button className="btn btn-secondary">Create New Field</button>
        </Link>
      </div>
      <table className={`table ${tabledark}`}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>

        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>

                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>
                    <Link to="/update">
                      <button
                        className="btn btn-success"
                        onClick={() => {
                          setToLocalStorage(
                            eachData.id,
                            eachData.name,
                            eachData.email
                          );
                        }}
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(eachData.id)} //Why we use arrow function in this?
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};

export default Read;
