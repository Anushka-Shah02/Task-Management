import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Tasks from './components/Tasks';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Board from './components/Board';

const styles={
  navs:{
      display:"flex",
      flexDirection:"row"
  }
}

function App() {
  return(
    <BrowserRouter>
      <Navbar/>
      <div style={styles.navs}>
      <Sidebar/>
      <Routes>
        <Route path="/board" element={<Board/>}/>
        <Route path="/" element={<Tasks/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
