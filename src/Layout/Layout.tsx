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
      minHeight: '100vh',
      padding: 2,
      backgroundColor: '#f9f9f9', // Fondo claro
    }}
  >
    <Container
      maxWidth={false} // Permite que el ancho sea completamente fluido
      sx={{
        width: '100%',
        maxWidth: '1440px', // Ancho máximo manual para pantallas grandes
        marginX: { xs: 2, sm: 4, md: 6, lg: '100px' }, // Margen lateral dinámico
      }}
    >
      <Nav />
        {children}
      <Footer />
    </Container>
  </Box>
);

export default Layout;