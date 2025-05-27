import { TextField, Typography } from '@mui/material';

interface Props {
  name: string;
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  helperText?: string;
}

const CustomNumberField = ({ name, value, onChange, error = false, helperText = '' }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue = e.target.value.replace(/\D/g, ''); // elimina todo lo que no sea número
    onChange(numericValue);
  };

  return (
    <>
      <Typography
        textAlign="left"
        component="p"
        fontSize={14}
        fontWeight={500}
        sx={{ color: '#2F342E', fontFamily: 'Inter' }}
        mb="0.35vh"
      >
        {name}
      </Typography>

      <TextField
        value={value}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        placeholder={`Escribe tu ${name.toLowerCase()}`}
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
        error={error}
        helperText={helperText}
        InputProps={{
          sx: {
            backgroundColor: '#FFF', // ✅ sólo el input tiene fondo blanco
            borderRadius: '12px',
          },
        }}
        FormHelperTextProps={{
          sx: {
            backgroundColor: 'transparent', // ✅ evita fondo blanco en el helper
            mt: '4px',
            ml: '2px',
          },
        }}
        sx={{
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: error ? '#f44336' : '#f2f2f2',
            borderRadius: '12px',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: error ? '#f44336' : '#ccc',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: error ? '#f44336' : '#4dabf5',
          },
        }}
      />
    </>
  );
};

export default CustomNumberField;
