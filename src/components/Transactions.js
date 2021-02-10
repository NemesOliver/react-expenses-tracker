//list of transactions

//imports
import Transaction from "./Transaction";

const Transactions = ({ transactions, setTransactions }) => {
  return (
    <div className="expenses-list">
      {transactions.map((transaction) => (
        <Transaction
          transactions={transactions}
          setTransactions={setTransactions}
          key={transaction.id}
          transaction={transaction}
        />
      ))}
    </div>
  );
};

export default Transactions;

// const amounts = transactions.map((trans) => trans.amount);
// const total = amounts.reduce((acc, item) => (acc += item), 0);
// setCurrentAmount(total);
