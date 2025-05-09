import { Box, Button, Typography } from '@mui/material';
import { useRef } from 'react';

interface Props {
  name: string;
  file: File | null;
  onChange: (file: File | null) => void;
}

const CustomImageUploadField = ({ name, file, onChange }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] ?? null;
    onChange(selectedFile);
  };

  return (
    <>
      <Typography
        textAlign="left"
        fontSize={14}
        fontWeight={500}
        sx={{ color: '#2F342E', fontFamily: 'Inter' }}
        mb="0.7vh"
      >
        {name}
      </Typography>

      <input
        type="file"
        accept="image/*"
        hidden
        ref={inputRef}
        onChange={handleFileChange}
      />

      <Button
        variant="outlined"
        onClick={() => inputRef.current?.click()}
        fullWidth
        sx={{
          borderRadius: '12px',
          textTransform: 'none',
          borderColor: '#f2f2f2',
          backgroundColor: '#FFF',
          '&:hover': {
            borderColor: '#ccc',
          },
        }}
      >
        {file ? file.name : `Selecciona una imagen`}
      </Button>

      {file && (
        <Box mt={1}>
          <Typography fontSize={12} color="#2F342E" fontFamily="Inter">
            Imagen seleccionada: {file.name}
          </Typography>
        </Box>
      )}
    </>
  );
};

export default CustomImageUploadField;
