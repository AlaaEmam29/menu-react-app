import React from 'react'
import Categories from '../Categories/Categories'
import Menu from '../Menu/Menu'

export default function App() {
  return (
    <>
    <section className="container text-center py-5">
    <h2 className="title pt-5">Our Menu</h2>
    <div className="brdr mb-5"></div>
    <Categories/>
    <Menu/>
    </section>
    
    </>
  )
}
