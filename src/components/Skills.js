import docker from "../assets/img/docker.png";
import next from "../assets/img/next.png";
import nodejs from "../assets/img/nodejs.png";
import react from "../assets/img/react.png";
import express from "../assets/img/express.png";
import aws from "../assets/img/aws.png";
import mongodb from "../assets/img/mongodb.png";
import mysql from "../assets/img/mysql.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1200, min: 992 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 992, min: 576 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 className="work-title" data-aos="fade-down">
                <span className="title-highlight">Skills</span>
              </h2>
              <p>
                I bring a strong command of modern web development tools and
                frameworks, with a focus on building performant, maintainable,
                and scalable applications. Below are the key technologies and
                tools I work with regularly:
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={react} alt="React JS" className="img-tech" />
                  <h5>React JS</h5>
                </div>
                <div className="item">
                  <img src={next} alt="Next JS" className="img-tech" />
                  <h5>Next JS</h5>
                </div>
                <div className="item">
                  <img src={express} alt="Express JS" className="img-tech" />
                  <h5>Express JS</h5>
                </div>
                <div className="item">
                  <img src={nodejs} alt="Node JS" className="img-tech" />
                  <h5>Node JS</h5>
                </div>
                <div className="item">
                  <img src={mongodb} alt="MongoDB" className="img-tech" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={mysql} alt="MySQL" className="img-tech" />
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <img src={docker} alt="Docker" className="img-tech" />
                  <h5>Docker</h5>
                </div>
                <div className="item">
                  <img src={aws} alt="AWS" className="img-tech" />
                  <h5>AWS</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" aria-hidden="true" />
    </section>
  );
};
