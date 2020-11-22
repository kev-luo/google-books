import React from "react";
import { Button } from "@material-ui/core";

import { useBookContext } from "../utils/BookContext";
import Actions from "../utils/Actions";
import API from "../utils/API";

export default function SaveButton({ book }) {
  const { state, dispatch } = useBookContext();
  const location = window.location.pathname;
  const { bookDetails } = state

  const handleDelete = async (book) => {
    await API.deleteBook(book._id);
    dispatch({ type: Actions.DELETE_BOOK, payload: book._id });
  };

  const handleSave = async (book) => {
    const { data } = await API.saveBook(book);
    dispatch({ type: Actions.SAVE_BOOK, payload: data });
    dispatch({ type: Actions.UPDATE_SEARCH_RESULTS, payload: book });
  };

  return (
    <>
      {location === "/saved" || bookDetails._id ? (
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