import { Grid, Typography } from '@mui/material';
import { useState } from 'react';
import 'animate.css';



const AboutUs = () => {

   const [activeSection, setActiveSection] = useState<number>(1);

   return (
      <Grid container direction="row" justifyContent="center" alignItems="top" mt="22.2vh">
         <Grid size={12} px={{ xs: 0, md: "315px" }}>
            <Typography textAlign="center" component="p" fontSize={16} fontWeight={400} sx={{ color: '#2F342E', fontFamily: 'Inter' }}>¿Quiénes somos?</Typography>
         </Grid>
         <Grid size={12} px={{ xs: 0, md: "315px" }}>
            <Typography textAlign="center" component="p" fontSize={40} fontWeight={300} sx={{ color: '#2F342E', fontFamily: 'Inter' }}>Conectamos a las mejores marcas con <br />los creadores mas influyentes</Typography>
         </Grid>
         <Grid size={12} px={{ xs: 0, md: "315px" }}>
            <Typography textAlign="center" component="p" fontSize={16} fontWeight={400} sx={{ color: '#2F342E', fontFamily: 'Inter' }}>Somos la primera y única plataforma que conecta las mejores experiencias con los mejores influencers y creadores de contenidos del panorama nacional e internacional.</Typography>
         </Grid>
         <Grid size={12} px={{ xs: 0, md: "315px" }}>
            <Grid container direction="row" justifyContent="space-between" alignItems="top" mt="8.8vh">
               <Grid size={4}>
                  <Typography textAlign="left" component="p" fontSize={16} fontWeight={500} sx={{ color: '#2F342E', fontFamily: 'Inter', cursor: 'pointer' }} onClick={() => setActiveSection(1)}>¿Quiénes somos?</Typography>
                  <Typography textAlign="left" component="p" fontSize={16} fontWeight={400} sx={{ color: '#2F342E', fontFamily: 'Inter', cursor: 'pointer' }} mt="2.2vh" mb="2.2vh" onClick={() => setActiveSection(2)}>Nuestra misión</Typography>
                  <Typography textAlign="left" component="p" fontSize={16} fontWeight={400} sx={{ color: '#2F342E', fontFamily: 'Inter', cursor: 'pointer' }} mt="2.2vh" mb="2.2vh" onClick={() => setActiveSection(3)}>¿Cómo trabajamos?</Typography>
               </Grid>
               { activeSection == 1 && (
                  <Grid size={8}>
                     <Typography textAlign="left" component="p" fontSize={16} fontWeight={400} className="animate__animated animate__fadeInRight" sx={{ color: '#2F342E', fontFamily: 'Inter',  }}>The CIRCLE club. Es la primera y única plataforma en Venezuela donde convergen las mejores experiencias, productos y servicios con los creadores de contenido más influyentes del país.<br /><br />Somos un club exclusivo que eleva tu marca a otro nivel, dándole máxima visibilidad, alcance y exposición digital a través de creadores cuidadosamente seleccionados y alineados con tu identidad.<br /><br />No somos una agencia de marketing: somos la herramienta ideal que combina exclusividad, tecnología y contenido de calidad.</Typography> 
                  </Grid>
               )}
               { activeSection == 2 && (
                  <Grid size={8}>
                     <Typography textAlign="left" component="p" fontSize={16} fontWeight={400} className="animate__animated animate__fadeInRight" sx={{ color: '#2F342E', fontFamily: 'Inter' }}>En The CIRCLE club. Trabajamos para darle profesionalismo, seguridad, estructura legal y alcance real a tus colaboraciones con influencers.<br /><br />Nuestro compromiso es que cada colaboración sea transparente, clara y con resultados medibles.<br /><br />Somos la herramienta de marketing más innovadora del país, diseñada para facilitar y optimizar tus campañas con creadores de contenido y aumentar tus ventas.</Typography>
                  </Grid>
               )}
               { activeSection == 3 && (
                  <Grid size={8}>
                     <Typography textAlign="left" component="p" fontSize={16} fontWeight={400} className="animate__animated animate__fadeInRight" sx={{ color: '#2F342E', fontFamily: 'Inter' }}>En The CIRCLE club. conectamos marcas y establecimientos con creadores de contenido de forma directa, eficiente y segura. <br /><br /> A través de nuestra plataforma, las marcas pueden publicar sus experiencias, productos o servicios, y los influencers seleccionados solicitan colaboraciones alineadas a su perfil. <br /><br /> Nosotros supervisamos todo el proceso para garantizar calidad, transparencia y cumplimiento, asegurando resultados reales y beneficiosos para ambas partes.</Typography>
                  </Grid>
               )}
            </Grid>
         </Grid>
      </Grid>
   )
};

export default AboutUs;