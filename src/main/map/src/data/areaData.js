import React, { useEffect } from "react";
import { raw } from "mysql";

export default function getAreaData({ data }) {
  const areaData = [];
  const parts = data.split(" ");
  const siDo = parts[0];
  const subAddress = parts.slice(1).join(" ");
  useEffect(() => {
    areaData.push({
      siDo: siDo,
      subAddress: subAddress,
    });
  }, []);

  return areaData;
}
