import React from 'react'
import Catalog from '../components/Catalog'
import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <header className="bg-white shadow">
              <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900">Wellcome to the biggest catalog of books</h1>
                <span>Here you can look and send a solicitud to give your book</span>
              </div>
            </header>
      <Catalog/>
    </>
  )
}
