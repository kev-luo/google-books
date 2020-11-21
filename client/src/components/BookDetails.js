import React from "react";
import { Paper, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import SaveButton from './SaveButton';

export default function BookDetails({books, loading}) {
  const classes = useStyles();

  return (
    <>
      {loading ? (
        <Paper className={classes.root}>
          <h3>Loading...</h3>
        </Paper>
      ) : (
        books.map((book) => {
          return (
            <Paper className={classes.root} key={book.link}>
              <Grid container>
                <Grid
                  item
                  container
                  xs={12}
                  justify="space-between"
                  alignItems="center"
                >
                  <Grid item>
                    <h3>{book.title}</h3>
                  </Grid>
                  <Grid item className={classes.buttons}>
                    <Button variant="contained">View</Button>
                    <SaveButton book={book}/>
                  </Grid>
                </Grid>
                <Grid item container xs={12}>
                  <Grid item>
                    <h4>
                      Authors:
                      {book.authors.length > 1
                        ? book.authors.map((author) => {
                            return ` ${author} | `;
                          })
                        : book.authors}
                    </h4>
                  </Grid>
                </Grid>
                <Grid item container spacing={2} xs={12}>
                  <Grid item xs={2}>
                    <img src={book.image} alt={book.title} />
                  </Grid>
                  <Grid item xs={10}>
                    <p>{book.description}</p>
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
