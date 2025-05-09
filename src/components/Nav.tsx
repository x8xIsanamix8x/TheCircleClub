import { Box, Button, Grid, Typography } from "@mui/material";
import Logo from "../assets/Logo/Logo.svg";

interface NavProps {
  onScrollTo: {
    about: () => void;
    register: () => void;
    faq: () => void;
    contact: () => void;
  };
}

const Nav = ({ onScrollTo }: NavProps) => (
  <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="flex-start"
    mt="2.22vh"
    mb="11.1vh"
    sx={{ px: { xs: 2, md: 6 } }}
  >
    <Grid item xs={12} sx={{ maxWidth: '1440px' }}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        wrap="wrap"
      >
        {/* Logo */}
        <Grid item xs={6} lg={2}>
          <Box
            component="img"
            alt="logo"
            src={Logo}
            sx={{ width: '101px', height: '12px' }}
          />
        </Grid>

        {/* Enlaces de navegación */}
        <Grid item lg={1}>
          <Typography
            fontSize={16}
            fontWeight={300}
            sx={{ color: '#292D32', fontFamily: 'Inter', cursor: 'pointer' }}
            onClick={onScrollTo.about}
          >
            Secciones
          </Typography>
        </Grid>
        <Grid item lg={1}>
          <Typography
            fontSize={16}
            fontWeight={300}
            sx={{ color: '#292D32', fontFamily: 'Inter', cursor: 'pointer' }}
            onClick={onScrollTo.register}
          >
            Registrarse
          </Typography>
        </Grid>
        <Grid item lg={1}>
          <Typography
            fontSize={16}
            fontWeight={300}
            sx={{ color: '#292D32', fontFamily: 'Inter', cursor: 'pointer' }}
            onClick={onScrollTo.faq}
          >
            FAQ'S
          </Typography>
        </Grid>
        <Grid item lg={2}>
          <Typography
            fontSize={16}
            fontWeight={300}
            sx={{ color: '#292D32', fontFamily: 'Inter', cursor: 'pointer' }}
            onClick={onScrollTo.contact}
          >
            Contacto
          </Typography>
        </Grid>

        {/* Botón App */}
        <Grid item xs={6} lg={2}>
          <Button
            variant="contained"
            sx={{
              width: '100%',
              borderRadius: '10.6px',
              fontSize: '12px',
              fontWeight: 500,
              backgroundColor: '#2F342E',
              textTransform: 'none',
            }}
          >
            Descargar app
          </Button>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default Nav;
