import { ImageList, ImageListItem } from '@mui/material';
import Influencer1 from '../assets/Header/Persona1.jpg';
import Influencer2 from '../assets/Header/Persona2.jpg';
import Influencer3 from '../assets/Header/Persona3.jpg';

const itemData = [
  { img: Influencer1, cols: 1, rows: 2 },
  { img: Influencer2, cols: 2, rows: 2 },
  { img: Influencer3, cols: 1, rows: 4 },
  { img: Influencer2, cols: 2, rows: 2 },
  { img: Influencer1, cols: 1, rows: 2 },
  { img: Influencer3, cols: 1, rows: 2 },
  { img: Influencer2, cols: 2, rows: 2 },
];

const ImageSection = () => (
  <ImageList
    sx={{ width: '100%', height: 'auto', marginTop: 4 }}
    variant="quilted"
    cols={4}
    rowHeight={121}
  >
    {itemData.map((item, index) => (
      <ImageListItem key={index} cols={item.cols} rows={item.rows}>
        <img
          src={item.img}
          alt={`influencer-${index}`}
          loading="lazy"
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            borderRadius: '8px',
          }}
        />
      </ImageListItem>
    ))}
  </ImageList>
);

export default ImageSection;