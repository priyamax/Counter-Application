import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function CardComponent(props) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         {props.heading}
        </Typography>
        <Typography variant="h5" component="div">
          {props.subheading}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          
        </Typography>
        <Typography variant="body2">
         {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={props.Togglefunction}>Learn More</Button>
      </CardActions>
    </Card>
  );
}

