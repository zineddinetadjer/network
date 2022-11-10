import React, { useState } from "react";
import "./rightside.css";
import TrendCard from "../trend/TrendCard";
import ShareModal from "../sharemodal/ShareModal";
import Navicons from "../navicon/NavIcons";

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="RightSide">
      <Navicons />

      <TrendCard />

      <button className="button r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default RightSide;
