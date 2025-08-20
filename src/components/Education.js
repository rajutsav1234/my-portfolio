import React from "react";
import { Box, Typography, Grid, CardContent } from "@mui/material";
import "./glow-card.css";
import "./styles.css";

export default function Education() {
  const educationData = [
    {
      year: "2019 – 2023",
      degree: "Bachelor of Technology – Computer Science and Engineering",
      institution: "Motilal Nehru National Institute of Technology Allahabad, Prayagraj, Uttar Pradesh",
      details: "Focused on Full-Stack Development, Machine Learning, and DSA."
    },
    {
      year: "2017 – 2018",
      degree: "Grade XII (CBSE)",
      institution: "Delhi Model Public School, Patna, Bihar",
      details: "Majored in Physics, Chemistry, and Mathematics."
    },
    {
      year: "2015 – 2016",
      degree: "Grade X (CBSE)",
      institution: "Dr. G L Dutta DAV Public School, Patna, Bihar",
      details: "Strong foundation in mathematics and logical problem solving."
    }
  ];

  return (
    <Box id="education">
      <Typography variant="h4" className="section-title">
        Education
      </Typography>

      <Grid container spacing={4} direction="column" alignItems="center" style={{ position: "relative", marginTop: "2rem" }}>
        {/* Timeline line */}
        <Box className="timeline-line" />

        {educationData.map((edu, index) => (
          <Grid
            item
            xs={12}
            key={index}
            style={{
              display: "flex",
              justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
              width: "100%",
              position: "relative"
            }}
          >
            {/* Dot */}
            <Box className="timeline-dot" />

            {/* Card */}
            <div className="glow-card" style={{ width: "45%" }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {edu.degree}
                </Typography>
                <Typography variant="subtitle2" className="glow-card-subtext" gutterBottom>
                  {edu.institution}
                </Typography>
                <Typography variant="body2" style={{ color: "#06b6d4", fontWeight: "bold", marginBottom: "0.5rem" }}>
                  {edu.year}
                </Typography>
                <Typography variant="body2" className="glow-card-subtext">
                  {edu.details}
                </Typography>
              </CardContent>
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
