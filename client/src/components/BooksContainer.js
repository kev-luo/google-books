import React from 'react'
import { Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import BookDetails from './BookDetails';
import { useBookContext } from '../utils/BookContext';

export default function BooksContainer({location}) {
  const classes = useStyles();
  const { state } = useBookContext();
  const { savedBooks } = state;

  return (
    <Container className={classes.root}>
      <Paper className={classes.resultsContainer}>
        {location ? (
          <>
            <h3>Saved Books</h3>
            <BookDetails />
          </>
        ) : (
          <>
            <h3>Results</h3>
            <BookDetails />
          </>
        )}
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