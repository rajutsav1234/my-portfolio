import React from "react";
import { Box, Typography, Button, Stack, TextField, CardContent } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";
import "./glow-card.css";
import "./styles.css";

export default function Contact() {
  return (
    <Box id="contact" style={{ textAlign: "center" }}>
      <Typography variant="h4" className="section-title">
        Get in Touch
      </Typography>
      <Typography className="section-subtitle" style={{ marginBottom: "2rem" }}>
        Feel free to reach out via email, socials, or send me a quick message below.
      </Typography>

      <div className="glow-card" style={{ maxWidth: 700, margin: "0 auto" }}>
        <CardContent>
          {/* Social Buttons */}
          <Stack direction="row" justifyContent="center" spacing={2} flexWrap="wrap" style={{ marginBottom: "2rem" }}>
            <Button startIcon={<Email />} href="mailto:rajutsav1234@gmail.com" className="btn-primary">
              Email
            </Button>

            <Button
              startIcon={<GitHub />}
              href="https://github.com/rajutsav1234"
              target="_blank"
              className="btn-outline"
            >
              GitHub
            </Button>

            <Button
              startIcon={<LinkedIn />}
              href="https://www.linkedin.com/in/utsav-raj-8399227b/"
              target="_blank"
              className="btn-outline"
              style={{ borderColor: "#0a66c2", color: "#0a66c2" }}
            >
              LinkedIn
            </Button>
          </Stack>

          {/* Contact Form */}
          <Box component="form" style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1rem" }}>
            <TextField label="Your Name" variant="outlined" fullWidth />
            <TextField label="Your Email" type="email" variant="outlined" fullWidth />
            <TextField label="Message" multiline rows={4} variant="outlined" fullWidth />
            <Button className="btn-primary" style={{ alignSelf: "center", marginTop: "1rem" }}>
              Send Message
            </Button>
          </Box>
        </CardContent>
      </div>
    </Box>
  );
}
