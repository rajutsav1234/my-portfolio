import React from "react";
import { Box, Typography, Grid, CardContent } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import CloudIcon from "@mui/icons-material/Cloud";
import BuildIcon from "@mui/icons-material/Build";
import SecurityIcon from "@mui/icons-material/Security";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./glow-card.css";
import "./styles.css";

export default function Skills() {
  const skills = [
    { title: "Frontend Development", desc: "React, Angular, HTML, CSS, JavaScript", icon: <CodeIcon color="primary" /> },
    { title: "Backend Development", desc: "Node.js, Spring Boot, APIs", icon: <StorageIcon color="secondary" /> },
    { title: "DevOps", desc: "Jenkins, GitHub, Artifactory, CI/CD", icon: <BuildIcon sx={{ color: "#f59e0b" }} /> },
    { title: "Testing & Monitoring", desc: "Postman, SonarQube, Checkmarx, Blackduck, Splunk, ELK", icon: <SecurityIcon sx={{ color: "#e11d48" }} /> },
    { title: "Cloud & Infra", desc: "GCP basics, Terraform", icon: <CloudIcon sx={{ color: "#2563eb" }} /> },
    { title: "Version Control", desc: "Git, GitHub", icon: <GitHubIcon sx={{ color: "#ffffff" }} /> }
  ];

  return (
    <Box id="skills">
      <Typography variant="h4" className="section-title">
        Skills
      </Typography>

      <Grid container spacing={3} justifyContent="center" style={{ marginTop: "1.5rem" }}>
        {skills.map((skill, index) => (
          <Grid item key={index}>
            <div className="glow-card" style={{ width: 260, height: 230, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <CardContent style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <Box style={{ fontSize: 40, marginBottom: "0.5rem" }}>
                  {skill.icon}
                </Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {skill.title}
                </Typography>
                <Typography variant="body2" className="glow-card-subtext">
                  {skill.desc}
                </Typography>
              </CardContent>
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
