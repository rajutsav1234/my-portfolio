import React from "react";
import { Box, Typography, Grid, CardContent, Button, Chip } from "@mui/material";
import "./glow-card.css";
import "./styles.css";

export default function Projects() {
  const projects = [
    {
      title: "Blockchain Based Voting System",
      desc: "Secure and transparent voting system using ReactJS, Node.js, Ganache-GUI, and MySQL.",
      tech: ["ReactJS", "Node.js", "Ganache-GUI", "MySQL"],
      link: "https://github.com/rajutsav1234/Blockchain-Based-Voting-System"
    },
    {
      title: "Path Finder & Visualizer",
      desc: "Interactive web app built with Django, Python, HTML, and CSS to visualize pathfinding algorithms.",
      tech: ["Python", "Django", "HTML", "CSS"],
      link: "https://drive.google.com/drive/folders/1t-4MwA6yaHNuQoK7fnKdb1t0Dr-H_ebb?usp=sharing"
    }
  ];

  return (
    <Box id="projects">
      <Typography variant="h4" className="section-title">
        Projects
      </Typography>
      <br />
      <Grid container spacing={3} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <div className="glow-card" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {project.title}
                </Typography>
                <Typography variant="body2" className="glow-card-subtext" paragraph>
                  {project.desc}
                </Typography>

                <Box style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.5rem" }}>
                  {project.tech.map((tech, i) => (
                    <Chip key={i} label={tech} variant="outlined" />
                  ))}
                </Box>

                <Button
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  size="small"
                  style={{ marginTop: "1rem" }}
                >
                  View Code
                </Button>
              </CardContent>
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
