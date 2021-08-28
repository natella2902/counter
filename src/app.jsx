import React from "react";
import Counters from "./components/counters";
import NavBar from "./components/navBar";
import {useState} from "react";

function App() {
  const initialState = [
    {value: 0, id: 1, name: 'spoon'},
    {value: 4, id: 2, name: 'knife'},
    {value: 0, id: 3, name: 'cup'},
    {value: 0, id: 4, name: 'cup2'},
    {value: 0, id: 5, name: 'cup3'}
  ]
  const [counters, setCounters] = useState(initialState)
  const handleDelete = (counterId) => {
    const newCounters = counters.filter(counter => counter.id != counterId)
    setCounters(newCounters)
  }

  const handleIncrement = (counterId) => {
    let newCounter = counters.map((counter) => {
      if(counter.id === counterId) {
        counter.value ++
      }
      return counter
    })
    setCounters(newCounter)
  }

  const handleDecrement = (counterId) => {
    let newCounter = counters.map((counter) => {
      if(counter.id === counterId) {
        counter.value --
      }
      return counter
    })
    setCounters(newCounter)
  }

  const handleReset = () => {
    setCounters(initialState)
  }
  return (
      <div className="col-lg-8 mx-auto p-3 py-md-5">
        <main>
          <NavBar
            totalItems = {counters.reduce((a, counter) => (a + counter.value), 0)}
          />
          <Counters
            counters = {counters}
            onDelete = {handleDelete}
            onIncrement = {handleIncrement}
            onDecrement = {handleDecrement}
            onReset = {handleReset}
          />
        </main>
      </div>
  );
}

export default App;
