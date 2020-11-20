import React from 'react'
import { Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import BookDetails from './BookDetails';

export default function BooksContainer() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Paper className={classes.resultsContainer}>
        <h3>Results</h3>
        <BookDetails />
      </Paper>
    </Container>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '20px',
  },
  resultsContainer: {
    padding: '20px'
  },
}))