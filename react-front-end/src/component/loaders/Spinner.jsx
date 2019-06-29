import React from "react";
import ReactLoading from "react-loading";

const Spinner = ({ type, color }) => (
  <ReactLoading type={"spinningBubbles"} color={"orange"} height={"%20"} />
);

export default Spinner;
