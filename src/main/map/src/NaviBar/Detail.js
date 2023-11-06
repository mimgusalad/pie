import React, { useEffect, useState } from "react";
import { getDatabyNo } from "../data/Data";
import { Data } from "../data/Data";
import { useParams } from "react-router-dom";
import MapPage from "./MapPage";

function Detail() {
  const { id } = useParams();
  const [detailData, setDetailData] = useState();

  return (
    // <div>
    //     방 상세보기 표시
    // </div>
    // <MapPage />
    <MapPage id={id} />
  );
}

export default Detail;
