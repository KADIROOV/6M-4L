import React from 'react'

export default function App() {

  const [counter, setCounter] = useState(0); 

  return (
    <div>
      <button
       onClick={() => {
        setCounter(function (prev) {
          console.log("Eski holat:" , prev);
          return prev - 1;
        });
        setCounter(function (prev) {
          console.log("Eski holat: ", prev);
          return prev - 1;
        });
        setCounter(function (prev) {
          console.log("Eski holat: ", prev);
          return  prev - 1;
        });
        setCounter(function (prev) {
          console.log("Eski holat: ", prev);
          return prev - 1;
        })
      }}
      >
        -
      </button>
      <mark>{counter}</mark>
      <button
      onClick={() =>{
        setCounter(function (prev) {
          console.log(".");
          return prev + 1; 
        })
      }}
      >+</button>
    </div>
  )
}
