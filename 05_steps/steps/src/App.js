import { useState } from "react";

const messages = [
  "Learn React ✨",
  "Apply for jobs 💼",
  "Invest your new income 🟡",
];

function App() { 
 const [step, setStep] = useState(1);   //con useState creo variabile di stato a cui do valore iniziale 1 a step, e setStep è la funzione che aggiorna il valore di step

 function handlePrevious() {
  setStep((prevStep) => prevStep - 1);
  //alert("Previous button clicked");
 }

 function handleNext() {
  setStep((prevStep) => prevStep + 1);
  //alert("Next button clicked");
 }

 //classe active mette colore viola al numero
 return (
  <div className="steps">
    <div className="numbers">
      <div className={`${step >= 1 ? "active" : ""}`}>1</div>
      <div className={`${step >= 2 ? "active" : ""}`}>2</div>
      <div className={`${step >= 3 ? "active" : ""}`}>3</div>
    </div>

    <p className="message">Step {step}: {messages[step - 1]}</p>

    <div className="buttons">
      <button style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}>  
        Previous 
      </button>
      <button style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}>
        Next
      </button>
    </div>
  </div>
 );
}

export default App;


/*
useState è una funzione che ti permette di aggiungere lo stato a un componente funzionale.
useState restituisce un array: [step, setStep]

Con la destrutturazione di JavaScript:
  const [step, setStep] = useState(1);

equivale a scrivere (semplificando):

  const state = useState(1);

const step = state[0];
const setStep = state[1];

step → il valore dello stato
setStep → la funzione per modificarlo


Const:

const in JavaScript non significa che il valore non possa cambiare, 
ma che il riferimento alla variabile non può essere riassegnato.
tu non modifichi mai direttamente step.

Non fai:

step = step + 1; // ❌ Errore

Fai invece:

setStep(prevStep => prevStep + 1);

Quando chiami setStep, React:

salva il nuovo valore dello stato;
riesegue il componente (App);
durante la nuova esecuzione: const [step, setStep] = useState(1);

step non vale più 1, ma ad esempio 2.

Quindi ogni render crea una nuova costante step.
Non è la stessa costante che cambia: è una nuova costante creata ad ogni render.
*/