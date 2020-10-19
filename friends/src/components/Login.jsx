import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const [person, setPerson] = useState({ username: "", password: "" });
  const { push } = useHistory();

  const handleChange = (e) => {
    console.log(e.target.name, ":", e.target.value);
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("api/login", person)
      .then((res) => {
        console.log(res, "res inside acios LOGIN");
        window.localStorage.setItem("token", res.data.payload);
        push("/friends-list");
      })
      .catch((err) => {
        console.log(
          err,
          "error in LOGIN in, please enter username and apssword"
        );
      });
  };

  return (
    <div>
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={person.username}
          onChange={handleChange}
          placeholder="username"
        />
        <input
          type="text"
          name="password"
          value={person.password}
          onChange={handleChange}
          placeholder="password"
        />
        <button>Log In</button>
      </form>
    </div>
  );
};

export default Login;
