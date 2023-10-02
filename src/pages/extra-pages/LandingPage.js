import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const LandingPage = () => {
  return (
    <Container>
      <Typography variant="h1" align="center" gutterBottom>
        Welcome to Our Website
      </Typography>
      <Typography variant="h5" align="center" paragraph>
        Discover amazing things and connect with passionate people.
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Start your journey today!
      </Typography>
    </Container>
  );
}

export default LandingPage;
