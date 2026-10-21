import { Container, Row, Col } from "react-bootstrap";
import linkedIn from "../assets/img/nav-icon1.svg";
import github from "../assets/img/git2.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center py-4">
          <Col xs={12} sm={6} className="text-center text-sm-start mb-3 mb-sm-0">
            <p className="footer-copyright">
              © {new Date().getFullYear()} Saiful Islam. All Rights Reserved.
            </p>
          </Col>
          <Col xs={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/saifulislamrifat"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedIn} alt="LinkedIn" />
              </a>
              <a
                href="https://github.com/saaifulislam1"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="GitHub" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
