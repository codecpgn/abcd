// import React from 'react'
// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';
// import Services from './components/Services';
// import Contact from './components/Contact';
// import Policy from './components/Policy';
// import List from './components/List';


// const App = () => {
//   return (
//       <>
//       <List/>
//         <Router>
//         <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/about" element={About}/>
//         <Route path="/services" element={Services}/>
//         <Route path="/contact" element={Contact}/>
//         <Route path="/policy" element={Policy}/>
//         <Route component={Error}/>
//         </Routes>
//         </Router>
//       </>
//   )
// }

// export default App;
import React from 'react'
import Home from "./components/Home"
const App = () => {
  return (
    <div>
      <Home/>
    </div>
  )
}

export default App
