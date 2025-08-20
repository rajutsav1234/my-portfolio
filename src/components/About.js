import React from "react";
import { Box, Typography, CardContent } from "@mui/material";
import "./glow-card.css";
import "./styles.css";

export default function About() {
  const skills = [
    {
      title: "Frontend Developer",
      desc: "I enjoy building responsive, user-friendly interfaces with React and Angular, focusing on performance and accessibility."
    },
    {
      title: "Backend Developer",
      desc: "I develop reliable APIs and services using Spring Boot and Node.js, with an emphasis on scalability and clean architecture."
    },
    {
      title: "Full-Stack Engineer",
      desc: "I bring together frontend and backend skills to deliver complete, maintainable web applications from start to finish."
    },
    {
      title: "DevOps & CI/CD",
      desc: "I automate deployments using Jenkins, UCD, and Harness, ensuring smooth delivery pipelines and reliable releases."
    },
  ];

  return (
    <Box id="about">
      <Typography variant="h4" className="section-title">
        Hi, I'm Utsav. Nice to meet you.
      </Typography>
      <br />
      <Typography className="section-subtitle">
        I’m an enthusiastic developer who loves turning ideas into functional, clean, and engaging web applications. 
        From crafting interactive front-ends with React/Angular to building secure back-ends with Spring Boot/Node.js, 
        I enjoy the full journey of development. I’m passionate about writing code that’s maintainable, performant, and user-focused.
      </Typography>

      <Box
        style={{
          display: "flex",
          gap: "1.5rem",
          justifyContent: "center",
          flexWrap: "wrap"
        }}
      >
        {skills.map((s, i) => (
          <div
            key={i}
            className="glow-card"
            style={{ flex: "0 0 260px", height: 230 }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {s.title}
              </Typography>
              <Typography className="glow-card-subtext">
                {s.desc}
              </Typography>
            </CardContent>
          </div>
        ))}
      </Box>
    </Box>
  );
}
