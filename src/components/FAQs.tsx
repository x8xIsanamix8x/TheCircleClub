import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

const FAQs = () => (
  <Box sx={{ marginTop: 4, width: '100%' }}>
    <Typography variant="h4" component="h2" gutterBottom>
      FAQs
    </Typography>
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography>¿Qué es The Circle Club?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Información sobre el club y qué ofrece a los usuarios.
        </Typography>
      </AccordionDetails>
    </Accordion>
  </Box>
);

export default FAQs;