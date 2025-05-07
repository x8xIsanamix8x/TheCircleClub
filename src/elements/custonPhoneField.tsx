import { FormControl, Grid, MenuItem, Select, TextField, Typography } from '@mui/material';

interface Props {
  name: string;
  areaCode: string;
  phoneNumber: string;
  onAreaChange: (value: string) => void;
  onPhoneChange: (value: string) => void;
}

const CustomPhoneField = ({ name, areaCode, phoneNumber, onAreaChange, onPhoneChange }: Props) => (
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

    <Grid container width="100%" wrap="nowrap">
      <Grid size={4}>
        <FormControl fullWidth>
          <Select
            value={areaCode}
            onChange={(e) => onAreaChange(e.target.value)}
            displayEmpty
            sx={{
              backgroundColor: '#fff',
              borderTopLeftRadius: '12px',
              borderBottomLeftRadius: '12px',
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
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
            <MenuItem value="" disabled>+</MenuItem>
            <MenuItem value="+58">+58</MenuItem>
            <MenuItem value="+57">+57</MenuItem>
            <MenuItem value="+1">+1</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid size={8}>
        <TextField
          value={phoneNumber}
          onChange={(e) => onPhoneChange(e.target.value)}
          variant="outlined"
          fullWidth
          placeholder="Número de teléfono"
          sx={{
            backgroundColor: '#FFF',
            borderTopRightRadius: '12px',
            borderBottomRightRadius: '12px',
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
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
        />
      </Grid>
    </Grid>
  </>
);

export default CustomPhoneField;
