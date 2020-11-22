import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { useBookContext } from "../utils/BookContext";
import BookDetails from "../components/BookDetails";

export default function SingleBook() {
  const classes = useStyles();
  const { state } = useBookContext();
  return (
    <div className={classes.root}>
      <BookDetails book={state.bookDetails} />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "25px 25px",
  },
}));
