import { useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount(c => c+1);     //'c' prende il valore attuale di count di default
  }

  return (
    <div>
      <h1>{advice}</h1>

      <button onClick={getAdvice}>Get advice</button>
      <p>Hai letto {count} suggerimenti</p>
    </div>
  );
}


/*
	- State: ogniqualvolta dobbiamo fare un cambiamento nella UI, lo facciamo con lo state

	Senza useState se facessi:
	
		let advice = "";
	
	e poi:
	
		advice = "Studia React";
	
	la variabile cambierebbe, ma React non se ne accorgerebbe.

    	
	React crea:
		- una variabile di stato  -> advice
        - una funzione per modificarla  ->  setAdvice(...)

    useState() ritorna un array, e noi facciamo destructuring dell'array
    "Crea una variabile di stato chiamata advice e inizializzala con la stringa vuota ""."
    il ritorno di setAdvide va in advice, che poi mostriamo a video

    Se usi TypeScript, invece, ottieni il controllo dei tipi.
	
	const [advice, setAdvice] = useState<string>("");
	
    Ora:
	
	setAdvice("hello"); // OK
	setAdvice(12);      // ERRORE



Quando passi una funzione:

setCount(qualcosa => qualcosa + 1);

React promette che chiamerà quella funzione passandole il valore corrente dello state associato a setCount, cioè count.
*/