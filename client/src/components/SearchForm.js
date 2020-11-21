import React, { useState } from 'react'
import { Container, Paper, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

import API from '../utils/API';
import Actions from '../utils/Actions';
import { useBookContext } from '../utils/BookContext';

export default function SearchForm() {
  const classes = useStyles();
  const { dispatch } = useBookContext();
  const [title, setTitle] = useState('');

  const handleChange = e => {
    const { value } = e.target;
    setTitle(value);
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const { data } = await API.searchTitle(title);
    const response = data.map(result => result.volumeInfo)
    const bookResults = response.map(book => {
      return {
        title: book.title,
        authors: book.authors,
        description: book.description,
        image: book.imageLinks.smallThumbnail,
        link: book.infoLink,
      }
    })
    dispatch({type: Actions.SEARCH_RESULTS, payload: bookResults })
    setTitle('');
  }

  return (
    <Container className={classes.root}>
      <Paper className={classes.formContainer}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <h3>Book Search</h3>
          <TextField fullWidth label="Book Title" value={title} onChange={handleChange}/>
          <Button type="submit" variant="contained" className={classes.button} >Search</Button>
        </form>
      </Paper>
    </Container>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '20px',
  },
  formContainer: {
    padding: '20px'
  },
  form: {
    '& > *': {
      margin: theme.spacing(1),
    }
  },
  button: {
    backgroundColor: "rgb(0,136,169)",
    color: '#fff',
    '&:hover': {
      backgroundColor: "rgba(0,136,169,0.8)"
    }
  }
}))