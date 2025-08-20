import React from "react";
import { Box, Typography, Avatar, Button, Stack } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
import "./styles.css";

export default function Home() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <Box id="home" className="home-section">
      {/* Intro */}
      <Typography variant="h3" className="home-title" gutterBottom>
        Hi, I’m <span className="highlight">Utsav Raj</span>
      </Typography>

      {/* Typewriter */}
      <Typography variant="h6" className="home-typewriter">
        <Typewriter
          words={[
            "Passionate React & Node.js Creator ⚡",
            "Next.js & Modern Web Specialist ✨",
            "AI & Machine Learning Explorer 🤖",
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </Typography>

      {/* Description */}
      <Typography variant="body1" className="home-desc">
        Passionate about building scalable web apps, modern UI/UX, and exploring intelligent systems. 
        Always eager to learn, innovate, and bring ideas to life 🚀
      </Typography>

      {/* Avatar */}
      <Avatar src="/utsav.jpg" alt="Utsav Raj" className="home-avatar" />

      {/* Buttons */}
      <Stack direction="row" spacing={2} justifyContent="center">
        <Button
          className="btn-primary"
          disableRipple   // 👈 this removes the green ripple
          onClick={() => handleScroll("contact")}
        >
          Get in Touch
        </Button>
                
        <Button
          className="btn-outline"
          disableRipple   // 👈 same here
          href="/resume.pdf"
          download="Utsav_Raj_Resume.pdf"
        >
          My Resume
        </Button>
      </Stack>
    </Box>
  );
}
