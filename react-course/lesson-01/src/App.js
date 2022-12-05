import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e2",
      title: "Toilet Paper",
      amount: 94.67,
      date: new Date(2021, 5, 28),
    },
  ];
  return (
    <div className="App">
      <h1>React App</h1>
      <p>This is also visible!</p>
      
      <Expenses items={expenses} />
      
    </div>
  );
}

export default App;