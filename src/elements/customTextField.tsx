import { TextField, Typography } from "@mui/material"

const CustomTextField = ({ name } : { name: string }) => {
    return (
        <>
            <Typography textAlign="left" component="p" fontSize={14} fontWeight={500} sx={{ color: '#2F342E', fontFamily: 'Inter' }} mb="0.35vh">{ name }</Typography>
            <TextField
            variant="outlined"
            fullWidth
            placeholder={ `Escribe tu ${ name }`}
            sx={{
                backgroundColor: '#FFF',
                borderRadius: '12px',
                '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#f2f2f2',
                borderRadius: '12px',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#ccc',
                borderRadius: '12px',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#4dabf5',
                borderRadius: '12px',
                },
            }}
            />
        </>
    )
}

export default CustomTextField