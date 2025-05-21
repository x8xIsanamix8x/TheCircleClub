import { FormControl, MenuItem, Select, Typography, FormHelperText } from "@mui/material";

interface Props {
  name: string;
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  helperText?: string;
  cities: string[];
}

const CitySelectField = ({ name, value, onChange, error = false, helperText = '', cities }: Props) => {
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
          inputProps={{ 'aria-label': 'Selecciona una ciudad' }}
          sx={{
            backgroundColor: '#fff',
            borderRadius: '12px',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: error ? '#f44336' : '#f2f2f2',
            },
          }}
        >
          <MenuItem value="" disabled>
            Selecciona una ciudad...
          </MenuItem>
          {cities.map((city) => (
            <MenuItem key={city} value={city}>
              {city}
            </MenuItem>
          ))}
        </Select>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    </>
  );
};

export default CitySelectField;
