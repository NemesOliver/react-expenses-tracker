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
  const [transactions, setTransactions] = useState([]);

  return (
    <div className="app-container">
      <Header />
      <AddTransaction
        amount={amount}
        setAmount={setAmount}
        description={description}
        setDescription={setDescription}
        transactions={transactions}
        setTransactions={setTransactions}
      />
      <Transactions />
    </div>
  );
}

export default App;
