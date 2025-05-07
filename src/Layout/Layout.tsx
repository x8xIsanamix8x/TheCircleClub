import { Box, Container } from '@mui/material';
import { ReactNode } from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',           // Fuerza el 100% del viewport horizontal
      minHeight: '100vh',
      overflowX: 'hidden',      // Previene scroll horizontal si algo se desborda
      px: 0,                    // Elimina padding horizontal
      backgroundImage: `linear-gradient(180deg, #FFFFFF 0%, #FAF9F4 50%, #F5F3EC 100%)`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}
  >
    <Container
      maxWidth={false}
      disableGutters                 // Elimina padding interno de Container
      sx={{
        width: '100%',
        maxWidth: '1440px',
        px: { xs: 2, sm: 4, md: 6, lg: 10 }, // Acolchamiento interno sin causar desbordamiento
      }}
    >
      <Nav />
      {children}
      <Footer />
    </Container>
  </Box>
);

export default Layout;
