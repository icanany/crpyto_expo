import React from 'react';
import Header from './pages/header';
import Footer from './pages/footer';
import Button from './components/Button';
import Card from './components/Card';
import DateCard from './components/DateCard';
import RightContent from './components/RightContent';
import AniCard from './components/AniCard';
import Home from './pages/home';
function App() {
  return (
 
    <div>
      <Header />
      <Home />
        <RightContent />
          {/* <div style={{top :'50%', position : 'fixed', width : '100vw', display: 'flex', flexDirection: 'row'}}>
            <AniCard />
            <AniCard />
            <AniCard />
          </div> */}
      <Footer/>  
    </div>
  );
}

export default App;
