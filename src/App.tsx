import { useState } from 'react'
import { Outlet, Routes, Route } from 'react-router-dom'
import './App.css'
import { Navbar } from './component/navbar'
import './index.css'
import { Contacts } from './pages/contacts';
import { Contact } from './pages/contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">
            Bienvenue
          </h1>
          <p className="text-lg text-gray-600 text-center mb-12">
            Découvrez notre univers unique et innovant
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-3 text-gray-800">Découvrir</h2>
              <p className="text-gray-600">Explorez nos services</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-3 text-gray-800">Apprendre</h2>
              <p className="text-gray-600">Formez-vous avec nous</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-3 text-gray-800">Créer</h2>
              <p className="text-gray-600">Réalisez vos projets</p>
            </div>
          </div>
        </div>
      </main>
      <Routes>
        <Route path="/" element={<Contacts />} />
        <Route path="/contact/:id" element={<Contact />} />
      </Routes>
      <Outlet />
    </div>
  )
}

export default App
