import { Grid, Typography } from '@mui/material';

const AboutUs = () => (
  <Grid container direction="row" justifyContent="center" alignItems="top" mt="22.2vh">
    <Grid size={12} px={{ xs: 0, md: "315px" }}>
       <Typography textAlign="center" component="p" fontSize={16} fontWeight={400} sx={{ color: '#2F342E', fontFamily: 'Inter' }}>¿Quiénes somos?</Typography>
    </Grid>
    <Grid size={12} px={{ xs: 0, md: "315px" }}>
       <Typography textAlign="center" component="p" fontSize={40} fontWeight={300} sx={{ color: '#2F342E', fontFamily: 'Inter' }}>Conectamos las mejores <br />experiencias con los influencers</Typography>
    </Grid>
    <Grid size={12} px={{ xs: 0, md: "315px" }}>
       <Typography textAlign="center" component="p" fontSize={16} fontWeight={400} sx={{ color: '#2F342E', fontFamily: 'Inter' }}>Figma ipsum component variant main layer.</Typography>
    </Grid>
    <Grid size={12} px={{ xs: 0, md: "315px" }}>
       <Grid container direction="row" justifyContent="space-between" alignItems="top" mt="8.8vh">
          <Grid size={4}>
            <Typography textAlign="left" component="p" fontSize={16} fontWeight={500} sx={{ color: '#2F342E', fontFamily: 'Inter' }}>¿Quiénes somos?</Typography>
            <Typography textAlign="left" component="p" fontSize={16} fontWeight={400} sx={{ color: '#2F342E', fontFamily: 'Inter' }} mt="2.2vh" mb="2.2vh">Nuestra misión</Typography>
            <Typography textAlign="left" component="p" fontSize={16} fontWeight={400} sx={{ color: '#2F342E', fontFamily: 'Inter' }}>Nuestra misión</Typography>
          </Grid>
          <Grid size={8}>
            <Typography textAlign="left" component="p" fontSize={16} fontWeight={400} sx={{ color: '#2F342E', fontFamily: 'Inter' }}>¿Quiénes somos? <br /> Figma ipsum component variant main layer. Frame follower comment polygon clip group list. Reesizing overflow figjam outline follower figma. Duplicate subtract shadow object figjam effect device auto. Bullet scrolling layout vector edit pen link rotate outline move. Arrow share stroke hand group line horizontal component select. Undo create plugin team plugin create device hand.</Typography>
            <Typography textAlign="left" component="p" fontSize={16} fontWeight={400} sx={{ color: '#2F342E', fontFamily: 'Inter' }} mt="2.2vh">Nuestra misión<br /> Figma ipsum component variant main layer. Frame follower comment polygon clip group list. Reesizing overflow figjam outline follower figma. Duplicate subtract shadow object figjam effect device auto. Bullet scrolling layout vector edit pen link rotate outline move. Arrow share stroke hand group line horizontal component select. Undo create plugin team plugin create device hand.</Typography>
          </Grid>
       </Grid>
    </Grid>
  </Grid>
  
);

export default AboutUs;