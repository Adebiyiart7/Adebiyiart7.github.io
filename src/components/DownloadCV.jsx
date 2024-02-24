import React from "react";
import AppButton from "./reusable/AppButton";
import cv from "../assets/pdf/cv.pdf";

const DownloadCV = () => {
  return (
    <a href={cv} download>
      <AppButton text="Download CV" />
    </a>
  );
};

export default DownloadCV;
