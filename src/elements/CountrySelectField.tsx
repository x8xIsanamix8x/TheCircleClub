import { FormControl, MenuItem, Select, Typography, FormHelperText } from "@mui/material";
import useCountryList from "../helpers/useCountryList";

interface Props {
  name: string;
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  helperText?: string;
}

const CountrySelectField = ({ name, value, onChange, error = false, helperText = '' }: Props) => {
  const countries = useCountryList();

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

      <FormControl fullWidth error={error}>
        <Select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          displayEmpty
          inputProps={{ 'aria-label': 'Selecciona un país' }}
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
            Selecciona un país...
          </MenuItem>
          {countries.map(({ name, code }) => (
            <MenuItem key={code} value={code}>
              {name}
            </MenuItem>
          ))}
        </Select>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    </>
  );
};

export default CountrySelectField;
