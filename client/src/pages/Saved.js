import React from 'react'

import BooksContainer from '../components/BooksContainer';

export default function Saved(props) {
  return (
    <div>
      <BooksContainer location={props.location.pathname}/>
    </div>
  )
}
