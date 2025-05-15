import { FormControl, MenuItem, Select, Typography, FormHelperText } from "@mui/material";

interface Props {
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  error?: boolean;
  helperText?: string;
}

const CustomSelectField = ({ name, value, onChange, options, error = false, helperText = '' }: Props) => (
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

    <FormControl fullWidth error={error}>
      <Select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        displayEmpty
        inputProps={{ 'aria-label': 'Selecciona una opción' }}
        sx={{
          backgroundColor: '#fff',
          borderRadius: '12px',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: error ? '#f44336' : '#f2f2f2',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: error ? '#f44336' : '#ccc',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: error ? '#f44336' : '#4dabf5',
          },
        }}
      >
        <MenuItem value="" disabled>
          Selecciona...
        </MenuItem>
        {options.map((opt) => (
          <MenuItem key={opt} value={opt}>
            {opt}
          </MenuItem>
        ))}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  </>
);

export default CustomSelectField;
