import { Box, Typography, Button, Avatar } from '@mui/material';

import Logo from '../assets/Logo/Logo.svg';
import Influencer from '../assets/Header/Persona1.jpg';
import InfluencerII from '../assets/Header/Persona2.jpg';
import InfluencerIII from '../assets/Header/Persona3.jpg';




const Header = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
    <Box sx={{ marginTop: 2 }}>
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        sx={{
          fontFamily: 'Spectral',
          fontWeight: '100px',
          fontSize: '40px',
          lineHeight: '100%',
          letterSpacing: '-2%',
          textAlign: 'center',
          color: '#2F342E',
        }}
      >
        Bienvenido a
      </Typography>
      <img src={Logo} alt="Logo" style={{ width: '200px', height: 'auto' }} />
      <Typography component="p" sx={{ color: '#2F342E', fontSize: '16px', fontFamily: 'Inter', fontWeight: '400px', mt: '1vh' }} paragraph>
        Conectamos las mejores experiencias con los influencers y creadores de contenido más influyentes del panorama nacional e internacional.
      </Typography>
      <Button variant="contained" sx={{ mx:'16px', my:'8px', gap:'10px', borderRadius: '10.6px', fontSize: '12px', fontWeight: '500px', backgroundColor: '#2F342E' }}>
        Registrarse
      </Button>

      {/* Elemento debajo del botón con Avatares */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2 }}>
        {/* Avatares */}
        <Avatar alt="Influencer 1" src={Influencer} sx={{ width: 40, height: 40, marginRight: -2 }} />
        <Avatar alt="Influencer 2" src={InfluencerII} sx={{ width: 40, height: 40, marginRight: -2 }} />
        <Avatar alt="Influencer 3" src={InfluencerIII} sx={{ width: 40, height: 40, marginRight: 1 }} />
        {/* Texto de la cantidad de influencers registrados */}
        <Typography variant="body2" sx={{ color: '#2F342E', fontSize: '16px' }}>
          +500 influencers registrados
        </Typography>
      </Box>
    </Box>
  </Box>
);

export default Header;
