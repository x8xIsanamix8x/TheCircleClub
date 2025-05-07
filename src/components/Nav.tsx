import { Box, Button, Grid, Typography } from "@mui/material"
import Logo from "../assets/Logo/Logo.svg"

const Nav = () => (
    <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="flex-start"
    mt="2.22vh"
    mb="11.1vh"
    sx={{ px: { xs: 2, md: 6 } }} // padding horizontal global para evitar solape
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

        {/* Secciones (solo en LG en adelante) */}
        <Grid item lg={1}  >
          <Typography fontSize={16} fontWeight={300} sx={{ color: '#292D32', fontFamily: 'Inter' }}>
            Secciones
          </Typography>
        </Grid>
        <Grid item lg={1}  >
          <Typography fontSize={16} fontWeight={300} sx={{ color: '#292D32', fontFamily: 'Inter' }}>
            Registrarse
          </Typography>
        </Grid>
        <Grid item lg={1}  >
          <Typography fontSize={16} fontWeight={300} sx={{ color: '#292D32', fontFamily: 'Inter' }}>
            FAQ'S
          </Typography>
        </Grid>
        <Grid item lg={2}>
          <Typography fontSize={16} fontWeight={300} sx={{ color: '#292D32', fontFamily: 'Inter' }}>
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
)

export default Nav;