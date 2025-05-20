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
import CountrySelectField from '../elements/CountrySelectField';

const RegisterForm = () => {
  const { registerService } = getApiService();

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

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (field: string, value: string | Date | File | null) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.nombre.trim()) newErrors.nombre = 'Nombre requerido';
    if (!formData.apellido.trim()) newErrors.apellido = 'Apellido requerido';
    if (!formData.fechaNacimiento) newErrors.fechaNacimiento = 'Fecha requerida';
    if (!formData.ubicacion.trim()) newErrors.ubicacion = 'Ubicación requerida';
    if (!formData.email.trim()) newErrors.email = 'Email requerido';
    if (!formData.codigoArea.trim() || !formData.telefono.trim()) newErrors.telefono = 'Teléfono requerido';
    if (!formData.instagram.trim()) newErrors.instagram = 'Instagram requerido';
    if (!formData.tiktok.trim()) newErrors.tiktok = 'TikTok requerido';
    if (!formData.followers.trim()) newErrors.followers = 'Seguidores requerido';
    if (!formData.contrasena.trim()) newErrors.contrasena = 'Contraseña requerida';
    if (formData.contrasena !== formData.confirmarContrasena) newErrors.confirmarContrasena = 'Las contraseñas no coinciden';
    if (!formData.profilePhotoUrl) newErrors.profilePhotoUrl = 'Foto requerida';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      console.warn("❌ Hay errores en el formulario:", newErrors);
      return;
    }

    setErrors({});

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
      profilePhotoUrl: formData.profilePhotoUrl,
    };

    try {
      await registerService(dataToSend);
      setFormData(initialFormState);
    } catch (error) {
      console.warn("❌ Registro fallido, los datos se mantienen.", error);
    }
  };

  return (
    <Grid container direction="row" justifyContent="center" alignItems="top" mt="22.2vh">
      <Grid size={12} px={{ xs: 0, md: "315px" }}>
        <Divider />
        <Grid container direction="row" justifyContent="space-between" mt="4.4vh" spacing={2}>
          <Grid size={{ xs: 12, md: 4 }}>
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
                  onChange={(file) => handleChange('profilePhotoUrl', file)}
                  error={!!errors.profilePhotoUrl}
                  helperText={errors.profilePhotoUrl}
                />
              </Grid>

              <Grid size={6} mb="2.22vh">
                <CustomTextField name="Nombre" value={formData.nombre} onChange={val => handleChange('nombre', val)} error={!!errors.nombre} helperText={errors.nombre} />
              </Grid>

              <Grid size={6} mb="2.22vh">
                <CustomTextField name="Apellido" value={formData.apellido} onChange={val => handleChange('apellido', val)} error={!!errors.apellido} helperText={errors.apellido} />
              </Grid>

              <Grid size={12} mb="2.22vh">
                <CustomDateField
                  name="Fecha de nacimiento"
                  value={formData.fechaNacimiento}
                  onChange={(date) => handleChange('fechaNacimiento', date)}
                  error={!!errors.fechaNacimiento}
                  helperText={errors.fechaNacimiento}
                />
              </Grid>

              <Grid size={12} mb="2.22vh">
                <CountrySelectField
                  name="País"
                  value={formData.ubicacion}
                  onChange={(val) => handleChange('ubicacion', val)}
                  error={!!errors.ubicacion}
                  helperText={errors.ubicacion}
                />

                
              </Grid>

              <Grid size={12} mb="2.22vh">
                <CustomTextField name="Email" value={formData.email} onChange={val => handleChange('email', val)} error={!!errors.email} helperText={errors.email} />
              </Grid>

              <Grid size={12} mb="2.22vh">
                <CustomPhoneField
                  name="Teléfono"
                  areaCode={formData.codigoArea}
                  phoneNumber={formData.telefono}
                  onAreaChange={val => handleChange('codigoArea', val)}
                  onPhoneChange={val => handleChange('telefono', val)}
                  error={!!errors.telefono}
                  helperText={errors.telefono}
                />
              </Grid>

              <Grid size={12} mb="2.22vh">
                <CustomTextField name="Usuario de Instagram" value={formData.instagram} onChange={val => handleChange('instagram', val)} error={!!errors.instagram} helperText={errors.instagram} />
              </Grid>

              <Grid size={12} mb="2.22vh">
                <CustomTextField name="Usuario de Tik Tok" value={formData.tiktok} onChange={val => handleChange('tiktok', val)} error={!!errors.tiktok} helperText={errors.tiktok} />
              </Grid>

              <Grid size={12} mb="2.22vh">
                <CustomNumberField name="Seguidores" value={formData.followers} onChange={val => handleChange('followers', val)} error={!!errors.followers} helperText={errors.followers} />
              </Grid>

              <Grid size={12} mb="2.22vh">
                <CustomHideTextField name="Crear Contraseña" value={formData.contrasena} onChange={val => handleChange('contrasena', val)} error={!!errors.contrasena} helperText={errors.contrasena} />
              </Grid>

              <Grid size={12} mb="2.22vh">
                <CustomHideTextField name="Confirmar Contraseña" value={formData.confirmarContrasena} onChange={val => handleChange('confirmarContrasena', val)} error={!!errors.confirmarContrasena} helperText={errors.confirmarContrasena} />
              </Grid>

              <Grid size={12} mb="2.22vh">
                <Button variant='contained' fullWidth sx={{ backgroundColor: '#2F342E', color: '#FFFFFF', fontSize: '16px' }} onClick={handleSubmit}>Aceptar</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RegisterForm;
