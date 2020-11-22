import React, { useState } from "react";
import { Container, Paper, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import noImage from "../assets/no-image.jpg";

import API from "../utils/API";
import Actions from "../utils/Actions";
import { useBookContext } from "../utils/BookContext";

export default function SearchForm() {
  const classes = useStyles();
  const { dispatch } = useBookContext();
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setTitle(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await API.searchTitle(title);
    let bookResults;
    if (data) {
      bookResults = data.map((result) => {
        const { volumeInfo } = result;
        const imageLink =
          volumeInfo.imageLinks && volumeInfo.imageLinks.smallThumbnail;
        return {
          title: volumeInfo.title || "No Title",
          authors: volumeInfo.authors || ["No Authors"],
          description: volumeInfo.description || "No Description",
          image: imageLink || noImage,
          link: volumeInfo.infoLink || "No Link",
          googleId: result.id || "No ID",
        };
      });
    } else {
      bookResults = <p>No results...</p>;
    }
    console.log(bookResults);
    dispatch({ type: Actions.SEARCH_RESULTS, payload: bookResults });
    setTitle("");
  };

  return (
    <Container className={classes.root}>
      <Paper className={classes.formContainer}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <h3>Book Search</h3>
          <TextField
            fullWidth
            label="Book Title"
            value={title}
            onChange={handleChange}
          />
          <Button
            disabled={title.trim().length === 0}
            type="submit"
            variant="contained"
            className={classes.button}
          >
            Search
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "20px",
  },
  formContainer: {
    padding: "20px",
  },
  form: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  button: {
    backgroundColor: "rgb(0,136,169)",
    color: "#fff",
    "&:hover": {
      backgroundColor: "rgba(0,136,169,0.8)",
    },
  },
}));
