import React from "react";
import AppButton from "./reusable/AppButton";
import cv from "../assets/pdf/_ADEEYO_JOSEPH_ADEBIYI_RESUME.pdf";

const DownloadCV = () => {
  return (
    <a href={cv} target="_blank">
      <AppButton text="Download Resume" />
    </a>
  );
};

export default DownloadCV;
