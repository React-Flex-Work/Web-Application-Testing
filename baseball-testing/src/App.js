import React, { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

export default function App() {
  const [ball, setBall] = useState(0);
  const [strike, setStrike] = useState(0);
  return (
    <div className="App">
      <Display />
      <Dashboard />
    </div>
  );
}