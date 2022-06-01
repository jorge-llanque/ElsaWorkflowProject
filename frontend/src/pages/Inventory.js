import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Modal from '../components/Modal';
import useBooks from '../hooks/useBooks';


export default function Inventory() {
  const {loading, books} = useBooks();

  const [showModal, setShowModal] = useState(false)

  console.log(loading, books)

  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900">List of Books</h2>
      <div className="my-2 flex flex-row-reverse">
        <button 
        className="inline-flex items-center px-4 py-2 rounded-md shadow-sm text-white text-sm bg-blue-600"
        onClick={() =>setShowModal(true)}
        >
          New Item
        </button>
      </div>
      <div className="my-2 flex flex-col">
        <table className="table-auto">
        <thead className="bg-blue-200">
          <tr>
            <th className="w-1/4 ...">Title</th>
            <th className="w-1/4 ...">Author</th>
            <th className="w-1/8 ...">Popularity</th>
            <th className="w-1/8 ...">Cantity Pages</th>
            <th className="w-1/4 ...">Operations</th>
          </tr>
        </thead>
        <tbody className="bg-gray-50">
          {
            books.map(elem =>{
              return (<tr key={elem.releaseDate}>
              <td>{elem.title}</td>
              <td>{elem.author}</td>
              <td>10</td>
              <td>{elem.totalPages}</td>
              <td>update</td>
            </tr>)
            })
          }
          
        </tbody>
      </table>
      {
        showModal && <Modal close={setShowModal}/>
      }
      </div>
    </div>
  )
}
