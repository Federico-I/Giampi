import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


function App() {
  return (  
      <div className='container'>
        <Header /> 
        <Menu/>
        <Footer />
      </div>
  )
}

function Header() {
  return (
  <header>
    <h1 className='header'>Giampi's Pizzeria</h1>
  </header>
  );
};

function Menu() {
  return (
    <main className='menu'>
      <h2>Menu</h2>
      <Pizza foodName="Pizza Spinaci" imgName="pizza/spinach.jpg" ingredients="Tomato, mozarella, spinach, and ricotta cheese." price={10}/>
      <Pizza foodName="Pizza Funghi" imgName="pizza/funghi.jpg" ingredients="Tomato, mozarella, mushrooms, and onions." price={10}/>
    </main>
  );
};

function Pizza(props) {
  return (
    <div className='pizza'>
      <img src={props.imgName} alt={props.foodName}/>
      <div>
        <h3>{props.foodName}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price + 4}</span>
      </div>
    </div>
  );
};

function Footer() {

  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  //if(hour >= openHour && hour <= closeHour) alert("We are Open."); 
  //else alert("We are closed.");

  return <footer>{new Date().toLocaleTimeString()}. We're open, contact us!</footer>
}

// React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
