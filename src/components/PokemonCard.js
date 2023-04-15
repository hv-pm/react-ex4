import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function PokemonCard( { name, sprite, types } ) {
  const typeHandler = () => {
    if (types[1]) {
      return types[0].type.name + " | " + types[1].type.name;
    }
    return types[0].type.name;
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={sprite}
          alt={name}
        />
        <CardContent>
          <Box display="flex" flexDirection="column" textTransform="uppercase" justifyContent="space-between" alignItems="center" width="100%">
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography gutterBottom variant="caption" component="div">
              {typeHandler()}
            </Typography>
          </Box>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
  );
}