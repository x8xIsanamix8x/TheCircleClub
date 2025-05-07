import { useState } from 'react';
import {
  TextField,
  Typography,
  IconButton,
  InputAdornment
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface Props {
  name: string;
  value: string;
  onChange: (value: string) => void;
}

const CustomHideTextField = ({ name, value, onChange }: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleToggleVisibility = () => {
    setShowPassword(prev => !prev);
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
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        variant="outlined"
        fullWidth
        placeholder={`Escribe tu ${name}`}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleToggleVisibility} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
          sx: {
            backgroundColor: '#FFF',
            borderRadius: '12px',
            paddingRight: 1,
          },
        }}
        sx={{
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

export default CustomHideTextField;
