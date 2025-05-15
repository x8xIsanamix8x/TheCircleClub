import { Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { es } from 'date-fns/locale';

interface Props {
  name: string;
  value: Date | null;
  onChange: (value: Date | null) => void;
  error?: boolean;
  helperText?: string;
}

const CustomDateField = ({
  name,
  value,
  onChange,
  error = false,
  helperText = ''
}: Props) => {
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
              error,
              helperText,
              placeholder: `Selecciona ${name}`,
              InputProps: {
                sx: {
                  backgroundColor: '#FFF', // ✅ solo input
                  borderRadius: '12px',
                },
              },
              FormHelperTextProps: {
                sx: {
                  backgroundColor: 'transparent', // ✅ evita fondo blanco en helper
                  mt: '4px',
                  ml: '2px',
                },
              },
              sx: {
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
              },
            },
          }}
        />
      </LocalizationProvider>
    </>
  );
};

export default CustomDateField;
