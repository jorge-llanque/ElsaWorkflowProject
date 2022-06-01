import React, { useState } from 'react'

const Context = React.createContext({})

export function BooksContextProvider({ children }) {
  const [books, setBooks] = useState([])

  return (
    <Context.Provider value={{ books, setBooks }}>{children}</Context.Provider>
  )
}

export default Context
