import React from "react";
import { Box, Typography, Grid, CardContent, Button } from "@mui/material";
import "./glow-card.css";
import "./styles.css";

export default function Certifications() {
  const certifications = [
    {
      title: "Cloud Digital Leader Certification",
      issuer: "Google Cloud",
      expiry: "Expires December 2026",
      link: "https://www.credential.net/c97d72ce-3e3e-4c43-ab17-9aee9a4b027d#acc.oLVa7qem"
    },
    {
      title: "Associate Cloud Engineer Certification",
      issuer: "Google Cloud",
      expiry: "Expires October 2027",
      link: "https://www.credly.com/badges/6b843238-6a3e-491a-a1fb-31a72895bf83/public_url"
    }
  ];

  return (
    <Box id="certifications">
      <Typography variant="h4" className="section-title">
        Certifications
      </Typography>

      <br />

      <Grid container spacing={3} justifyContent="center">
        {certifications.map((cert, i) => (
          <Grid item xs={12} md={6} key={i}>
            <div className="glow-card">
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {cert.title}
                </Typography>
                <Typography className="glow-card-subtext" gutterBottom>
                  {cert.issuer}
                </Typography>
                <Typography variant="body2" style={{ color: "rgba(255,255,255,0.6)" }} gutterBottom>
                  {cert.expiry}
                </Typography>
                <Button
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  size="small"
                  style={{ marginTop: "0.5rem" }}
                >
                  View Certificate
                </Button>
              </CardContent>
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
