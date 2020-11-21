import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import { useBookContext } from "../utils/BookContext";
import Actions from '../utils/Actions';
import API from '../utils/API';

export default function SaveButton({ book }) {
  const classes = useStyles();
  const {dispatch} = useBookContext();
  const location = window.location.pathname;

  const handleDelete = async() => {

  }

  const handleSave = async({ title, authors, description, image, link }) => {
    const { data } = await API.saveBook({
      title,
      authors,
      description,
      image,
      link,
    })
    dispatch({ type: Actions.SAVE_BOOK, payload: data})
  }

  return (
    <>
    {location === '/saved' ? (
      <Button variant="contained" onClick={() => handleDelete(book)}>
        Unsave
      </Button>
    ) : (
      <Button variant="contained" onClick={() => handleSave(book)}>
        Save
      </Button>
    )}
    </>
  )
}

const useStyles = makeStyles(theme => ({
  root: {

  }
}))