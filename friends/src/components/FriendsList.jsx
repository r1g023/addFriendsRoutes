import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import AddFriend from "./AddFriend";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("api/friends")
      .then((res) => {
        console.log(res, "res inside get friends axios");
        setFriends(res.data);
      })
      .catch((err) => {
        console.log(err, "error in getting FRIENDSLIST from axios");
      });
  }, []);

  return (
    <div className="friends">
      <AddFriend />
      {friends.map((item) => (
        <div className="friendCard" key={item.id}>
          <h1>Name: {item.name}</h1>
          <h2>Age: {item.age}</h2>
          <h3>Email: {item.email}</h3>
        </div>
      ))}
    </div>
  );
};

export default FriendsList;
