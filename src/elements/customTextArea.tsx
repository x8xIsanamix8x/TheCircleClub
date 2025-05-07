import { TextField, Typography } from "@mui/material";

interface Props {
  name: string;
  value: string;
  onChange: (value: string) => void;
}

const CustomTextArea = ({ name, value, onChange }: Props) => (
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
      multiline
      rows={4}
      placeholder={`Escribe tu ${name}`}
      sx={{
        backgroundColor: '#FFF',
        borderRadius: '12px',
        '& .MuiOutlinedInput-root': {
          paddingY: 1.5,
        },
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

export default CustomTextArea;
