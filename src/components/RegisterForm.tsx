import { Box, Grid, TextField, Button, Typography } from '@mui/material';

const RegisterForm = () => (
  <Box sx={{ marginTop: 4, width: '100%' }}>
    <Typography variant="h4" component="h2" gutterBottom>
      Registrarse
    </Typography>
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} md={6}>
        <TextField fullWidth label="Usuario de Instagram" variant="outlined" />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField fullWidth label="Usuario de TikTok" variant="outlined" />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField fullWidth label="Correo Electrónico" variant="outlined" />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField fullWidth label="Teléfono" variant="outlined" />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" fullWidth>
          Aceptar
        </Button>
      </Grid>
    </Grid>
  </Box>
);

export default RegisterForm;