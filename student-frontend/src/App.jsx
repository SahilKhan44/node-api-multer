import React from 'react';
import Header from './components/Header';
import StudentsPage from './pages/StudentsPage';
import './App.css';
import'./index.css';

const App = () => {
  return (
    <div className="App bg-black">
      <Header />
      <StudentsPage />
    </div>
  );
};

export default App;
