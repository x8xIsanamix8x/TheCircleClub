import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Grid, Collapse } from '@mui/material';
import { ArrowDropDown, ExpandMore } from '@mui/icons-material';
import { useState } from 'react';

const faqData = [
  {
    question: '¿Qué es The Circle Club?',
    answer:
      'Frame follower comment polygon clip group list. Reesizing overflow figjam outline follower figma. Duplicate subtract shadow object figjam effect device auto.\n\nBullet scrolling layout vector edit pen link rotate outline move. Arrow share stroke hand group line horizontal component select.',
  },
  {
    question: '¿Cómo me uno al club?',
    answer:
      'Debes registrarte en nuestra web oficial y seguir las instrucciones para completar tu perfil y solicitud de ingreso.',
  },
  {
    question: '¿Cuáles son los beneficios?',
    answer:
      'Acceso exclusivo a eventos privados, descuentos en marcas aliadas y conexión con una red premium de contactos.',
  },
  {
    question: '¿Tiene algún costo?',
    answer:
      'Sí, existen diferentes planes de membresía adaptados a cada perfil. Consulta la sección de precios.',
  },
  {
    question: '¿Puedo invitar a otros?',
    answer:
      'Por supuesto. Cada miembro tiene un cupo limitado de invitaciones que puede usar desde su panel.',
  },
  {
    question: '¿Dónde puedo contactarlos?',
    answer:
      'Puedes escribirnos directamente a través del formulario de contacto en nuestra página web o por nuestras redes sociales.',
  },
];

const FAQs = () => {

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Grid container direction="row" justifyContent="center" alignItems="top" mt="22.2vh">
      <Grid size={12} px="315px">
        <Typography textAlign="center" component="p" fontSize={40} fontWeight={300} sx={{ color: '#2F342E', fontFamily: 'Inter' }}>FAQs</Typography>
          <Grid container direction="row" justifyContent="space-between" spacing={2} mt="2.22vh">
            { faqData.map((item, index) => (
                <Grid size={6} key={ index } sx={{ backgroundColor: '#2F342E', borderRadius: '10px', cursor: 'pointer', maxHeight: openIndex != index ? '50px' : 'auto' }} py="1.5vh" onClick={() => handleToggle(index)}>
                  <Grid container direction="row" justifyContent="space-between" px="14px">
                    <Grid size={10}>
                      <Typography textAlign="left" component="p" fontSize={16} fontWeight={400} sx={{ color: '#FFF', fontFamily: 'Inter' }}>¿Qué es The Circle Club?</Typography>
                    </Grid>
                    <Grid size={2} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                      <ArrowDropDown sx={{ verticalAlign: 'middle' }}/>
                    </Grid>
                    <Grid size={12}>
                      <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
                        <Typography textAlign="left" component="p" fontSize={16} fontWeight={400} sx={{ color: '#FFF', fontFamily: 'Inter' }} mt="1vh">Frame follower comment polygon clip group list. Reesizing overflow figjam outline follower figma. Duplicate subtract shadow object figjam effect device auto. <br /><br />Bullet scrolling layout vector edit pen link rotate outline move. Arrow share stroke hand group line horizontal component select.</Typography>
                      </Collapse>
                    </Grid>
                  </Grid>
                </Grid>
            ))}
          </Grid>
      </Grid>
    </Grid>
  )
};

export default FAQs;