import { Grid, Typography, Divider } from '@mui/material';
import CustomTextField from '../elements/customTextField';
import CustomTextArea from '../elements/customTextArea';
import CustomCheckboxField from '../elements/CustomCheckboxField';
import { useState } from 'react';
import CustomPhoneField from '../elements/custonPhoneField';

const ContactForm = () => {

  const [acceptTerms, setAcceptTerms] = useState(false);

  const [formData, setFormData] = useState({
    telefono: '',
    codigoArea: '',
    instagram: '',
    tiktok: '',  
    contrasena: '',
    confirmarContrasena: '',
    nombre: '',
    apellido: '',
    email: '',
    ubicacion: '',
    followers: '',
    mensaje: '',
    profilePhotoUrl: null as File | null, 
    fechaNacimiento: null as Date | null,
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Grid container direction="row" justifyContent="center" alignItems="top" mt="22.2vh">
      <Grid size={12} px={{ xs: 0, md: "420px" }}>
        <Typography textAlign="center" component="p" fontSize={40} fontWeight={300} sx={{ color: '#2F342E', fontFamily: 'Inter' }}>CONTACTÁNOS</Typography>
        <Typography textAlign="left" component="p" fontSize={14} fontWeight={500} sx={{ color: '#2F342E', fontFamily: 'Inter' }} mt="11.1vh">¿Qué opción de identifica mejor?</Typography>
        <Grid container direction="row" justifyContent="center" spacing={2} mt="4.4vh">
          <Grid size={12}>
            <CustomCheckboxField
              label="Soy creador de contenido"
              checked={acceptTerms}
              onChange={setAcceptTerms}
            />
          </Grid>
          <Grid size={12}>
            <CustomCheckboxField
              label="Soy dueño de un negocio"
              checked={acceptTerms}
              onChange={setAcceptTerms}
            />
          </Grid>
        </Grid>
        <Divider sx={{ marginTop: '4.4vh', marginBottom: '4.4vh' }} />
        <Grid container direction="row" justifyContent="center" spacing={2}>
          <Grid size={6}>
            <CustomTextField name="Nombre" value={formData.nombre} onChange={val => handleChange('nombre', val)} />
          </Grid>
          <Grid size={6}>
            <CustomTextField name="Apellido" value={formData.apellido} onChange={val => handleChange('apellido', val)} />
          </Grid>
          <Grid size={12}>
            <CustomTextField name="Email" value={formData.email} onChange={val => handleChange('email', val)} />
          </Grid>
          <Grid size={12} mb="2.22vh">
            <CustomTextField name="Usuario de Instagram" value={formData.instagram} onChange={val => handleChange('instagram', val)} />
          </Grid>
          <Grid size={12} mb="2.22vh">
            <CustomTextField name="Usuario de Tik Tok" value={formData.tiktok} onChange={val => handleChange('tiktok', val)} />
          </Grid>
          <Grid size={12}>
            <CustomPhoneField
              name="Teléfono"
              areaCode={formData.codigoArea}
              phoneNumber={formData.telefono}
              onAreaChange={val => handleChange('codigoArea', val)}
              onPhoneChange={val => handleChange('telefono', val)}
            />
          </Grid>
          <Grid size={12}>
            <CustomTextArea name="Mensaje" value={formData.mensaje} onChange={val => handleChange('mensaje', val)} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ContactForm;