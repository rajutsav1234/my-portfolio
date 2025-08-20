import React from "react";
import { Box, Typography, Grid, CardContent, Divider, Chip } from "@mui/material";
import { Work as WorkIcon, Business as BusinessIcon } from "@mui/icons-material";
import "./glow-card.css";
import "./styles.css";

export default function Experience() {
  const experiences = [
    {
      company: "Wells Fargo",
      role: "Software Engineer",
      duration: "July 2023 – Aug 2025 | Bengaluru, India",
      details: [
        "Supported CI/CD pipelines for Fargo chatbot platform using Jenkins, UCD, and Harness.",
        "Automated deployments, release management, and vulnerability remediation.",
        "Worked with GitHub, SonarQube, Checkmarx, Splunk, ELK, and Terraform (GCP).",
        "Early project: full-stack app with ReactJS, Spring Boot, and MariaDB."
      ]
    },
    {
      company: "GE Healthcare",
      role: "EID Intern",
      duration: "May 2022 – Jul 2022 | Bengaluru, India",
      details: [
        "Built SPAs with Angular + Spring Boot microservices.",
        "Automated manual processes and configured server notifications.",
        "Collaborated with team on GitLab."
      ]
    }
  ];

  return (
    <Box id="experience">
      <Typography variant="h4" className="section-title">
        My Experience
      </Typography>

      <Grid container spacing={4} justifyContent="center" style={{ marginTop: "1.5rem" }}>
        {experiences.map((exp, i) => (
          <Grid item xs={12} md={6} key={i}>
            <div className="glow-card">
              <CardContent>
                {/* Header row */}
                <Box display="flex" alignItems="center" mb={1}>
                  <BusinessIcon style={{ marginRight: "0.5rem", fontSize: 28, color: "#06b6d4" }} />
                  <Typography variant="h6" fontWeight="bold">
                    {exp.company}
                  </Typography>
                </Box>

                <Typography variant="subtitle1" className="glow-card-content">
                  {exp.role}
                </Typography>
                <Typography variant="body2" className="glow-card-subtext">
                  {exp.duration}
                </Typography>

                <Divider style={{ margin: "1rem 0", borderColor: "rgba(255,255,255,0.2)" }} />

                {/* Details */}
                <ul style={{ margin: 0, paddingLeft: "1.2rem" }}>
                  {exp.details.map((d, idx) => (
                    <li key={idx}>
                      <Typography variant="body2" className="glow-card-subtext">
                        {d}
                      </Typography>
                    </li>
                  ))}
                </ul>

                {/* Role tag */}
                <Box mt={2}>
                  <Chip
                    icon={<WorkIcon />}
                    label={i === 0 ? "Full-time" : "Internship"}
                    className="glow-card-chip"
                    style={{
                      color: i === 0 ? "#06b6d4" : "#facc15",
                      borderColor: i === 0 ? "#06b6d4" : "#facc15",
                      fontWeight: 500
                    }}
                    variant="outlined"
                  />
                </Box>
              </CardContent>
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
