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

function Header() {
  
  return <h1>Fast React Pizza</h1>
}
//passo al componente Pizza le props ingredient, photoName e price
function Menu() {
  return(
    <main className="menu">
      <h2>Out menu</h2>
      <Pizza    
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      /> 
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushrooms"
        price={12}
        photoName="pizzas/funghi.jpg"
    />
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
    <img src={props.photoName} alt={props.name} />

    <div>
      <h3>{props.name}</h3>
      <p>{props.ingredients}</p>
      <span>{props.price + 3}</span>
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
In function Menu() {} sto riutilizzando lo stesso componente Pizza due volte,
passando info diverse. È esattamente come chiamare una funzione due volte con parametri diversi.
è React che la chiama ogni volta che trova <Pizza /> nel JSX.

è come se pizza nel jsx fosse la chiamata al metodo coi vari parametri che gli passo, 
mentre il componente function Pizza(props) fossa la definizione del metodo
*/

