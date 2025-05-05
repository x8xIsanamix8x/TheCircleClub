import { TextField, Typography } from "@mui/material";

const CustomTextArea = ({ name }: { name: string }) => {
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
        variant="outlined"
        fullWidth
        multiline
        rows={4} // Puedes ajustar el número de filas visibles
        placeholder={`Escribe tu ${name}`}
        sx={{
          backgroundColor: '#FFF',
          borderRadius: '12px',
          '& .MuiOutlinedInput-root': {
            paddingY: 1.5, // Padding vertical interno
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
};

export default CustomTextArea;
