import React from 'react'
import { Container, Paper, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

export default function SearchForm() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Paper className={classes.formContainer}>
        <form>
          <h3>Book Search</h3>
          <TextField fullWidth label="Book Title"/>
          <Button type="submit">Search</Button>
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
    padding: '30px'
  }
}))