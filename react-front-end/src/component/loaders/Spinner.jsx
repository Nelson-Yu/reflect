import React from "react";
import ReactLoading from "react-loading";

const Spinner = ({ type, color }) => (
  <ReactLoading type={"spinningBubbles"} color={"orange"} height={"%80"} />
);

export default Spinner;
