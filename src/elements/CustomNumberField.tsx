import { TextField, Typography } from '@mui/material';

interface Props {
  name: string;
  value: string;
  onChange: (value: string) => void;
}

const CustomNumberField = ({ name, value, onChange }: Props) => {
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
        placeholder={`Escribe tu ${name}`}
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
        sx={{
          backgroundColor: '#FFF',
          borderRadius: '12px',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#f2f2f2',
            borderRadius: '12px',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ccc',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#4dabf5',
          },
        }}
      />
    </>
  );
};

export default CustomNumberField;
