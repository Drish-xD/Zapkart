import React from 'react'
import { Navbar, Home, Products, Checkout, Footer } from './components/index'

const App = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <Products />
            <Checkout />
            <Footer />
        </div>
    )
}

export default App
