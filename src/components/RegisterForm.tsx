import { Grid, Button, Typography, Divider } from '@mui/material';
import CustomTextField from '../elements/customTextField';
import CustomSelectField from '../elements/customSelectField';
import CustomTextArea from '../elements/customTextArea';
import CustomHideTextField from '../elements/customHideTextField';

const RegisterForm = () => (
  <Grid container direction="row" justifyContent="center" alignItems="top" mt="22.2vh">
    <Grid size={12} px="315px">
      <Divider />
      <Grid container direction="row" justifyContent="space-between" mt="4.4vh">
        <Grid size={4}>
          <Typography textAlign="left" component="p" fontSize={40} fontWeight={300} sx={{ color: '#2F342E', fontFamily: 'Inter' }}>Registrarse</Typography>
        </Grid>
        <Grid size={8}>
          <Grid container direction="column">
            <Grid size={12} mb="2.22vh" sx={{ backgroundColor: '#FFF', borderRadius: '7px' }} py="1.4vh">
              <Typography textAlign="center" component="p" fontSize={16} fontWeight={500} sx={{ color: '#2F342E', fontFamily: 'Inter' }}>Registrarse</Typography>
            </Grid>
            <Grid size={12} mb="2.22vh">
              <CustomTextField name="Nombre" />
            </Grid>
            <Grid size={12} mb="2.22vh">
              <CustomSelectField name="Tipo de Servicio" />
            </Grid>
            <Grid size={12} mb="2.22vh">
              <CustomSelectField name="Estilo de Servicio" />
            </Grid>
            <Grid size={12} mb="2.22vh">
              <CustomSelectField name="Ubicación" />
            </Grid>
            <Grid size={12} mb="2.22vh">
              <CustomTextArea name="Descripción del Negocio" />
            </Grid>
            <Grid size={12} mb="2.22vh">
              <CustomTextField name="Email" />
            </Grid>
            <Grid size={12} mb="2.22vh">
              <CustomTextField name="Teléfono" />
            </Grid>
            <Grid size={12} mb="2.22vh">
              <CustomHideTextField name="Crear Contraseña" />
            </Grid>
            <Grid size={12} mb="2.22vh">
              <CustomHideTextField name="Confirmar Contraseña" />
            </Grid>
            <Grid size={12} mb="2.22vh">
              <Button variant='contained' fullWidth sx={{ backgroundColor: '#2F342E', color: '#FFFFFF', fontSize: '16px' }}>Aceptar</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
  
);

export default RegisterForm;