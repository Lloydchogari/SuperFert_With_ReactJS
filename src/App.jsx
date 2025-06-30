import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageOne from './components/PageOne'
import PageTwo from './components/PageTwo'
import PageThree from './components/PageThree'
import ScrollToTop from './components/ScrollToTop' // <-- Add this import

const App = () => {
  return (
    <>
     <ScrollToTop />
      <Routes>
     
         <Route path="/" element={<PageOne />} /> {/* Add this line */}
        <Route path="/PageOne" element={<PageOne />} />
        <Route path="/PageTwo" element={<PageTwo />} />
        <Route path="/PageThree" element={<PageThree />} />
      </Routes>
    

      {/* <PageOne /> */}
      {/* <PageTwo /> */}
      {/* <PageThree /> */}
    </>
  )
}

export default App
