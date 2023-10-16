import React from "react";
import "./SimilarItemComponent.css";
import SimilarItemBox from "./SimilarItem";

export default function SimilarItem({ item }) {
  return (
    <div className="itemsContainer">
      {item.map((item) => (
        <SimilarItemBox item={item} />
      ))}
    </div>
  );
}
