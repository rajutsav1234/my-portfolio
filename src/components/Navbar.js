import React from "react";
import { AppBar, Toolbar, Tabs, Tab, Typography } from "@mui/material";
import "./styles.css";

export default function Navbar() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Education", id: "education" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Achievements", id: "achievements" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <AppBar
      position="sticky"
      className="navbar"
      elevation={0} // removes default shadow
    >
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left side name */}
        <Typography
          variant="h6"
          className="navbar-title"
          onClick={() => handleScroll("home")}
        >
          UTSAV RAJ
        </Typography>

        {/* Right side nav links */}
        <Tabs
          textColor="inherit"
          TabIndicatorProps={{ style: { backgroundColor: "#06b6d4" } }} // cyan underline
          className="navbar-tab"
        >
          {navItems.map((item) => (
            <Tab
              key={item.id}
              label={item.label}
              onClick={() => handleScroll(item.id)}
              className="navbar-link"
            />
          ))}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}
