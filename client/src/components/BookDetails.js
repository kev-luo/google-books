import React from 'react'
import { Paper, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default function BookDetails() {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Grid container>
        <Grid item container xs={12} justify="space-between" alignItems="center">
          <Grid item>
            <h3>Title</h3>
          </Grid>
          <Grid item className={classes.buttons}>
            <Button variant="contained">View</Button>
            <Button variant="contained">Save</Button>
          </Grid>
        </Grid>
        <Grid item container xs={12}>
          <Grid item>
            <h4>Authors:</h4>
          </Grid>
        </Grid>
        <Grid item container spacing={2} xs={12}>
          <Grid item xs={2}>
            <p>image here</p>
          </Grid>
          <Grid item>
            <p>description</p>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    margin: "5px 0",
    padding: "5px 20px"
  },
  buttons: {
    '& > *': {
      margin: "0 5px"
    }
  }
}))