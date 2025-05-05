import { Box, Button, Grid, Typography } from "@mui/material"
import Logo from "../assets/Logo/Logo.svg"

const Nav = () => (
    <Grid container direction="row" justifyContent="center" alignItems="top" mt="2.22vh" mb="11.1vh">
        <Grid size={12} px="315px">
            <Grid container direction="row" justifyContent="space-between" spacing={2}>
                <Grid size={3}>
                    <Box 
                        component="img"
                        alt="logo"
                        sx={{
                            width: '101px',
                            height: '12px'
                        }}
                        src={ Logo }
                    />
                </Grid>
                <Grid size={1}>
                    <Typography textAlign="left" component="p" fontSize={16} fontWeight={300} sx={{ color: '#292D32', fontFamily: 'Inter' }}>Secciones</Typography>
                </Grid>
                <Grid size={1}>
                    <Typography textAlign="left" component="p" fontSize={16} fontWeight={300} sx={{ color: '#292D32', fontFamily: 'Inter' }}>Registrarse</Typography>
                </Grid>
                <Grid size={1}>
                    <Typography textAlign="left" component="p" fontSize={16} fontWeight={300} sx={{ color: '#292D32', fontFamily: 'Inter' }}>FAQ'S</Typography>
                </Grid>
                <Grid size={2}>
                    <Typography textAlign="left" component="p" fontSize={16} fontWeight={300} sx={{ color: '#292D32', fontFamily: 'Inter' }}>Contacto</Typography>
                </Grid>
                <Grid size={3}>
                <Button variant="contained" sx={{ mx:'16px', gap:'10px', borderRadius: '10.6px', fontSize: '12px', fontWeight: '500px', backgroundColor: '#2F342E' }}>
                    Descargar app
                </Button>
                </Grid>
            </Grid>
        </Grid>

    </Grid>
)

export default Nav;