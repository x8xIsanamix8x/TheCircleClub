import { Checkbox, FormControlLabel, Typography, Box } from '@mui/material';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface Props {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const CustomCheckboxField = ({ label, checked, onChange }: Props) => {
  return (
    <Box mb="1.2vh" sx={{ backgroundColor: '#FFF', borderRadius: '12px' }} px="2vh">
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            icon={<RadioButtonUncheckedIcon sx={{ color: '#000' }} />}
            checkedIcon={<CheckCircleIcon sx={{ color: '#000' }} />}
          />
        }
        label={
          <Typography
            fontSize={14}
            fontWeight={500}
            sx={{ color: '#2F342E', fontFamily: 'Inter' }}
          >
            {label}
          </Typography>
        }
      />
    </Box>
  );
};

export default CustomCheckboxField;
