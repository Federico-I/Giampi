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

  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className='menu'>
      <h2>Menu</h2>

     
      
      {numPizzas > 0 ? (
        <React.Fragment>
          <p>
           Most delicious Italian dishes to choose from our amazing menue. Don't miss our chef's great quality cuisine and go for it!
          </p>
          <ul className='pizzas'>
            {pizzaData.map((pizza)=> (
            <Pizza dataPizza={pizza} key={pizza.name}/>
            ))}
          </ul>
        </ React.Fragment>
      ) : <p>The menu is not available at the moment please but soon will be ready!</p> };   

      {/*

      Notes : 
      
        Ternary operator: Conditional ? () : ()
      
        Conditional operator: Conditional && 


        Can't write (If : else) inside {} in JSX, does not produce a value. Used for entire components.

        <Pizza foodName="Pizza Spinaci" imgName="pizza/spinach.jpg" ingredients="Tomato, mozarella, spinach, and ricotta cheese." price={10}/>
      <Pizza foodName="Pizza Funghi" imgName="pizza/funghi.jpg" ingredients="Tomato, mozarella, mushrooms, and onions." price={10}/>
      */}


    </main>
  );
};

function Pizza({ dataPizza }) {

  if (pizzaData.soldOut) return null;

  return (
    <li className={`pizza ${pizzaData.soldOut ? "sold-out" : ""}`}>
      <img src={dataPizza.imgName} alt={dataPizza.foodName}/>
      <div>
        <h3>{dataPizza.foodName}</h3>
        <p>{dataPizza.ingredient}</p>
        <span>{dataPizza.soldOut ? "SOLD OUIT" : pizzaData.price}</span>
      </div>
    </li>
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

  return (
    <footer className='footer'> 
        { isOpen ? (
          <Order closeHours={closeHour}/>
        )
      : ( <p> Visit us between {openHour}hrs and {closeHour}hrs.</p> ) }
    </footer>
  )
}

function Order({ closeHour, openHour }) {
  return (
    <div className='order'>
      <p>We are Open until {closeHour}hrs. you can other online! :D</p> 
      <button btn="btn">Order</button>
    </div>
  )

}


// React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
