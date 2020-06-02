import React from 'react';
import {Link} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles'; 
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions'; 
import Typography from '@material-ui/core/Typography';  
import { Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
    marginTop: 15,
    marginRight: 10
  }, 
  boton: {
    justifyContent: 'center',
    marginBottom:'5%'
    
  },
  media: {
    height: 0,
    paddingTop: '50%', 
  } 
}));

export default function Game({game}) { 
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader 
        title={game.name} 
        subheader={`Released: ${game.released}`}
      />
      <CardMedia
        className={classes.media}
        image={game.background_image}
        title={game.name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>

      </CardContent> 
      <CardActions className={classes.boton}>  
        <Link className="buttonPrimary" to={  `/game/${ game.id }` }>
            <Button variant="contained" color="primary">
              See more... 
            </Button> 
        </Link>
      </CardActions>
    </Card>
  );
}