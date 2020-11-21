import React from "react";
import { Paper, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { useBookContext } from "../utils/BookContext";
import Actions from '../utils/Actions';
import API from '../utils/API';

export default function BookDetails() {
  const classes = useStyles();
  const { state, dispatch } = useBookContext();
  const { searchResults, loading } = state;

  const handleSave = async({ title, authors, description, imageLinks, infoLink }) => {
    const savedBook = await API.saveBook({
      image: imageLinks.smallThumbnail,
      link: infoLink,
      title,
      authors,
      description,
    })
    dispatch({ type: Actions.SAVE_BOOK, payload: savedBook})
  }

  return (
    <>
      {loading ? (
        <Paper className={classes.root}>
          <h3>Loading...</h3>
        </Paper>
      ) : (
        searchResults.map((result) => {
          return (
            <Paper className={classes.root} key={result.industryIdentifiers[1]['identifier']}>
              <Grid container>
                <Grid
                  item
                  container
                  xs={12}
                  justify="space-between"
                  alignItems="center"
                >
                  <Grid item>
                    <h3>{result.title}</h3>
                  </Grid>
                  <Grid item className={classes.buttons}>
                    <Button variant="contained">View</Button>
                    <Button variant="contained" onClick={() => handleSave(result)}>Save</Button>
                  </Grid>
                </Grid>
                <Grid item container xs={12}>
                  <Grid item>
                    <h4>
                      Authors:
                      {result.authors.length > 1
                        ? result.authors.map((author) => {
                            return ` ${author} | `;
                          })
                        : result.authors}
                    </h4>
                  </Grid>
                </Grid>
                <Grid item container spacing={2} xs={12}>
                  <Grid item xs={2}>
                    <img src={result.imageLinks.smallThumbnail} alt={result.title} />
                  </Grid>
                  <Grid item xs={10}>
                    <p>{result.description}</p>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          );
        })
      )}
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "5px 0",
    padding: "5px 20px",
  },
  buttons: {
    "& > *": {
      margin: "0 5px",
    },
  },
}));
