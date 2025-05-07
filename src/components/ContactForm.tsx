import { Grid, Typography, Divider } from '@mui/material';
import CustomTextField from '../elements/customTextField';
import CustomTextArea from '../elements/customTextArea';

const ContactForm = () => (
  <Grid container direction="row" justifyContent="center" alignItems="top" mt="22.2vh">
    <Grid size={12} px={{ xs: 0, md: "420px" }}>
      <Typography textAlign="center" component="p" fontSize={40} fontWeight={300} sx={{ color: '#2F342E', fontFamily: 'Inter' }}>CONTACTANOS</Typography>
      <Typography textAlign="left" component="p" fontSize={14} fontWeight={500} sx={{ color: '#2F342E', fontFamily: 'Inter' }} mt="11.1vh">Qué opción de identifica mejor?</Typography>
      <Grid container direction="row" justifyContent="center" spacing={2} mt="4.4vh">
        <Grid size={12}>
          <CustomTextField name="Soy creador de contenido" />
        </Grid>
        <Grid size={12}>
          <CustomTextField name="Soy dueño de un negocio" />
        </Grid>
      </Grid>
      <Divider sx={{ marginTop: '4.4vh', marginBottom: '4.4vh' }} />
      <Grid container direction="row" justifyContent="center" spacing={2}>
        <Grid size={6}>
          <CustomTextField name="Nombre" />
        </Grid>
        <Grid size={6}>
          <CustomTextField name="Apellido" />
        </Grid>
        <Grid size={12}>
          <CustomTextField name="Email" />
        </Grid>
        <Grid size={12}>
          <CustomTextField name="Usuario de Instagram" />
        </Grid>
        <Grid size={12}>
          <CustomTextField name="Usuario de Tik Tok" />
        </Grid>
        <Grid size={12}>
          <CustomTextField name="Teléfono" />
        </Grid>
        <Grid size={12}>
          <CustomTextArea name="Mensaje" />
        </Grid>
      </Grid>
    </Grid>
  </Grid>
  
);

export default ContactForm;