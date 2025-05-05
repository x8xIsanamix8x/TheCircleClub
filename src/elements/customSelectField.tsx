import { FormControl, MenuItem, Select, Typography } from "@mui/material"
import { useState } from "react";

const CustomSelectField = ({ name } : { name: string }) => {

    const [value, setValue] = useState('');

    return (
        <>
            <Typography textAlign="left" component="p" fontSize={14} fontWeight={500} sx={{ color: '#2F342E', fontFamily: 'Inter' }} mb="0.35vh">{ name }</Typography>
            <FormControl fullWidth>
                <Select
                value={value}
                onChange={(e) => setValue(e.target.value)}
                displayEmpty
                inputProps={{ 'aria-label': 'Selecciona una opción' }}
                sx={{
                    backgroundColor: '#fff',
                    borderRadius: '12px',
                    '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#f2f2f2',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#ccc',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#4dabf5',
                    },
                }}
                >
                <MenuItem value="" disabled>
                    Selecciona...
                </MenuItem>
                <MenuItem value="opcion1">Opción 1</MenuItem>
                <MenuItem value="opcion2">Opción 2</MenuItem>
                <MenuItem value="opcion3">Opción 3</MenuItem>
                </Select>
            </FormControl>
        </>
    )
}

export default CustomSelectField