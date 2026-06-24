import { useEffect, useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(function () {   //useEffect esegue il codice al suo interno dopo che il componente in cui hai scritto il useEffect è stato renderato
    getAdvice();
  }, []);

  return (
    <div>
      <h1>{advice}</h1>

      <button onClick={getAdvice}>Get advice</button>
      
      <Message count={count} />  
    </div>
  );
}

function Message(props) {
  return (
    <p>
      You have read <strong>{props.count}</strong> pieces of advice
    </p>
  );
}


/*

<Message count={count} />   =>  " 'chiama la funzione Message che prende come parametro 'props' "

perchè si fa props.count e non solo props? 
Perchè React passa un oggetto (props) con dentro una proprietà(count)
Se scrivessi:   <p>{props}</p>
React proverebbe a mostrare l'intero oggetto

<Message count={5} />

Questa sintassi JSX ha una regola precisa:
Tutti gli attributi del tag vengono raccolti in un unico oggetto chiamato props.
*/