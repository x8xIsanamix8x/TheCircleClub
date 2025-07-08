import { Grid, Button, Typography, Divider, CircularProgress } from '@mui/material';
import CustomTextField from '../elements/customTextField';
import CustomHideTextField from '../elements/customHideTextField';
import { useState } from 'react';
import getApiService from '../helpers/getApiServices';
import Swal from 'sweetalert2';

const DeleteForm = () => {
  const { registerService } = getApiService();

  const [formData, setFormData] = useState({
    email: '',
    contrasena: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateFields = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.email.trim()) newErrors.email = 'Email requerido';
    if (!formData.contrasena.trim()) newErrors.contrasena = 'Contraseña requerida';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    const isValid = validateFields();
    if (!isValid) {
      console.warn("❌ Hay errores en el formulario:", errors);
      return;
    }

    const result = await Swal.fire({
      title: '¿Estás completamente segur@?',
      html: `
        Sabemos que las despedidas no siempre son fáciles.<br /><br />
        <strong>Eliminar tu cuenta borrará toda tu información</strong><br />
        y no podrás acceder nuevamente con este perfil.<br /><br />
        Si aún así deseas continuar, por favor confirma tu decisión:
      `,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#2F342E',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, deseo eliminar mi cuenta de forma permanente',
      cancelButtonText: 'Cancelar',
      showCloseButton: true,
    });

    if (!result.isConfirmed) return;

    setLoading(true);
    try {
      await registerService({ email: formData.email, password: formData.contrasena });
      setFormData({ email: '', contrasena: '' });
      Swal.fire('¡Listo!', 'Tu solicitud fue enviada.', 'success');
    } catch (error) {
      console.warn("❌ Registro fallido", error);
      Swal.fire('Error', 'No se pudo completar la solicitud.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Grid container direction="row" justifyContent="center" alignItems="top" mt="5.2vh">
      <Grid size={12} px={{ xs: 0, md: "100px", lg: "315px" }}>
        <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
            fontFamily: 'The Seasons',
            fontWeight: 300,
            fontSize: '40px',
            lineHeight: '100%',
            letterSpacing: '-2%',
            textAlign: 'center',
            color: '#2F342E',
            }}
        >
            Nos duele verte partir
        </Typography>
        <Typography component="p" 
        sx={{
            fontFamily: 'Inter', // Fuente Inter
            fontWeight: 400, // Peso regular
            fontSize: '16px', // Tamaño de fuente
            lineHeight: '100%', // Altura de línea
            letterSpacing: '1%', // Espaciado entre letras
            textAlign: 'center', // Alineación centrada
            color: '#2F342E', // Color del texto
            mt: '3vh', // Margen superior
            mx: { xs: '2rem', md: '4rem'}, // Margen horizontal
        }}
        paragraph>
            En <i>The Circle Club</i> trabajamos todos los días para construir una comunidad auténtica y llena de oportunidades. <br /><br />Si estás pensando en irte, nos gustaría saber si hay algo que podamos mejorar. <br /><br />Pero si tu decisión es firme, por favor confirma tus datos para continuar.
        </Typography>

        <Divider />
        <Grid container direction="row" justifyContent="center" mt="4.4vh" spacing={2}>
          <Grid size={{ xs: 12, md:  8 }}>
            <Grid container direction="row" spacing={2}>

              <Grid size={12} mb="2.22vh">
                <CustomTextField name="Email" value={formData.email} onChange={val => handleChange('email', val)} error={!!errors.email} helperText={errors.email} />
              </Grid>

              <Grid size={12} mb="2.22vh">
                <CustomHideTextField name="Contraseña" value={formData.contrasena} onChange={val => handleChange('contrasena', val)} error={!!errors.contrasena} helperText={errors.contrasena} />
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
                  {loading ? 'Enviando…' : 'Verificar y continuar'}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DeleteForm;