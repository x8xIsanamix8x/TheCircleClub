import { Grid, Button, Typography, Divider, CircularProgress } from '@mui/material';
import CustomTextField from '../elements/customTextField';
import CustomHideTextField from '../elements/customHideTextField';
import { useEffect, useRef, useState } from 'react';
import CustomPhoneField from '../elements/custonPhoneField';
import CustomDateField from '../elements/customDateField';
import getApiService from '../helpers/getApiServices';
import { format } from 'date-fns';
import CustomNumberField from '../elements/CustomNumberField';
import CustomImageUploadField from '../elements/CustomImageUploadField';
import CountrySelectField from '../elements/CountrySelectField';
import CitySelectField from '../elements/CitySelectField';
import useCountryStateMap from '../helpers/useCountryStateMap';


const RegisterForm = () => {
  const { registerService } = getApiService();
  const stateMap = useCountryStateMap();

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
    country: '',
    city: '',
    followers: '',
    profilePhotoUrl: null as File | null,
    fechaNacimiento: null as Date | null,
  };

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [cities, setCities] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);


  const handleChange = (field: string, value: string | Date | File | null) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.nombre.trim()) newErrors.nombre = 'Nombre requerido';
    if (!formData.apellido.trim()) newErrors.apellido = 'Apellido requerido';
    if (formData.fechaNacimiento) {
      const today = new Date();
      const birthDate = new Date(formData.fechaNacimiento);
      const age = today.getFullYear() - birthDate.getFullYear();
      const hasHadBirthdayThisYear =
        today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
    
      const realAge = hasHadBirthdayThisYear ? age : age - 1;
    
      if (realAge < 18) {
        newErrors.fechaNacimiento = 'Debes tener al menos 18 años para registrarte';
      }
    }    
    if (!formData.country.trim()) newErrors.country = 'País requerido';
    if (!formData.city.trim()) newErrors.city = 'Ciudad requerida';
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
      birthdate: formData.fechaNacimiento ? format(formData.fechaNacimiento, 'yyyy-MM-dd') : '',
      country: formData.country.trim(),
      city: formData.city.trim(),
      email: formData.email.trim(),
      phone: `${formData.codigoArea}${formData.telefono}`.replace(/[^0-9]/g, ''),
      instagram: formData.instagram.replace(/^@/, ''),
      tiktok: formData.tiktok.replace(/^@/, ''),
      password: formData.contrasena,
      followers: formData.followers,
      profilePhotoUrl: formData.profilePhotoUrl,
    };

    setLoading(true)
    try {
      await registerService(dataToSend);
      setFormData(initialFormState);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      console.warn("❌ Registro fallido, los datos se mantienen.", error);
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
  if (formData.country && stateMap[formData.country]) {
    const uniqueStates = Array.from(new Set(stateMap[formData.country])).sort((a, b) =>
      a.localeCompare(b)
    );
    setCities(uniqueStates);
    handleChange('state', '');
  }
}, [formData.country, stateMap]); 

  return (
    <Grid container direction="row" justifyContent="center" alignItems="top" mt="22.2vh">
      <Grid size={12} px={{ xs: 0, md: "100px", lg: "315px" }}>
        <Divider />
        <Grid container direction="row" justifyContent="center" mt="4.4vh" spacing={2}>
          <Grid size={{ xs: 12, md:  8 }}>
            <Grid container direction="row" spacing={2}>
              <Grid size={12} mb="2.22vh" py="1.4vh">
                <Typography textAlign="left" component="p" fontSize={40} fontWeight={300} sx={{ color: '#2F342E', fontFamily: 'Inter' }}>Registrarse</Typography>
              </Grid>

              <Grid size={12} mb="2.22vh">
                <CustomImageUploadField
                  name="Foto de perfil"
                  file={formData.profilePhotoUrl}
                  onChange={(file) => handleChange('profilePhotoUrl', file)}
                  error={!!errors.profilePhotoUrl}
                  helperText={errors.profilePhotoUrl}
                  inputRef={fileInputRef}
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
                  value={formData.country}
                  onChange={(val) => handleChange('country', val)}
                  error={!!errors.country}
                  helperText={errors.country}
                />
              </Grid>

              <Grid size={12} mb="2.22vh">
                <CitySelectField
                  name="Ciudad"
                  value={formData.city}
                  onChange={(val) => handleChange('city', val)}
                  cities={cities}
                  error={!!errors.city}
                  helperText={errors.city}
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
                <CustomHideTextField name="Contraseña" value={formData.contrasena} onChange={val => handleChange('contrasena', val)} error={!!errors.contrasena} helperText={errors.contrasena} />
              </Grid>

              <Grid size={12} mb="2.22vh">
                <CustomHideTextField name="Confirmar Contraseña" value={formData.confirmarContrasena} onChange={val => handleChange('confirmarContrasena', val)} error={!!errors.confirmarContrasena} helperText={errors.confirmarContrasena} />
              </Grid>

              <Grid size={12} mb="2.22vh">
                <Button
                  variant="contained"
                  fullWidth
                  onClick={handleSubmit}
                  disabled={loading}                           
                  endIcon={loading ? (                      
                    <CircularProgress size={20} color="inherit" />
                  ) : null}
                  sx={{ backgroundColor: '#2F342E', color: '#FFFFFF', fontSize: 16 }}
                >
                  {loading ? 'Enviando…' : 'Aceptar'}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RegisterForm;