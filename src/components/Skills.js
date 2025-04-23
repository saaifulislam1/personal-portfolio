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
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I bring a strong command of modern web development tools and
                frameworks, with a focus on building performant, <br></br>
                maintainable, and scalable applications. Below are the key
                technologies and tools I work with regularly
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={react} alt="Image" className="img-tech" />
                  <h5>React JS</h5>
                </div>
                <div className="item">
                  <img src={next} alt="Image" className="img-tech" />
                  <h5>Next JS</h5>
                </div>
                <div className="item">
                  <img src={express} alt="Image" className="img-tech" />
                  <h5>Express JS</h5>
                </div>
                <div className="item">
                  <img src={nodejs} alt="Image" className="img-tech" />
                  <h5>Node JS</h5>
                </div>
                <div className="item">
                  <img src={mongodb} alt="Image" className="img-tech" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={mysql} alt="Image" className="img-tech" />
                  <h5>MySql</h5>
                </div>
                <div className="item">
                  <img src={docker} alt="Image" className="img-tech" />
                  <h5>Docker</h5>
                </div>
                <div className="item">
                  <img src={aws} alt="Image" className="img-tech" />
                  <h5>AWS</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
