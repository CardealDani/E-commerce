import React from 'react'
import Nav from './pages/nav/Nav'
// import SetImage from './setImage'
import { BrowserRouter } from 'react-router-dom'
import Rout from './Rout'
import Footer from './pages/footer/footer'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Nav />
                <Rout/>
                {/* <SetImage/> */}
                <Footer/>
            </BrowserRouter>
        </>
    )
}

export default App