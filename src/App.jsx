import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout'
import Homepages from './Pages/Homepages'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepages />} />
            {/* <Route path="/about" element={<Aboutus />} /> */}



          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App