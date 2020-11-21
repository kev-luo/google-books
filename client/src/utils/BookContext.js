import React, { useContext, useReducer } from 'react';
import Actions from './Actions';

const initialState = {
  searchResults: [],
  savedBooks: [],
  bookDetails: {
    title: '',
    authors: [],
    description: '',
    image: '',
    link: '',
  },
  loading: true,
}

function reducer(state, { type, payload }) {
  switch(type) {
    case Actions.LOADING:
      return {
        ...state,
        loading: true
      }
    case Actions.SEARCH_RESULTS:
      return {
        ...state,
        searchResults: payload,
        loading: false,
      }
    case Actions.SAVE_BOOK:
      return {
        ...state,
        savedBooks: [...state.savedBooks, payload]
      }
    case Actions.GET_SAVED_BOOKS:
      return {
        ...state,
        savedBooks: payload,
        loading: false,
      }
    case Actions.DELETE_BOOK:
      const filteredBooks = state.savedBooks.filter(book => {
        return book._id !== payload
      })
      return {
        ...state,
        savedBooks: filteredBooks,
        loading: false,
      }
    default: 
      return state
  }
}

const BookContext = React.createContext(initialState)

const BookProvider = ({...props}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BookContext.Provider value={{ state, dispatch }} {...props} />
  )
}

const useBookContext = () => {
  return useContext(BookContext);
}

export { useBookContext, BookProvider }