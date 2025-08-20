import React from "react";
import {
  Box,
  Typography,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import StarIcon from "@mui/icons-material/Star";
import SchoolIcon from "@mui/icons-material/School";
import "./glow-card.css";
import "./styles.css";

export default function Achievements() {
  const achievements = [
    { text: "Got Rank – 4135 in Round D 2021 in Google’s Kickstart.", icon: <EmojiEventsIcon sx={{ color: "#facc15" }} /> },
    { text: "Codeforces highest rating: 1256 (Pupil), CodeChef highest rating: 1825 (4★).", icon: <StarIcon sx={{ color: "#f97316" }} /> },
    { text: "Qualified JEE Mains 2019 and JEE Advanced 2019.", icon: <SchoolIcon sx={{ color: "#3b82f6" }} /> },
    { text: "Qualified KVPY 2016 conducted by IISc Bangalore.", icon: <SchoolIcon sx={{ color: "#22c55e" }} /> },
  ];

  return (
    <Box id="achievements" style={{ textAlign: "center" }}>
      <Typography variant="h4" className="section-title">
        Achievements
      </Typography>

      <br />

      <div className="glow-card" style={{ maxWidth: 800, margin: "0 auto" }}>
        <CardContent>
          <List>
            {achievements.map((item, i) => (
              <ListItem key={i} className="glow-list-item" alignItems="flex-start">
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="body1" className="glow-card-content">
                      {item.text}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </div>
    </Box>
  );
}
