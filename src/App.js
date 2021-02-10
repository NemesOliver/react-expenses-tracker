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
  const [currentAmount, setCurrentAmount] = useState([0]);


  return (
    <div className="app-container">
      <Header
        amount={amount}
        transactions={transactions}
        currentAmount={currentAmount}
      />
      <AddTransaction
        amount={amount}
        setAmount={setAmount}
        description={description}
        setDescription={setDescription}
        transactions={transactions}
        setTransactions={setTransactions}
        currentAmount={currentAmount}
        setCurrentAmount={setCurrentAmount}
      />

      <Transactions
        setTransactions={setTransactions}
        transactions={transactions}
      />
    </div>
  );
}

export default App;
