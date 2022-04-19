import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgressWithLabel from './LinearWithLabel';


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function LinearProgression({increase=0,show=false}) {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
        {
            show&&(<LinearProgressWithLabel value={increase} />)
        }
      
    </div>
  );
}
