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
