import { Box, Grid, TextField, Button, Typography } from '@mui/material';

const ContactForm = () => (
  <Box sx={{ marginTop: 4, width: '100%' }}>
    <Typography variant="h4" component="h2" gutterBottom>
      Contáctanos
    </Typography>
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} md={6}>
        <TextField fullWidth label="Nombre" variant="outlined" />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField fullWidth label="Email" variant="outlined" />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth label="Mensaje" variant="outlined" multiline rows={4} />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" fullWidth>
          Enviar
        </Button>
      </Grid>
    </Grid>
  </Box>
);

export default ContactForm;