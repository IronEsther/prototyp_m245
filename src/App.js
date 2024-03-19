import React from 'react';
import './App.css';
import Header from './components/Header';
import LearningGoals from './components/LearningGoals';
import ExamDates from './components/ExamDates';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Login />
        <LearningGoals />
        <ExamDates />
      </main>
    </div>
  );
}

export default App;