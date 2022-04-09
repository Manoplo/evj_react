import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { prevStep } from "../../app/slices/checkoutSlice";

const StepTwo = (props) => {
  const dispatch = useDispatch();

  const handlePrevStep = () => {
    dispatch(prevStep());
  };

  return (
    <>
      <div>StepTwo</div>
      <button onClick={handlePrevStep}>Previo</button>
    </>
  );
};

export default StepTwo;
