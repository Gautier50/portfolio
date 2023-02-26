import React from 'react'
import Link from 'react-router-dom';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <p>Je m'appelle Gautier et je viens de terminer une formation de Développeur Web chez OpenClassrooms.</p>
      <Footer />
    </main>
  );
}