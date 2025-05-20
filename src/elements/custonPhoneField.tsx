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
            <MenuItem value="+1">🇺🇸 +1</MenuItem>
            <MenuItem value="+7">🇷🇺 +7</MenuItem>
            <MenuItem value="+20">🇪🇬 +20</MenuItem>
            <MenuItem value="+27">🇿🇦 +27</MenuItem>
            <MenuItem value="+30">🇬🇷 +30</MenuItem>
            <MenuItem value="+31">🇳🇱 +31</MenuItem>
            <MenuItem value="+32">🇧🇪 +32</MenuItem>
            <MenuItem value="+33">🇫🇷 +33</MenuItem>
            <MenuItem value="+34">🇪🇸 +34</MenuItem>
            <MenuItem value="+36">🇭🇺 +36</MenuItem>
            <MenuItem value="+39">🇮🇹 +39</MenuItem>
            <MenuItem value="+40">🇷🇴 +40</MenuItem>
            <MenuItem value="+41">🇨🇭 +41</MenuItem>
            <MenuItem value="+44">🇬🇧 +44</MenuItem>
            <MenuItem value="+45">🇩🇰 +45</MenuItem>
            <MenuItem value="+46">🇸🇪 +46</MenuItem>
            <MenuItem value="+47">🇳🇴 +47</MenuItem>
            <MenuItem value="+48">🇵🇱 +48</MenuItem>
            <MenuItem value="+49">🇩🇪 +49</MenuItem>
            <MenuItem value="+51">🇵🇪 +51</MenuItem>
            <MenuItem value="+52">🇲🇽 +52</MenuItem>
            <MenuItem value="+53">🇨🇺 +53</MenuItem>
            <MenuItem value="+54">🇦🇷 +54</MenuItem>
            <MenuItem value="+55">🇧🇷 +55</MenuItem>
            <MenuItem value="+56">🇨🇱 +56</MenuItem>
            <MenuItem value="+57">🇨🇴 +57</MenuItem>
            <MenuItem value="+58">🇻🇪 +58</MenuItem>
            <MenuItem value="+60">🇲🇾 +60</MenuItem>
            <MenuItem value="+61">🇦🇺 +61</MenuItem>
            <MenuItem value="+62">🇮🇩 +62</MenuItem>
            <MenuItem value="+63">🇵🇭 +63</MenuItem>
            <MenuItem value="+64">🇳🇿 +64</MenuItem>
            <MenuItem value="+65">🇸🇬 +65</MenuItem>
            <MenuItem value="+66">🇹🇭 +66</MenuItem>
            <MenuItem value="+81">🇯🇵 +81</MenuItem>
            <MenuItem value="+82">🇰🇷 +82</MenuItem>
            <MenuItem value="+84">🇻🇳 +84</MenuItem>
            <MenuItem value="+86">🇨🇳 +86</MenuItem>
            <MenuItem value="+90">🇹🇷 +90</MenuItem>
            <MenuItem value="+91">🇮🇳 +91</MenuItem>
            <MenuItem value="+92">🇵🇰 +92</MenuItem>
            <MenuItem value="+93">🇦🇫 +93</MenuItem>
            <MenuItem value="+94">🇱🇰 +94</MenuItem>
            <MenuItem value="+95">🇲🇲 +95</MenuItem>
            <MenuItem value="+98">🇮🇷 +98</MenuItem>
            <MenuItem value="+211">+211</MenuItem>
            <MenuItem value="+212">🇲🇦 +212</MenuItem>
            <MenuItem value="+213">🇩🇿 +213</MenuItem>
            <MenuItem value="+216">🇹🇳 +216</MenuItem>
            <MenuItem value="+218">🇱🇾 +218</MenuItem>
            <MenuItem value="+220">+220</MenuItem>
            <MenuItem value="+221">🇸🇳 +221</MenuItem>
            <MenuItem value="+222">🇲🇷 +222</MenuItem>
            <MenuItem value="+223">🇲🇱 +223</MenuItem>
            <MenuItem value="+224">🇬🇳 +224</MenuItem>
            <MenuItem value="+225">🇨🇮 +225</MenuItem>
            <MenuItem value="+226">🇧🇫 +226</MenuItem>
            <MenuItem value="+227">🇳🇪 +227</MenuItem>
            <MenuItem value="+228">🇹🇬 +228</MenuItem>
            <MenuItem value="+229">🇧🇯 +229</MenuItem>
            <MenuItem value="+230">🇲🇺 +230</MenuItem>
            <MenuItem value="+231">🇱🇷 +231</MenuItem>
            <MenuItem value="+232">🇸🇱 +232</MenuItem>
            <MenuItem value="+233">🇬🇭 +233</MenuItem>
            <MenuItem value="+234">🇳🇬 +234</MenuItem>
            <MenuItem value="+235">🇹🇩 +235</MenuItem>
            <MenuItem value="+236">🇨🇫 +236</MenuItem>
            <MenuItem value="+237">🇨🇲 +237</MenuItem>
            <MenuItem value="+238">🇨🇻 +238</MenuItem>
            <MenuItem value="+239">🇸🇹 +239</MenuItem>
            <MenuItem value="+240">🇬🇶 +240</MenuItem>
            <MenuItem value="+241">🇬🇦 +241</MenuItem>
            <MenuItem value="+242">🇨🇬 +242</MenuItem>
            <MenuItem value="+243">🇨🇩 +243</MenuItem>
            <MenuItem value="+244">🇦🇴 +244</MenuItem>
            <MenuItem value="+245">+245</MenuItem>
            <MenuItem value="+246">+246</MenuItem>
            <MenuItem value="+247">+247</MenuItem>
            <MenuItem value="+248">🇸🇨 +248</MenuItem>
            <MenuItem value="+249">🇸🇩 +249</MenuItem>
            <MenuItem value="+250">🇷🇼 +250</MenuItem>
            <MenuItem value="+251">🇪🇹 +251</MenuItem>
            <MenuItem value="+252">🇸🇴 +252</MenuItem>
            <MenuItem value="+253">🇩🇯 +253</MenuItem>
            <MenuItem value="+254">🇰🇪 +254</MenuItem>
            <MenuItem value="+255">🇹🇿 +255</MenuItem>
            <MenuItem value="+256">🇺🇬 +256</MenuItem>
            <MenuItem value="+257">🇧🇮 +257</MenuItem>
            <MenuItem value="+258">🇲🇿 +258</MenuItem>
            <MenuItem value="+260">🇿🇲 +260</MenuItem>
            <MenuItem value="+261">🇲🇬 +261</MenuItem>
            <MenuItem value="+262">🇷🇪 +262</MenuItem>
            <MenuItem value="+263">🇿🇼 +263</MenuItem>
            <MenuItem value="+264">🇳🇦 +264</MenuItem>
            <MenuItem value="+265">🇲🇼 +265</MenuItem>
            <MenuItem value="+266">🇱🇸 +266</MenuItem>
            <MenuItem value="+267">🇧🇼 +267</MenuItem>
            <MenuItem value="+268">🇸🇿 +268</MenuItem>
            <MenuItem value="+269">🇰🇲 +269</MenuItem>
            <MenuItem value="+290">+290</MenuItem>
            <MenuItem value="+291">+291</MenuItem>
            <MenuItem value="+297">🇦🇼 +297</MenuItem>
            <MenuItem value="+298">🇫🇴 +298</MenuItem>
            <MenuItem value="+299">🇬🇱 +299</MenuItem>

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
