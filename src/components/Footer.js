import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import linkedIn from "../assets/img/nav-icon1.svg";
import github from "../assets/img/git2.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Col size={12} sm={6} className="text-center pt-4 text-sm-end">
          <div className="social-icon">
            <a
              href="https://www.linkedin.com/in/saifulislamrifat"
              target="_blank"
            >
              <img src={linkedIn} alt="linkedIn" />
            </a>
            <a href="https://github.com/saaifulislam1" target="_blank">
              <img src={github} alt="github" />
            </a>
          </div>
          {/* <p className=" w-full text-center">
            Copyright 2025. All Rights Reserved by Saiful Islam Rifat
          </p> */}
        </Col>
      </Container>
    </footer>
  );
};
