import React from 'react'
import Nav from './Nav'
import SetImage from './setImage'
import { BrowserRouter } from 'react-router-dom'
import Rout from './Rout'

const App = () => {
    return (
        <>
            <BrowserRouter>
                {/* <Nav /> */}
                <Rout/>
                {/* <SetImage/> */}
            </BrowserRouter>
        </>
    )
}

export default App