import { Grid, Typography, Divider, Button } from '@mui/material';
import CustomTextField from '../elements/customTextField';
import CustomTextArea from '../elements/customTextArea';
import CustomCheckboxField from '../elements/CustomCheckboxField';
import { useState } from 'react';
import CustomPhoneField from '../elements/custonPhoneField';

const ContactForm = () => {
  const [userRole, setUserRole] = useState<'creador' | 'negocio' | ''>('');
  const [formData, setFormData] = useState({
    telefono: '',
    codigoArea: '',
    instagram: '',
    tiktok: '',
    nombre: '',
    apellido: '',
    email: '',
    mensaje: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateFields = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.nombre.trim()) newErrors.nombre = 'Nombre requerido';
    if (!formData.apellido.trim()) newErrors.apellido = 'Apellido requerido';
    if (!formData.email.trim()) newErrors.email = 'Email requerido';
    if (!formData.codigoArea.trim() || !formData.telefono.trim()) newErrors.telefono = 'Teléfono requerido';
    if (!formData.instagram.trim()) newErrors.instagram = 'Instagram requerido';
    if (!formData.tiktok.trim()) newErrors.tiktok = 'TikTok requerido';
    if (!formData.mensaje.trim()) newErrors.mensaje = 'Mensaje requerido';
    if (!userRole) newErrors.rol = 'Selecciona una opción';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = async () => {
  if (!validateFields()) return;

  setSubmitting(true);

    try {
      const response = await fetch("https://getform.io/f/aejrqgmb", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          apellido: formData.apellido,
          email: formData.email,
          telefono: `${formData.codigoArea}${formData.telefono}`,
          instagram: formData.instagram,
          tiktok: formData.tiktok,
          mensaje: formData.mensaje,
          rol: userRole,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        alert("✅ Tu mensaje ha sido enviado con éxito");
      } else {
        alert("❌ Error al enviar. Revisa tu configuración de Getform.");
      }
    } catch (error) {
      console.error("❌ Error:", error);
      alert("❌ Hubo un problema al enviar tu mensaje");
    } finally {
      setSubmitting(false);
    }
  };


  return (
    <Grid container direction="row" justifyContent="center" alignItems="top" mt="22.2vh">
      <Grid size={12} px={{ xs: 0, md: "420px" }}>
        <Typography textAlign="center" component="p" fontSize={40} fontWeight={300} sx={{ color: '#2F342E', fontFamily: 'Inter' }}>CONTACTÁNOS</Typography>
        <Typography textAlign="left" component="p" fontSize={14} fontWeight={500} sx={{ color: '#2F342E', fontFamily: 'Inter' }} mt="11.1vh">¿Qué opción te identifica mejor?</Typography>
        <Grid container direction="row" justifyContent="center" spacing={2} mt="4.4vh">
          <Grid size={12}>
            <CustomCheckboxField
              label="Soy creador de contenido"
              checked={userRole === 'creador'}
              onChange={() => setUserRole('creador')}
            />
          </Grid>
          <Grid size={12}>
            <CustomCheckboxField
              label="Soy dueño de un negocio"
              checked={userRole === 'negocio'}
              onChange={() => setUserRole('negocio')}
            />
          </Grid>
          {errors.rol && (
            <Typography color="error" fontSize={12} mt="1vh">{errors.rol}</Typography>
          )}
        </Grid>

        <Divider sx={{ marginTop: '4.4vh', marginBottom: '4.4vh' }} />

        <Grid container direction="row" justifyContent="center" spacing={2}>
          <Grid size={6}>
            <CustomTextField name="Nombre" value={formData.nombre} onChange={val => handleChange('nombre', val)} error={!!errors.nombre} helperText={errors.nombre} />
          </Grid>
          <Grid size={6}>
            <CustomTextField name="Apellido" value={formData.apellido} onChange={val => handleChange('apellido', val)} error={!!errors.apellido} helperText={errors.apellido} />
          </Grid>
          <Grid size={12}>
            <CustomTextField name="Email" value={formData.email} onChange={val => handleChange('email', val)} error={!!errors.email} helperText={errors.email} />
          </Grid>
          <Grid size={12} mb="2.22vh">
            <CustomTextField name="Usuario de Instagram" value={formData.instagram} onChange={val => handleChange('instagram', val)} error={!!errors.instagram} helperText={errors.instagram} />
          </Grid>
          <Grid size={12} mb="2.22vh">
            <CustomTextField name="Usuario de Tik Tok" value={formData.tiktok} onChange={val => handleChange('tiktok', val)} error={!!errors.tiktok} helperText={errors.tiktok} />
          </Grid>
          <Grid size={12}>
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
          <Grid size={12}>
            <CustomTextArea name="Mensaje" value={formData.mensaje} onChange={val => handleChange('mensaje', val)} error={!!errors.mensaje} helperText={errors.mensaje} />
          </Grid>
          <Grid size={12} mt="4.4vh">
            <Button variant="contained" fullWidth sx={{ backgroundColor: '#2F342E', color: '#FFFFFF', fontSize: '16px' }} onClick={sendEmail} disabled={submitting}>
              {submitting ? 'Enviando...' : 'Enviar mensaje'}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContactForm;
