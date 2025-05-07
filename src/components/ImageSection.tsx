import { Box, Grid } from '@mui/material';
import Influencer1 from '../assets/Header/Persona1.jpg';
import Influencer2 from '../assets/Header/Persona2.jpg';
import Influencer3 from '../assets/Header/Persona3.jpg';

const ImageSection = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: '1440px', mx: 'auto', mt: 6 }}>
      <Grid container spacing={2} justifyContent="center" alignItems="top">
        {/* Columna 1 */}
        <Grid size={2}>
          <Grid container justifyContent="right">
            <Box component="img" src={Influencer1} alt="1" sx={{ width: '100%', borderRadius: 4, mb: 2, maxWidth: '177px', maxHeight: '250px', mt: 'clamp(0px, 25.3vh, 230px)', }} />
          </Grid>
        </Grid>

        {/* Columna 2 */}
        <Grid size={2}>
          <Box component="img" src={Influencer2} alt="3" sx={{ width: '100%', borderRadius: 4, height: '400px', objectFit: 'cover', mb: 2, maxWidth: '257px', maxHeight: '273px' }} />
          <Box component="img" src={Influencer1} alt="4" sx={{ width: '100%', borderRadius: 4, maxWidth: '257px', maxHeight: '252px' }} />
        </Grid>

        {/* Columna 3 */}
        <Grid size={2}>
          <Box component="img" src={Influencer3} alt="5" sx={{ width: '100%', borderRadius: 4, height: '100%', objectFit: 'cover' }} />
        </Grid>

        {/* Columna 4 */}
        <Grid size={2}>
          <Box component="img" src={Influencer2} alt="3" sx={{ width: '100%', borderRadius: 4, height: '400px', objectFit: 'cover', mb: 2, maxWidth: '257px', maxHeight: '273px' }} />
          <Box component="img" src={Influencer1} alt="4" sx={{ width: '100%', borderRadius: 4, maxWidth: '257px', maxHeight: '252px' }} />
        </Grid>

        {/* Columna 5 */}
        <Grid size={2}>
          <Grid container justifyContent="left">
            <Box component="img" src={Influencer1} alt="6" sx={{ width: '100%', borderRadius: 4, mb: 2, maxWidth: '177px', maxHeight: '250px', mt: 'clamp(0px, 14vh, 126px)', }} />
          </Grid>
          
        </Grid>

      </Grid>
    </Box>
  );
};

export default ImageSection;
