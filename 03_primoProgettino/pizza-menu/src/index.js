import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header/>
      <Menu/>
      <Footer/>
    </div>
  );
}

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with Italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozzarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozzarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozzarella, mushrooms",
    price: 11,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Diavola",
    ingredients: "Tomato, mozzarella, spicy salami",
    price: 13,
    photoName: "pizzas/diavola.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Quattro Formaggi",
    ingredients: "Mozzarella, gorgonzola, parmesan, fontina",
    price: 14,
    photoName: "pizzas/quattro-formaggi.jpg",
    soldOut: true,
  },
];

function Header() {
  return <h1>Fast React Pizza</h1>
}
//passo al componente Pizza le props ingredient, photoName e price
function Menu() {
  return(
    <main className="menu">
      <h2>Out menu</h2>
      <ul className="pizzas">
       {pizzaData.map((pizza) => (
        <Pizza
          pizzaObj = {pizza}
          key={pizza.name}
        />
       ))}
      </ul>
    </main>
  )
}
function Footer(){
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  /*if (hour >= openHour && hour <= closeHour)
    alert("We're currently open!");
  else
    alert("Sorry we're closed");*/
  return(
    <footer className="footer">{new Date().toLocaleTimeString} We are currently open</footer>
  );
}

//componente che mostro piu volte inserendolo in quello principale che viene displayato con root.render (App)
function Pizza(props) {
  return (
  <div className="pizza">
    <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />

    <div>
      <h3>{props.pizzaObj.name}</h3>
      <p>{props.pizzaObj.ingredients}</p>
      <span>{props.pizzaObj.price + 3}</span>
    </div>
  </div>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
key: È un identificatore che React usa per capire quale elemento dell'elenco è quale.
name: È semplicemente un dato che passi al componente:
*/

