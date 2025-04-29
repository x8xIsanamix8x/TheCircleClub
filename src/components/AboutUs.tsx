import { Box, Typography } from '@mui/material';

const AboutUs = () => (
  <Box sx={{alignContent:'center', marginTop: 4 }}>
    <Typography component="p" sx={{ color: '#2F342E', fontSize: '16px', fontFamily: 'Inter', fontWeight: '400px', mt: '1vh', alignContent: 'center' }} paragraph>
      ¿Quiénes somos?
    </Typography>
    <Typography variant="body1" paragraph>
      Aquí va el texto descriptivo de lo que es el club, lo que representa y lo que ofrece.
    </Typography>
  </Box>
);

export default AboutUs;