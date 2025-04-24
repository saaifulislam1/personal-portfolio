import React from "react";

const experiences = [
  {
    company:
      "Ninja Digital Innovation Ltd (A Subsidiary of Brandcloud Inc, Japan)",
    duration: "May 2023 - Present",
    projects: [
      {
        title: "BrandCloud Report Tool Project",
        bullets: [
          "Contributed to developing an internal reporting tool to improve company efficiency.",
          "Built the front end using NextJS with Atomic component structure.",
          "Used GraphQL for efficient data fetching and Prisma for database operations.",
          "Ensured stability through comprehensive E2E testing with Cypress.",
        ],
        tools:
          "NextJs, Next-auth, GraphQL, Prisma, PostgreSQL, Firebase, Cypress, AWS, Docker",
      },
      {
        title: "MoeGuide",
        link: "https://moeguide-app.vercel.app/",
        bullets: [
          "Developed a platform targeted at Chinese tourists visiting Japan, enabling them to hire individuals in traditional Japanese costumes for events, photoshoots, and cultural experiences.",
          "Applied Atomic Design methodology to structure the NextJS application, ensuring scalability and maintainable component architecture.",
          "Built and deployed robust APIs using tRPC for type-safe remote procedure calls.",
          "Implemented user authentication and authorization using next-auth.",
          "Managed data persistence with PostgreSQL and Prisma ORM.",
        ],
        tools:
          "NextJs, Next-auth, tRPC, Prisma, PostgreSQL, Firebase, Vercel, AWS, Docker",
      },

      {
        title: "Raggie",
        link: "https://dev.knowledgelinks.ai/",
        bullets: [
          "Developed an AI-powered RAG system using ChatGPT and custom file upload-based querying.",
          "Implemented a responsive and intuitive UI for better UX.",
          "Used Prisma ORM and PostgreSQL for database interaction and persistence.",
        ],
        tools:
          "NextJs, Next-auth, Prisma, PostgreSQL, AWS, Docker, Nodemailer, S3",
      },
      {
        title: "Suirikyou",
        link: "https://suirikyou.vercel.app/",
        bullets: [
          "Built a full-stack certification platform for the Japan Water Facilities Environmental Hygiene Association.",
          "Implemented role-based access control using NextAuth.js and Prisma Adapter.",
          "Used React Hook Form and Zod for interactive exam validation and forms.",
          "Enabled QR code-based certificate verification and CSV parsing.",
          "Integrated MicroCMS for dynamic content management by non-technical users.",
        ],
        tools:
          "Next.js, Next-auth, Prisma, PostgreSQL, MicroCMS, Tailwind CSS, Stripe, AWS, Zod, React Hook Form, qrcode",
      },
    ],
  },
  {
    company: "Redox Digital Solution",
    duration: "Jan 2023 - Apr 2023",
    projects: [
      {
        bullets: [
          "Transformed Figma designs into pixel-perfect React components.",
          "Built custom WordPress themes using Elementor.",
          "Converted Figma to WordPress ensuring responsive, CMS-integrated sites.",
        ],
        tools: "React, WordPress, Elementor, Figma",
      },
    ],
  },
];

const WorkExperience = () => {
  return (
    <section className="work-section">
      <h2 className="work-title">Work Experience</h2>
      {experiences.map((exp, idx) => (
        <div key={idx} className="work-entry">
          <h3 className="company-name">{exp.company}</h3>
          <p className="work-duration">{exp.duration}</p>
          {exp.projects.map((proj, i) => (
            <div key={i} className="project-details">
              {proj.title && <h4 className="project-title">{proj.title}</h4>}
              {proj.link && (
                <a
                  className="project-link"
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              )}
              <ul className="project-bullets">
                {proj.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>{bullet}</li>
                ))}
              </ul>
              <p className="tools-used">
                <strong>Tools:</strong> {proj.tools}
              </p>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default WorkExperience;
