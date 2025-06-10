import { Box, Button, Typography, FormHelperText } from '@mui/material';
import { useRef, RefObject } from 'react';

interface Props {
  name: string;
  file: File | null;
  onChange: (file: File | null) => void;
  error?: boolean;
  helperText?: string;
  inputRef?: RefObject<HTMLInputElement>; 
}

const CustomImageUploadField = ({
  name,
  file,
  onChange,
  error = false,
  helperText = '',
  inputRef, 
}: Props) => {
  
  const internalRef = useRef<HTMLInputElement>(null);
  const fileInputRef = inputRef ?? internalRef;

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
        ref={fileInputRef} 
        onChange={handleFileChange}
      />

      <Button
        variant="outlined"
        onClick={() => fileInputRef.current?.click()}
        fullWidth
        sx={{
          borderRadius: '12px',
          textTransform: 'none',
          borderColor: error ? '#f44336' : '#f2f2f2',
          backgroundColor: '#FFF',
          color: '#2F342E',
          '&:hover': {
            borderColor: error ? '#f44336' : '#ccc',
          },
        }}
      >
        {file ? file.name : `Selecciona una imagen`}
      </Button>

      {helperText && (
        <FormHelperText error={error} sx={{ mt: '0.4vh', ml: '0.5vh' }}>
          {helperText}
        </FormHelperText>
      )}

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
