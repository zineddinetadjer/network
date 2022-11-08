import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import User from "../user/User";
import "./followerscard.css";
import { getAllUser } from "../../Api/UserRequest";

const FollowersCard = () => {
  const [persons, setPersons] = useState([]);

  const { user } = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      setPersons(data);
      console.log(data);
    };
    fetchPersons();
  }, []);

  return (
    <div className="FollowersCard">
      <h3>People you may know</h3>

      {persons.map((person, id) => {
        if (person._id !== user._id) {
          return <User person={person} key={id} />;
        }
      })}
    </div>
  );
};

export default FollowersCard;
