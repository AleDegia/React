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
    name: "Pizza Salamino",
    ingredients: "Tomato, mozzarella, spicy salami",
    price: 13,
    photoName: "pizzas/salamino.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Mozzarella, gorgonzola, parmesan, fontina",
    price: 14,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: true,
  },
];

function Header() {
  return <h1>Fast React Pizza</h1>
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return(
    <main className="menu">
      <h2>Our menu</h2>
      
      {numPizzas > 0 ? (            //se il numero di pizze è maggiore di 0 allora mostro la lista delle pizze, sennò messaggio che dice che il menu non è pronto
      <>                            
        <p>
          Authentic Italian cuisine. 6 creative dishes to choose from. All
          from our stone oven, all organic, all delicious.
        </p>
        <ul className="pizzas">
        {pizzas.map((pizza) => (  //map mi permette di ciclare su un array e restituire un nuovo array con i valori che voglio
          <Pizza
            pizzaObj = {pizza}
            key={pizza.name}
          />
        ))}
        </ul>
      </>
      ) : (
      <p>We're still working on our menu. Please come back later!</p>
      )}
    </main>
  )
}

function Footer(){
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  //se isOpen è true allora mostro il paragrafo con scritto Open ed il bottone(short circuit evaluation)
  //si fa cosi perchè jsx non asccetta istruzioni come if else statement, quindi si usa un operatore ternario oppure uno short circuit evaluation
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

//uso props destructuring per prendere le proprietà dell'oggetto props e usarle direttamente (spiegato sotto)
function Order({closeHour, openHour}) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

//componente che mostro piu volte inserendolo in quello principale che viene displayato con root.render (App)
function Pizza({pizzaObj}) {
  //uso props destructuring per prendere le proprietà dell'oggetto pizzaObj e usarle direttamente 
  return (
  <div className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
    <img src={pizzaObj.photoName} alt={pizzaObj.name} />

    <div>
      <h3>{pizzaObj.name}</h3>
      <p>{pizzaObj.ingredients}</p>
      <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
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
name: È semplicemente un dato che passi al componente

function Order({ closeHour, openHour })   è equivalente a:

function Order(props) {
  const { closeHour, openHour } = props;

  // ...
}

uso {} dentro funzione Order() per fare ciò

*/

