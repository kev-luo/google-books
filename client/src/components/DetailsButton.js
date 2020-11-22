import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

import { useBookContext } from "../utils/BookContext";
import Actions from "../utils/Actions";

export default function DetailsButton({ book }) {
  const classes = useStyles();
  const { dispatch } = useBookContext();

  const handleDetailView = (book) => {
    dispatch({ type: Actions.VIEW_DETAILS, payload: book });
  };

  return (
    <>
    {window.location.pathname.split("/").length > 2 ? (
      <a className={classes.details} href={book.link} target="_blank">
        <Button variant="contained">
          Visit Google Books
        </Button>
      </a>
    ) : (
      <Link className={classes.details} to={`/book/${book.title}`}>
        <Button variant="contained" onClick={() => handleDetailView(book)}>
          View
        </Button>
      </Link>
    )}
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  details: {
    textDecoration: "none",
  },
}));
