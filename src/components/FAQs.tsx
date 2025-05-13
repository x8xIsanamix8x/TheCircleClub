import { Typography, Grid, Collapse } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import { useState } from 'react';

const faqData = [
  {
    question: '¿Cómo puedo acceder a The CIRCLE club.?',
    answer:
      'Puedes hacerlo a través de nuestra web o descargando la app. Ten en cuenta que el registro no garantiza el acceso inmediato: evaluamos cada perfil y te notificaremos por correo electrónico si es aprobado.',
  },
  {
    question: '¿Qué voy a encontrar dentro de la app?',
    answer:
      'Una selección curada de experiencias, productos y servicios exclusivos en Venezuela. Podrás solicitar colaboraciones con marcas a cambio de contenido en tus redes sociales.',
  },
  {
    question: '¿Dónde está ubicado The CIRCLE club.?',
    answer:
      'Por ahora estamos operativos únicamente en Venezuela. Muy pronto llegaremos a Panamá y República Dominicana.',
  },
  {
    question: 'Soy una empresa, ¿cómo puedo estar dentro de la app?',
    answer:'Contáctanos vía email o por WhatsApp. Te enviaremos toda la información necesaria para formar parte del club',
  },
  {
    question: '¿Tengo un problema con una solicitud dentro de la app, ¿qué hago?',
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
      <Grid size={12} px={{ xs: 0, md: "315px" }}>
        <Typography textAlign="center" component="p" fontSize={40} fontWeight={300} sx={{ color: '#2F342E', fontFamily: 'Inter' }}>FAQs</Typography>
          <Grid container direction="row" justifyContent="space-between" spacing={2} mt="2.22vh">
            { faqData.map((item, index) => (
                <Grid size={6} key={ index } sx={{ backgroundColor: '#2F342E', borderRadius: '10px', cursor: 'pointer', maxHeight: openIndex != index ? '80px' : 'auto' }} py="1.5vh" onClick={() => handleToggle(index)}>
                  <Grid container direction="row" justifyContent="space-between" alignItems="center" px="14px">
                    <Grid size={10}>
                      <Typography textAlign="left" component="p" fontSize={16} fontWeight={400} sx={{ color: '#FFF', fontFamily: 'Inter' }}>{ item?.question }</Typography>
                    </Grid>
                    <Grid size={2} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                      <ArrowDropDown sx={{ verticalAlign: 'middle' }}/>
                    </Grid>
                    <Grid size={12}>
                      <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
                        <Typography textAlign="left" component="p" fontSize={16} fontWeight={400} sx={{ color: '#FFF', fontFamily: 'Inter' }} mt="1vh">{ item.answer }</Typography>
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