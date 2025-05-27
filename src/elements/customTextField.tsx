import { TextField, Typography } from '@mui/material';

interface Props {
  name: string;
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  helperText?: string;
}

const CustomTextField = ({ name, value, onChange, error = false, helperText = '' }: Props) => (
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
      onChange={(e) => onChange(e.target.value)}
      variant="outlined"
      fullWidth
      placeholder={`Escribe tu ${name.toLowerCase()}`}
      error={error}
      helperText={helperText}
      InputProps={{
        sx: {
          backgroundColor: '#FFF', // ✅ sólo se aplica al input
          borderRadius: '12px',
        },
      }}
      FormHelperTextProps={{
        sx: {
          backgroundColor: 'transparent', // solo por si hereda algo
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

export default CustomTextField;
