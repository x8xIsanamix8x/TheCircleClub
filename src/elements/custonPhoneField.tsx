import {
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
  FormHelperText,
} from '@mui/material';

interface Props {
  name: string;
  areaCode: string;
  phoneNumber: string;
  onAreaChange: (value: string) => void;
  onPhoneChange: (value: string) => void;
  error?: boolean;
  helperText?: string;
}

const CustomPhoneField = ({
  name,
  areaCode,
  phoneNumber,
  onAreaChange,
  onPhoneChange,
  error = false,
  helperText = '',
}: Props) => (
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
        <FormControl fullWidth error={error}>
          <Select
            value={areaCode}
            onChange={(e) => onAreaChange(e.target.value)}
            displayEmpty
            sx={{
              '& .MuiSelect-select': {
                backgroundColor: '#FFF', // ✅ solo el input tiene fondo
              },
              borderTopLeftRadius: '12px',
              borderBottomLeftRadius: '12px',
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: error ? '#f44336' : '#f2f2f2',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: error ? '#f44336' : '#ccc',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: error ? '#f44336' : '#4dabf5',
              },
            }}
          >
            <MenuItem value="" disabled>+</MenuItem>
            <MenuItem value="+1">+1 (EE. UU., Canadá, varios países del Caribe)</MenuItem>
            <MenuItem value="+7">+7 (Rusia, Kazajistán)</MenuItem>
            <MenuItem value="+20">+20 (Egipto)</MenuItem>
            <MenuItem value="+27">+27 (Sudáfrica)</MenuItem>
            <MenuItem value="+30">+30 (Grecia)</MenuItem>
            <MenuItem value="+31">+31 (Países Bajos)</MenuItem>
            <MenuItem value="+32">+32 (Bélgica)</MenuItem>
            <MenuItem value="+33">+33 (Francia)</MenuItem>
            <MenuItem value="+34">+34 (España)</MenuItem>
            <MenuItem value="+36">+36 (Hungría)</MenuItem>
            <MenuItem value="+39">+39 (Italia)</MenuItem>
            <MenuItem value="+40">+40 (Rumanía)</MenuItem>
            <MenuItem value="+41">+41 (Suiza)</MenuItem>
            <MenuItem value="+44">+44 (Reino Unido)</MenuItem>
            <MenuItem value="+45">+45 (Dinamarca)</MenuItem>
            <MenuItem value="+46">+46 (Suecia)</MenuItem>
            <MenuItem value="+47">+47 (Noruega)</MenuItem>
            <MenuItem value="+48">+48 (Polonia)</MenuItem>
            <MenuItem value="+49">+49 (Alemania)</MenuItem>
            <MenuItem value="+51">+51 (Perú)</MenuItem>
            <MenuItem value="+52">+52 (México)</MenuItem>
            <MenuItem value="+53">+53 (Cuba)</MenuItem>
            <MenuItem value="+54">+54 (Argentina)</MenuItem>
            <MenuItem value="+55">+55 (Brasil)</MenuItem>
            <MenuItem value="+56">+56 (Chile)</MenuItem>
            <MenuItem value="+57">+57 (Colombia)</MenuItem>
            <MenuItem value="+58">+58 (Venezuela)</MenuItem>
            <MenuItem value="+60">+60 (Malasia)</MenuItem>
            <MenuItem value="+61">+61 (Australia)</MenuItem>
            <MenuItem value="+62">+62 (Indonesia)</MenuItem>
            <MenuItem value="+63">+63 (Filipinas)</MenuItem>
            <MenuItem value="+64">+64 (Nueva Zelanda)</MenuItem>
            <MenuItem value="+65">+65 (Singapur)</MenuItem>
            <MenuItem value="+66">+66 (Tailandia)</MenuItem>
            <MenuItem value="+81">+81 (Japón)</MenuItem>
            <MenuItem value="+82">+82 (Corea del Sur)</MenuItem>
            <MenuItem value="+84">+84 (Vietnam)</MenuItem>
            <MenuItem value="+86">+86 (China)</MenuItem>
            <MenuItem value="+90">+90 (Turquía)</MenuItem>
            <MenuItem value="+91">+91 (India)</MenuItem>
            <MenuItem value="+92">+92 (Pakistán)</MenuItem>
            <MenuItem value="+93">+93 (Afganistán)</MenuItem>
            <MenuItem value="+94">+94 (Sri Lanka)</MenuItem>
            <MenuItem value="+95">+95 (Myanmar)</MenuItem>
            <MenuItem value="+98">+98 (Irán)</MenuItem>
            <MenuItem value="+211">+211 (Sudán del Sur)</MenuItem>
            <MenuItem value="+212">+212 (Marruecos)</MenuItem>
            <MenuItem value="+213">+213 (Argelia)</MenuItem>
            <MenuItem value="+216">+216 (Túnez)</MenuItem>
            <MenuItem value="+218">+218 (Libia)</MenuItem>
            <MenuItem value="+220">+220 (Gambia)</MenuItem>
            <MenuItem value="+221">+221 (Senegal)</MenuItem>
            <MenuItem value="+222">+222 (Mauritania)</MenuItem>
            <MenuItem value="+223">+223 (Malí)</MenuItem>
            <MenuItem value="+224">+224 (Guinea)</MenuItem>
            <MenuItem value="+225">+225 (Costa de Marfil)</MenuItem>
            <MenuItem value="+226">+226 (Burkina Faso)</MenuItem>
            <MenuItem value="+227">+227 (Níger)</MenuItem>
            <MenuItem value="+228">+228 (Togo)</MenuItem>
            <MenuItem value="+229">+229 (Benín)</MenuItem>
            <MenuItem value="+230">+230 (Mauricio)</MenuItem>
            <MenuItem value="+231">+231 (Liberia)</MenuItem>
            <MenuItem value="+232">+232 (Sierra Leona)</MenuItem>
            <MenuItem value="+233">+233 (Ghana)</MenuItem>
            <MenuItem value="+234">+234 (Nigeria)</MenuItem>
            <MenuItem value="+235">+235 (Chad)</MenuItem>
            <MenuItem value="+236">+236 (República Centroafricana)</MenuItem>
            <MenuItem value="+237">+237 (Camerún)</MenuItem>
            <MenuItem value="+238">+238 (Cabo Verde)</MenuItem>
            <MenuItem value="+239">+239 (Santo Tomé y Príncipe)</MenuItem>
            <MenuItem value="+240">+240 (Guinea Ecuatorial)</MenuItem>
            <MenuItem value="+241">+241 (Gabón)</MenuItem>
            <MenuItem value="+242">+242 (República del Congo)</MenuItem>
            <MenuItem value="+243">+243 (República Democrática del Congo)</MenuItem>
            <MenuItem value="+244">+244 (Angola)</MenuItem>
            <MenuItem value="+245">+245 (Guinea-Bisáu)</MenuItem>
            <MenuItem value="+246">+246 (Territorio Británico del Océano Índico)</MenuItem>
            <MenuItem value="+247">+247 (Isla Ascensión)</MenuItem>
            <MenuItem value="+248">+248 (Seychelles)</MenuItem>
            <MenuItem value="+249">+249 (Sudán)</MenuItem>
            <MenuItem value="+250">+250 (Ruanda)</MenuItem>
            <MenuItem value="+251">+251 (Etiopía)</MenuItem>
            <MenuItem value="+252">+252 (Somalia)</MenuItem>
            <MenuItem value="+253">+253 (Yibuti)</MenuItem>
            <MenuItem value="+254">+254 (Kenia)</MenuItem>
            <MenuItem value="+255">+255 (Tanzania)</MenuItem>
            <MenuItem value="+256">+256 (Uganda)</MenuItem>
            <MenuItem value="+257">+257 (Burundi)</MenuItem>
            <MenuItem value="+258">+258 (Mozambique)</MenuItem>
            <MenuItem value="+260">+260 (Zambia)</MenuItem>
            <MenuItem value="+261">+261 (Madagascar)</MenuItem>
            <MenuItem value="+262">+262 (Reunión)</MenuItem>
            <MenuItem value="+263">+263 (Zimbabue)</MenuItem>
            <MenuItem value="+264">+264 (Namibia)</MenuItem>
            <MenuItem value="+265">+265 (Malaui)</MenuItem>
            <MenuItem value="+266">+266 (Lesoto)</MenuItem>
            <MenuItem value="+267">+267 (Botsuana)</MenuItem>
            <MenuItem value="+268">+268 (Esuatini)</MenuItem>
            <MenuItem value="+269">+269 (Comoras)</MenuItem>
            <MenuItem value="+290">+290 (Santa Elena)</MenuItem>
            <MenuItem value="+291">+291 (Eritrea)</MenuItem>
            <MenuItem value="+297">+297 (Aruba)</MenuItem>
            <MenuItem value="+298">+298 (Islas Feroe)</MenuItem>
            <MenuItem value="+299">+299 (Groenlandia)</MenuItem>
          </Select>
          {helperText && (
            <FormHelperText sx={{ backgroundColor: 'transparent', mt: '4px', ml: '2px' }}>
              {helperText}
            </FormHelperText>
          )}
        </FormControl>
      </Grid>

      <Grid size={8}>
        <TextField
          value={phoneNumber}
          onChange={(e) => onPhoneChange(e.target.value)}
          variant="outlined"
          fullWidth
          error={error}
          helperText={helperText}
          placeholder="Número de teléfono"
          InputProps={{
            sx: {
              backgroundColor: '#FFF', // ✅ solo el input
              borderTopRightRadius: '12px',
              borderBottomRightRadius: '12px',
            },
          }}
          FormHelperTextProps={{
            sx: {
              backgroundColor: 'transparent',
              mt: '4px',
              ml: '2px',
            },
          }}
          sx={{
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: error ? '#f44336' : '#f2f2f2',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: error ? '#f44336' : '#ccc',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: error ? '#f44336' : '#4dabf5',
            },
          }}
        />
      </Grid>
    </Grid>
  </>
);

export default CustomPhoneField;
