import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import moe1 from "../assets/img/projects/moe1.png";
import moe2 from "../assets/img/projects/moe2.png";

import rag1 from "../assets/img/projects/rag1.png";
import rag2 from "../assets/img/projects/rag2.png";
import rag3 from "../assets/img/projects/rag3.png";

import suri1 from "../assets/img/projects/suri1.png";
import suri2 from "../assets/img/projects/suri2.png";
import suri3 from "../assets/img/projects/suri3.png";

const projects = [
  {
    title: "Moeguide",
    images: [moe1, moe2],
    liveLink: "https://moeguide-app.vercel.app/",
    description:
      "Developed a platform targeted at Chinese tourists visiting Japan, enabling them to hire individuals in traditional Japanese costumes for events, photoshoots, and cultural experiences.",
  },
  {
    title: "RAG AI",
    images: [rag1, rag2, rag3],
    liveLink: "https://dev.knowledgelinks.ai/channels",
    description:
      "Developed an AI-powered application leveraging the ChatGPT model and API to create a Retrieval Augmented Generation (RAG) system.",
  },
  {
    title: "Suirikyou",
    images: [suri1, suri2, suri3],
    liveLink: "https://suirikyou.vercel.app/",
    description:
      "Developed a full-stack certification platform for the Japan Water Facilities Environmental Hygiene Association, enabling vendors to register, log in, take online exams, and obtain a Facility Hygiene Management Compliance Certificate.",
  },
];

export default function Projects() {
  return (
    <section className="project-section" id="projects">
      <div className="container">
        <h2 className="work-title" data-aos="fade-down">
          <span className="title-highlight">Selected Projects</span>
        </h2>
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
                      <button
                        type="button"
                        className="arrow-prev"
                        onClick={clickHandler}
                        aria-label="Previous slide"
                      >
                        ‹
                      </button>
                    )
                  }
                  renderArrowNext={(clickHandler, hasNext) =>
                    hasNext && (
                      <button
                        type="button"
                        className="arrow-next"
                        onClick={clickHandler}
                        aria-label="Next slide"
                      >
                        ›
                      </button>
                    )
                  }
                >
                  {project.images.map((img, i) => (
                    <div key={i} className="carousel-image-wrapper">
                      <img
                        src={img}
                        alt={`${project.title} screenshot ${i + 1}`}
                      />
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
                  rel="noreferrer"
                  className="live-btn"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
