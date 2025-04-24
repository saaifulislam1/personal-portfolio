import React from "react";
import { FileArrowDown } from "react-bootstrap-icons"; // optional icon

const DownloadCV = () => {
  return (
    <section className="download-cv-section" id="resume">
      <h2>Download My CV</h2>
      <a href="/saiful-islam-cv.pdf" download className="download-btn">
        <FileArrowDown size={22} style={{ marginRight: "8px" }} />
        Get Resume
      </a>
    </section>
  );
};

export default DownloadCV;
