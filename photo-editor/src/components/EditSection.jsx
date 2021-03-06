import React from "react";
import { useDispatch } from "react-redux";
import { changeFrame } from "../stores";
import "../style/styles.scss";

const EditSection = ({ className }) => {
  const dispatch = useDispatch();
  const handleFrameChange = (e) => {
    dispatch(changeFrame(e.target.value));
  };
  return (
    <section className={`${className} p-4 `}>
      <label className="d-block mb-2">Choose a frame:</label>

      <select className="p-2 w-100" onChange={handleFrameChange}>
        <option value="square">square</option>
        <option value="circle">circle</option>
      </select>
    </section>
  );
};

export default EditSection;
