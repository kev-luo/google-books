import React from "react";
import { Button } from "@material-ui/core";

import { useBookContext } from "../utils/BookContext";
import Actions from "../utils/Actions";
import API from "../utils/API";

export default function SaveButton({ book }) {
  const { state, dispatch } = useBookContext();
  const { savedBooks } = state

  const handleDelete = async (book) => {
    await API.deleteBook(book.googleId);
    dispatch({ type: Actions.DELETE_BOOK, payload: book.googleId });
  };

  const handleSave = async (book) => {
    const { data } = await API.saveBook(book);
    dispatch({ type: Actions.SAVE_BOOK, payload: data });
  };

  const isBookSaved = () => {
    const currentBookId = book.googleId
    const savedCount = savedBooks.reduce((acc, val) => {
      return acc + (currentBookId === val.googleId)
    }, 0)
    return savedCount;
  }

  return (
    <>
      {isBookSaved() ? (
        <Button variant="contained" onClick={() => handleDelete(book)}>
          Unsave
        </Button>
      ) : (
        <Button variant="contained" onClick={() => handleSave(book)}>
          Save
        </Button>
      )}
    </>
  );
}