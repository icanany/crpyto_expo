import React from 'react';
import Header from './pages/header';
import Footer from './pages/footer';
import Button from './components/Button';
import Card from './components/Card';
import DateCard from './components/DateCard';
import RightContent from './components/RightContent';
function App() {
  return (
 
    <div>
      <Header />
        <RightContent />
        <Button name ="Register Now"/>
      <Footer/>  
    </div>
  );
}

export default App;
