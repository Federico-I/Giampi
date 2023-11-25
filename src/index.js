import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


function App() {
  return (<h1>La Pizza</h1>)
}

function Pizza() {
  return (<h1>Pizza 1</h1>)
}

// React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
