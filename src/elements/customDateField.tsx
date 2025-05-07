import { Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { es } from 'date-fns/locale';

interface Props {
  name: string;
  value: Date | null;
  onChange: (value: Date | null) => void;
}

const CustomDateField = ({ name, value, onChange }: Props) => {
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

      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={es}>
        <DatePicker
          value={value}
          onChange={onChange}
          maxDate={new Date()}
          slotProps={{
            textField: {
              fullWidth: true,
              placeholder: `Selecciona ${name}`,
              sx: {
                backgroundColor: '#FFF',
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
              },
            },
          }}
        />
      </LocalizationProvider>
    </>
  );
};

export default CustomDateField;
