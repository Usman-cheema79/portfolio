import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Container,
  IconButton,
} from "@mui/material";
import {
  LinkedIn,
  WhatsApp,
  Instagram,
  Facebook,
} from "@mui/icons-material"; // Importing icons
import img from "../../assets/images/my_pic-removebg.png";

const messages = [
  "Professional Coder.",
  "Full Stack Developer.",
  "MERN Developer.",
  "Web Developer.",
];
const HeaderSection = () => {
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const typingSpeed = 30;
  const deletingSpeed = 30;
  const pauseBeforeDelete = 1000;
  const pauseBeforeNextMessage = 1000;

  useEffect(() => {
    const handleTyping = () => {
      const currentText = messages[messageIndex];

      if (!isDeleting && charIndex < currentText.length) {
        setCurrentMessage((prev) => prev + currentText.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentMessage((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setMessageIndex((prev) => (prev + 1) % messages.length);
        setTimeout(() => {}, pauseBeforeNextMessage);
      }
    };

    const typingTimeout = setTimeout(
      () => {
        handleTyping();
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, messageIndex]);

  return (
    <Container sx={{ margin: 0, padding: 0 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "100px",
          py: 4,
          marginTop: "30px",
          minHeight: "400px",
          color: darkMode ? "#c1cad5" : "#000000",
          borderRadius: "8px",
        }}
      >
        <Box
          sx={{
            flex: 1,
            textAlign: isSmallScreen ? "center" : "left",
          }}
        >
          <Typography variant="h6" component="h1" gutterBottom>
            Welcome to my world!
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            sx={{ fontWeight: "bold" }}
            gutterBottom
          >
            Hi, I’m <span style={{ color: "#fe024f" }}>Usman Cheema</span>
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            sx={{ fontWeight: "bold" }}
            gutterBottom
          >
            a <span style={{ height: "10px" }}> {currentMessage}</span>
          </Typography>
          <Typography variant="h6" component="p" paragraph>
            I'm a Full Stack Developer specializing in the MERN stack, creating
            dynamic and efficient web applications. I focus on delivering
            scalable solutions and seamless user experiences across both
            front-end and back-end.
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: isSmallScreen ? "center" : "flex-start",
              mt: 2,
            }}
          >
            <IconButton
              href="https://linkedin.com"
              target="_blank"
              aria-label="LinkedIn"
              sx={{ color: "#0077b5" }} // LinkedIn blue
            >
              <LinkedIn />
            </IconButton>

            <IconButton
              href="https://api.whatsapp.com/send?phone=123456789"
              target="_blank"
              aria-label="WhatsApp"
              sx={{ color: "#25D366" }} // WhatsApp green
            >
              <WhatsApp />
            </IconButton>

            <IconButton
              href="https://instagram.com"
              target="_blank"
              aria-label="Instagram"
              sx={{ color: "#E4405F" }} // Instagram pinkish-red
            >
              <Instagram />
            </IconButton>

            <IconButton
              href="mailto:youremail@example.com"
              aria-label="Gmail"
              sx={{ width: 48, height: 48 }} // Adjust size as needed
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="100%"
                height="100%"
              >
                <path fill="#e0e0e0" d="M44 38V10L24 24 4 10v28h40z" />
                <path fill="#ffccbc" d="M4 10l20 14 20-14H4z" />
                <path fill="#e0e0e0" d="M34 38V20l-10 7-10-7v18h20z" />
                <path
                  fill="#d50000"
                  d="M4 10v28l16-11-16-11zm40 0l-16 11 16 11V10z"
                />
              </svg>
            </IconButton>

            <IconButton
              href="https://facebook.com"
              target="_blank"
              aria-label="Facebook"
              sx={{ color: "#4267B2" }} // Facebook blue
            >
              <Facebook />
            </IconButton>
          </Box>
        </Box>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
            borderRadius: "8px",
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        >
          <Box
            component="img"
            alt="Usman Cheema"
            src={img}
            sx={{
              width: "100%",
              maxWidth: { xs: "100%", md: "650px" },
              maxHeight: { xs: "auto", md: "800px" },
              objectFit: "contain",
              backgroundColor: `${theme.palette.divider}`,
              paddingTop: "10px",
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default HeaderSection;
