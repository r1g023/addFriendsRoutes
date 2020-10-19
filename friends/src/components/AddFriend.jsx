import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddFriend = (props) => {
  const [friendData, setFriendData] = useState([]);

  const [friend, addFriend] = useState({
    id: Date.now(),
    name: "",
    age: "",
    email: "",
  });

  const handleChange = (e) => {
    console.log(e.target.name, ":", e.target.value);
    addFriend({
      ...friend,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("api/friends", friend)
      .then((res) => {
        console.log(res, "res inside add FRIEND AXIOS");
        setFriendData(res.data);
        console.log(friendData, "get friend data worked");
      })
      .catch((err) => {
        console.log(err, "error ADDFRIEND in axios");
      });
  };
  return (
    <div className="addFriend">
      <h1>ADD A FRIEND </h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Add Name"
          value={friend.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="age"
          placeholder="Add Age"
          value={friend.age}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Add Email"
          value={friend.email}
          onChange={handleChange}
        />
        <button>ADD FRIEND</button>
      </form>
    </div>
  );
};

export default AddFriend;
