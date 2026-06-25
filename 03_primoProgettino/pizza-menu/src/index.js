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
function Menu() {
  return(
    <main className="menu">
      <h2>Out menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
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
  //traduzione in javascript del jsx che fa Babel.. (uguale a return <footer>We're currently open!</footer>;)
   /*return React.createElement(
    "footer",
    null,
    "We're currently open!"
  );*/
}

//componente che mostro piu volte inserendolo in quello principale che viene displayato con root.render (App)
function Pizza() {
  return (
    <div>
      <img
        src="pizzas/spinaci.jpg"
        alt="Pizza spinaci"
      />

      <h3>Pizza Spinaci</h3>

      <p>Tomato, mozzarella, spinach, and ricotta cheese</p>
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

// React before 18
// ReactDOM.render(<App />, document.getElementById("root"));