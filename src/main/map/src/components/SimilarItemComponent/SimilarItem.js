import React from "react";
import "./SimilarItemComponent.css";

export default function SimilarItemBox({ item }) {
  return (
    <div className="itemContainer">
      <img
        src={item.image}
        alt="itemImage"
        style={{ width: "200px", height: "120px" }}
      />
      <div className="addressText">{item.address}</div>
      <div className="detailText">{item.text}</div>
    </div>
  );
}
