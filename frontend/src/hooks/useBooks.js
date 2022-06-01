import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import BooksContext from '../context/BooksContext';

export default function useBooks() {
    const [loading, setLoading] = useState(false);
    const {books, setBooks} = useContext(BooksContext)


    useEffect(() => {
        setLoading(true)
        axios.get("https://localhost:44341/api/books").then(response => {
            setBooks(response.data)
            setLoading(false)
        })
    }, [setBooks])
  
    return {loading, books, setBooks}
}
