import React from 'react'
import { Container, Paper, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

export default function SearchForm() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Paper className={classes.formContainer}>
        <form className={classes.form}>
          <h3>Book Search</h3>
          <TextField fullWidth label="Book Title"/>
          <Button type="submit" variant="contained" className={classes.button} >Search</Button>
        </form>
      </Paper>
    </Container>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '20px',
  },
  formContainer: {
    padding: '20px'
  },
  form: {
    '& > *': {
      margin: theme.spacing(1),
    }
  },
  button: {
    backgroundColor: "rgb(0,136,169)",
    color: '#fff',
    '&:hover': {
      backgroundColor: "rgba(0,136,169,0.8)"
    }
  }
}))