import React, { useState, useEffect } from "react";
import "./followerscard.css";
import { useSelector } from "react-redux";
import { getAllUser } from "../../Api/UserRequest";
import User from "../user/User";
import FollowersModal from "../followersModal/FollowersModal";

const FollowersCard = ({ location }) => {
  const [persons, setPersons] = useState([]);
  const [modalOpened, setModalOpened] = useState(false);
  const { user } = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      setPersons(data);
    };
    fetchPersons();
  }, []);

  return (
    <div className="FollowersCard">
      <h3>People you may know</h3>
      {persons.map((person, id) => {
        if (person._id !== user._id) return <User person={person} key={id} />;
      })}
      {!location ? (
        <b>
          <span onClick={() => setModalOpened(true)}>Show more</span>
        </b>
      ) : (
        ""
      )}

      <FollowersModal
        modalOpened={modalOpened}
        setModalOpened={setModalOpened}
      />
    </div>
  );
};

export default FollowersCard;
