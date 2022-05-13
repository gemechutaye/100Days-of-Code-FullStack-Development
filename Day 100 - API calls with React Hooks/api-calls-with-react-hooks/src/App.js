import axios from "axios";
import React, { useState } from "react";

function App() {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUserList = () => {
    setLoading(true);
    axios.get("https://reqres.in/api/users").then((res) => {
      setUserList(res.data.data);
      setLoading(false);
    });
  };

  return (
    <div className="container App">
      <h4 className="d-inline-block">Clue Mediator</h4>
      <button
        className="btn btn-info float-right"
        onClick={getUserList}
        disabled={loading}
      >
        {loading ? "Loading..." : "Get User List"}
      </button>
      <div className="clearfix"></div>

      <table className="table mt-3">
        <thead className="thead-dark">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((x, i) => (
            <tr key={i}>
              <td>{x.first_name}</td>
              <td>{x.last_name}</td>
              <td>{x.email}</td>
              <td>
                <img src={x.avatar} width="50" height="50" alt={x.avatar} />
              </td>
            </tr>
          ))}
          {userList.length === 0 && (
            <tr>
              <td className="text-center" colSpan="4">
                <b>No data found to display.</b>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
