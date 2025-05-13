import { Grid, Button, Typography, Divider } from '@mui/material';
import CustomTextField from '../elements/customTextField';
import CustomSelectField from '../elements/customSelectField';
import CustomHideTextField from '../elements/customHideTextField';
import { useState } from 'react';
import CustomPhoneField from '../elements/custonPhoneField';
import CustomDateField from '../elements/customDateField';
import estadosVenezuela from '../models/venezuelaState';
import getApiService from '../helpers/getApiServices';
import { format } from 'date-fns';
import CustomNumberField from '../elements/CustomNumberField';
import CustomImageUploadField from '../elements/CustomImageUploadField';

const RegisterForm = () => {

  const { registerService } = getApiService()

  const initialFormState = {
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
    profilePhotoUrl: null as File | null,
    fechaNacimiento: null as Date | null,
  };

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
    profilePhotoUrl: null as File | null, 
    fechaNacimiento: null as Date | null,
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    const dataToSend = {
      name: formData.nombre.trim(),
      lastname: formData.apellido.trim(),
      birthdate: formData.fechaNacimiento
        ? format(formData.fechaNacimiento, 'yyyy-MM-dd')
        : '',
      city: formData.ubicacion.trim(),
      email: formData.email.trim(),
      phone: `${formData.codigoArea}${formData.telefono}`.replace(/[^0-9]/g, ''), 
      instagram: formData.instagram.replace(/^@/, ''), 
      tiktok: formData.tiktok.replace(/^@/, ''),      
      password: formData.contrasena,
      followers: formData.followers,
      profilePhotoUrl: formData.profilePhotoUrl
    };    
  
    try {
      await registerService(dataToSend);
      setFormData(initialFormState); // ✅ Limpiar solo si fue exitoso
    } catch (error) {
      console.warn("❌ Registro fallido, los datos se mantienen.", error);
    }
  };
  

  return (
    <Grid container direction="row" justifyContent="center" alignItems="top" mt="22.2vh">
      <Grid size={12} px={{ xs: 0, md: "315px" }}>
        <Divider />
        <Grid container direction="row" justifyContent="space-between" mt="4.4vh">
          <Grid size={{ xs: 12, md: 4}}>
            <Typography textAlign="left" component="p" fontSize={40} fontWeight={300} sx={{ color: '#2F342E', fontFamily: 'Inter' }}>Registrarse</Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <Grid container direction="row" spacing={2}>
              <Grid size={12} mb="2.22vh" sx={{ backgroundColor: '#FFF', borderRadius: '7px' }} py="1.4vh">
                <Typography textAlign="center" component="p" fontSize={16} fontWeight={500} sx={{ color: '#2F342E', fontFamily: 'Inter' }}>Registrarse</Typography>
              </Grid>
              <Grid size={12} mb="2.22vh">
                <CustomImageUploadField
                  name="Foto de perfil"
                  file={formData.profilePhotoUrl}
                  onChange={(file) => setFormData(prev => ({ ...prev, profilePhotoUrl: file }))}
                />
              </Grid>
              <Grid size={6} mb="2.22vh">
                <CustomTextField name="Nombre" value={formData.nombre} onChange={val => handleChange('nombre', val)} />
              </Grid>
              <Grid size={6} mb="2.22vh">
                <CustomTextField name="Apellido" value={formData.apellido} onChange={val => handleChange('apellido', val)} />
              </Grid>
              <Grid size={12} mb="2.22vh">
                <CustomDateField
                  name="Fecha de nacimiento"
                  value={formData.fechaNacimiento}
                  onChange={(date) => handleChange('fechaNacimiento', date)}
                />
              </Grid>
              <Grid size={12} mb="2.22vh">
                <CustomSelectField
                  name="Ubicación"
                  value={formData.ubicacion}
                  onChange={(val) => handleChange('ubicacion', val)}
                  options={estadosVenezuela}
                />
              </Grid>
              <Grid size={12} mb="2.22vh">
                <CustomTextField name="Email" value={formData.email} onChange={val => handleChange('email', val)} />
              </Grid>
              <Grid size={12} mb="2.22vh">
                <CustomPhoneField
                  name="Teléfono"
                  areaCode={formData.codigoArea}
                  phoneNumber={formData.telefono}
                  onAreaChange={val => handleChange('codigoArea', val)}
                  onPhoneChange={val => handleChange('telefono', val)}
                />
              </Grid>
              <Grid size={12} mb="2.22vh">
                <CustomTextField name="Usuario de Instagram" value={formData.instagram} onChange={val => handleChange('instagram', val)} />
              </Grid>
              <Grid size={12} mb="2.22vh">
                <CustomTextField name="Usuario de Tik Tok" value={formData.tiktok} onChange={val => handleChange('tiktok', val)} />
              </Grid>
              <Grid size={12} mb="2.22vh">
                <CustomNumberField name="Seguidores" value={formData.followers} onChange={val => handleChange('followers', val)} />
              </Grid>
              <Grid size={12} mb="2.22vh">
                <CustomHideTextField name="Crear Contraseña" value={formData.contrasena} onChange={val => handleChange('contrasena', val)} />
              </Grid>
              <Grid size={12} mb="2.22vh">
                <CustomHideTextField name="Confirmar Contraseña" value={formData.confirmarContrasena} onChange={val => handleChange('confirmarContrasena', val)} />
              </Grid>
              <Grid size={12} mb="2.22vh">
                <Button variant='contained' fullWidth sx={{ backgroundColor: '#2F342E', color: '#FFFFFF', fontSize: '16px' }} onClick={handleSubmit}>Aceptar</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )

}

export default RegisterForm;