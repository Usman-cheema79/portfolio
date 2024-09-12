import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, useTheme, useMediaQuery, Container } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import img from "../../assets/images/my_pic-removebg.png";

const messages = [
  'Professional Coder.',
  'Full Stack Developer.',
  'MERN Developer.',
];

const HeaderSection = () => {
  const theme = useTheme();
  const darkMode = theme.palette.mode === 'dark';
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md')); 
  const [currentMessage, setCurrentMessage] = useState('');
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

    const typingTimeout = setTimeout(() => {
      handleTyping();
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, messageIndex]);

  return (
    <Container sx={{ margin: 0, padding: 0 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: isSmallScreen ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: "100px",
          py: 4,
          marginTop: "30px",
          minHeight: '400px',
          color: darkMode ? '#c1cad5' : '#000000',
          borderRadius: '8px',
        }}
      >
        <Box
          sx={{
            flex: 1,
            textAlign: isSmallScreen ? 'center' : 'left',
          }}
        >
          <Typography variant="h6" component="h1" gutterBottom>
            Welcome to my world!
          </Typography>
          <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold' }} gutterBottom>
            Hi, I’m <span style={{ color: '#fe024f' }}>Usman Cheema</span>
          </Typography>
          <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold' }} gutterBottom>
            a <span style={{height:"10px"}}> {currentMessage}</span>
          </Typography>
          <Typography variant="h6" component="p" paragraph>
            I use animation as a third dimension by which to simplify experiences and guiding through each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.
          </Typography>
          <Button
            variant="contained"
            color={darkMode ? 'secondary' : 'primary'}
            startIcon={<SearchIcon />}
            sx={{ mt: 2 }}
          >
            Find with me
          </Button>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '8px',
            maxWidth: '100%',  
            maxHeight: '100%', 
          }}
        >
          <Box
            component="img"
            alt="Usman Cheema"
            src={img}
            sx={{
              width: '100%',             
              maxWidth: { xs: '100%', md: '650px' }, 
              maxHeight: { xs: 'auto', md: '800px' }, 
              objectFit: 'contain',      
              border: `5px solid ${theme.palette.divider}`,
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default HeaderSection;
