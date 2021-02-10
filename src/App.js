import "./App.css";
import { useState } from "react";
//import components
import Header from "./components/Header";
import AddTransaction from "./components/AddTransaction";
import Transactions from "./components/Transactions";

function App() {
  //global state
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="app-container">
      <Header />
      <AddTransaction setAmount={setAmount} setDescription={setDescription} />
      <Transactions />
    </div>
  );
}

export default App;
