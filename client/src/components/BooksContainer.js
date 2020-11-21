import React, { useState, useEffect } from "react";
import { Container, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import BookDetails from "./BookDetails";
import Actions from "../utils/Actions";
import API from "../utils/API";
import { useBookContext } from "../utils/BookContext";

export default function BooksContainer() {
  const classes = useStyles();
  const { state, dispatch } = useBookContext();
  const { savedBooks, searchResults, loading } = state;
  const location = window.location.pathname;

  async function getSavedBooks() {
    dispatch({ type: Actions.LOADING });
    const { data } = await API.getBooks();
    dispatch({ type: Actions.GET_SAVED_BOOKS, payload: data });
  }

  useEffect(() => {
    getSavedBooks();
  }, []);

  return (
    <Container className={classes.root}>
      <Paper className={classes.resultsContainer}>
        {location === "/saved" ? (
          <>
            <h3>Saved Books</h3>
            {loading ||
              savedBooks.map((book, index) => {
                return <BookDetails key={index} book={book} />;
              })}
          </>
        ) : (
          <>
            <h3>Results</h3>
            {loading ||
              searchResults.map((book, index) => {
                return <BookDetails key={index} book={book} />;
              })}
          </>
        )}
      </Paper>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "20px",
  },
  resultsContainer: {
    padding: "20px",
  },
}));
