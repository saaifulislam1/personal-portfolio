import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "./ProjectShowcase.css";

import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

const projects = [
  {
    title: "Portfolio Website",
    images: [projImg1, projImg2, projImg3],
    liveLink: "https://your-portfolio-link.com",
    description:
      "A modern, responsive portfolio site built with React and deployed on Netlify.",
  },
  {
    title: "Portfolio Website",
    images: [projImg1, projImg2, projImg3],
    liveLink: "https://your-portfolio-link.com",
    description:
      "A modern, responsive portfolio site built with React and deployed on Netlify.",
  },
  {
    title: "Portfolio Website",
    images: [projImg1, projImg2, projImg3],
    liveLink: "https://your-portfolio-link.com",
    description:
      "A modern, responsive portfolio site built with React and deployed on Netlify.",
  },
  {
    title: "Portfolio Website",
    images: [projImg1, projImg2, projImg3],
    liveLink: "https://your-portfolio-link.com",
    description:
      "A modern, responsive portfolio site built with React and deployed on Netlify.",
  },
];

export default function Projects() {
  return (
    <section className="project-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="carousel-wrapper">
              <Carousel
                showThumbs={false}
                infiniteLoop
                autoPlay
                showStatus={false}
                renderArrowPrev={(clickHandler, hasPrev) =>
                  hasPrev && (
                    <button className="arrow-prev" onClick={clickHandler}>
                      ‹
                    </button>
                  )
                }
                renderArrowNext={(clickHandler, hasNext) =>
                  hasNext && (
                    <button className="arrow-next" onClick={clickHandler}>
                      ›
                    </button>
                  )
                }
              >
                {project.images.map((img, i) => (
                  <div key={i} className="carousel-image-wrapper">
                    <img src={img} alt={`Project ${index} Slide ${i}`} />
                    <div className="image-overlay"></div>
                  </div>
                ))}
              </Carousel>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              {project.description && (
                <p className="project-desc">{project.description}</p>
              )}
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="live-btn"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
