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
    case Actions.SEARCH_RESULTS:
      return {
        ...state,
        searchResults: payload,
        loading: false,
      }
    case Actions.VIEW_BOOK:
      return {
        ...state,
        bookDetails: payload,
        loading: false,
      }
    case Actions.LOADING:
      return {
        ...state,
        loading: true
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