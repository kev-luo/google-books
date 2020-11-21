import React from 'react'
import { Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import BookDetails from './BookDetails';
import { useBookContext } from '../utils/BookContext';

export default function BooksContainer({location}) {
  const classes = useStyles();
  const { state } = useBookContext();
  const { savedBooks, searchResults, loading } = state;

  const searchBooks = searchResults.map(result => {
    return {
      title: result.title,
      authors: result.authors,
      description: result.description,
      image: result.imageLinks.smallThumbnail,
      link: result.infoLink,
    }
  })

  return (
    <Container className={classes.root}>
      <Paper className={classes.resultsContainer}>
        {location ? (
          <>
            <h3>Saved Books</h3>
            <BookDetails books={savedBooks} loading={loading}/>
          </>
        ) : (
          <>
            <h3>Results</h3>
            <BookDetails books={searchBooks} loading={loading}/>
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