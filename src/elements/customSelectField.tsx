import { FormControl, MenuItem, Select, Typography } from "@mui/material";

interface Props {
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}

const CustomSelectField = ({ name, value, onChange, options }: Props) => (
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

    <FormControl fullWidth>
      <Select
        value={value}
        onChange={(e) => onChange(e.target.value)}
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
        {options.map((opt) => (
          <MenuItem key={opt} value={opt}>
            {opt}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </>
);

export default CustomSelectField;
