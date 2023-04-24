import React from "react";
import useStore from "../store/useStore";
import { useParams } from "react-router-dom";

const Receipt = () => {
  const { id } = useParams();
  const receipts = useStore((state) => state.receipts);
  const receipt = receipts.find((recipe) => recipe.id === id);
  console.log(id);

  return <div>{receipt.title}</div>;
};
export default Receipt;
