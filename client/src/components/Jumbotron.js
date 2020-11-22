import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Paper } from "@material-ui/core";

export default function Jumbotron() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Paper className={classes.jumbotron}>
        <h1 className={classes.title}>(React) Google Books Search</h1>
        <h2 className={classes.title}>Search for and save books of interest</h2>
      </Paper>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "20px",
  },
  title: {
    textAlign: "center",
  },
  jumbotron: {
    padding: "30px 0",
  },
}));
