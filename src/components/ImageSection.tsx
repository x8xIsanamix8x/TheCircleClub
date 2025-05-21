import { Box, Grid } from '@mui/material';
import Image1 from "../assets/img/1.jpeg";
import Image2 from "../assets/img/2.jpeg";
import Image3 from "../assets/img/3.jpeg";
import Image6 from "../assets/img/6.jpeg";
import Image7 from "../assets/img/7.jpeg";
import Image8 from "../assets/img/8.jpeg";
import Image9 from "../assets/img/9.jpeg";
import Image10 from "../assets/img/10.jpeg";
import Image11 from "../assets/img/11.jpeg";
import Image12 from "../assets/img/12.jpeg";
import Image13 from "../assets/img/13.jpeg";


const ImageSection = () => {

  const allImages = [
    Image1, Image2, Image3,
    Image6, Image7, Image8, Image9, Image10, Image11
  ];

  function getShuffledImages<T>(images: T[]): T[] {
    const array = [...images];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const randomImages = getShuffledImages(allImages).slice(0, 8); 
  
  return (
    <Box sx={{ width: '100%', maxWidth: '1440px', mx: 'auto', mt: 6 }}>
      <Grid container spacing={2} justifyContent="center" alignItems="top">
        {/* Columna 1 */}
        <Grid size={2} sx={{ display: { xs: 'none', md: 'block' }}}>
          <Grid container justifyContent="right">
            <Box component="img" src={Image12} alt="1" sx={{ width: '100%', borderRadius: 4, mb: 2, maxWidth: '177px', maxHeight: '250px', mt: 'clamp(0px, 25.3vh, 230px)', }} />
          </Grid>
        </Grid>

        {/* Columna 2 */}
        <Grid size={{ xs: 3, md: 2}}>
          <Box component="img" src={randomImages[1]} alt="3" sx={{ width: '100%', borderRadius: 4, height: '400px', objectFit: 'cover', mb: 2, maxWidth: '257px', maxHeight: '273px' }} />
          <Box component="img" src={randomImages[2]} alt="4" sx={{ width: '100%', borderRadius: 4, maxWidth: '257px', maxHeight: '252px' }} />
        </Grid>

        {/* Columna 3 */}
        <Grid size={{ xs: 4, md: 2}}>
          <Box component="img" src={randomImages[3]} alt="5" sx={{ width: '100%', borderRadius: 4, height: '100%', objectFit: 'cover' }} />
        </Grid>

        {/* Columna 4 */}
        <Grid size={{ xs: 3, md: 2}}>
          <Box component="img" src={randomImages[4]} alt="3" sx={{ width: '100%', borderRadius: 4, height: '400px', objectFit: 'cover', mb: 2, maxWidth: '257px', maxHeight: '273px' }} />
          <Box component="img" src={randomImages[5]} alt="4" sx={{ width: '100%', borderRadius: 4, maxWidth: '257px', maxHeight: '252px' }} />
        </Grid>

        {/* Columna 5 */}
        <Grid size={2} sx={{ display: { xs: 'none', md: 'block' }}}>
          <Grid container justifyContent="left">
            <Box component="img" src={Image13} alt="6" sx={{ width: '100%', borderRadius: 4, mb: 2, maxWidth: '177px', maxHeight: '250px', mt: 'clamp(0px, 14vh, 126px)', }} />
          </Grid>
        </Grid>

      </Grid>
    </Box>
  );
};

export default ImageSection;
