import { Box, Grid, Typography } from "@mui/material"
import Logo from "../assets/Logo/Logo.svg"

interface FooterProps {
    onScrollTo: {
      about: () => void;
      register: () => void;
      faq: () => void;
      contact: () => void;
    };
}

const Footer = ({ onScrollTo }: FooterProps) => (
    <Grid container direction="row" justifyContent="center" alignItems="top" mt="22.2vh">
        <Grid size={12} px={{ xs: 0, md: "315px" }}>
            <Grid container direction="row" justifyContent="space-between">
                <Grid size={6} pr="120px">
                    <Box 
                        component="img"
                        alt="logo"
                        sx={{
                            width: '101px',
                            height: '12px'
                        }}
                        src={ Logo }
                    />
                    <Typography textAlign="left" component="p" fontSize={16} fontWeight={300} sx={{ color: '#292D32', fontFamily: 'Inter' }}>Conectamos las mejores experiencias con los influencers</Typography>
                </Grid>
                <Grid size={3}>
                    <Typography textAlign="left" component="p" fontSize={16} fontWeight={300} sx={{ color: '#292D32', fontFamily: 'Inter' }} >Secciones</Typography>
                    <Typography textAlign="left" component="p" fontSize={16} fontWeight={300} sx={{ color: '#292D32', fontFamily: 'Inter', cursor: 'pointer' }} onClick={onScrollTo.about}>¿Quiénes somos?</Typography>
                    <Typography textAlign="left" component="p" fontSize={16} fontWeight={300} sx={{ color: '#292D32', fontFamily: 'Inter', cursor: 'pointer' }} onClick={onScrollTo.register}>Regístrarse</Typography>
                    <Typography textAlign="left" component="p" fontSize={16} fontWeight={300} sx={{ color: '#292D32', fontFamily: 'Inter', cursor: 'pointer' }} onClick={onScrollTo.faq}>FAQ'S</Typography>
                    <Typography textAlign="left" component="p" fontSize={16} fontWeight={300} sx={{ color: '#292D32', fontFamily: 'Inter', cursor: 'pointer' }} onClick={onScrollTo.contact}>Contacto</Typography>
                </Grid>
                <Grid size={3}>
                    <Typography textAlign="left" component="p" fontSize={16} fontWeight={300} sx={{ color: '#292D32', fontFamily: 'Inter' }}>Descargar app</Typography>
                </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="space-between" mt="6.8vh" mb="21.6vh">
                <Grid size={6}>
                    <Typography textAlign="left" component="p" fontSize={16} fontWeight={300} sx={{ color: '#292D32', fontFamily: 'Inter' }}>©The Circle Club 2025 - Todos los derechos reservados.</Typography>
                </Grid>
                <Grid size={6}>
                    <Typography textAlign="right" component="p" fontSize={16} fontWeight={300} sx={{ color: '#292D32', fontFamily: 'Inter' }}>Terminos de servicio</Typography>
                </Grid>
            </Grid>
        </Grid>

    </Grid>
)

export default Footer;