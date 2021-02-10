//single transaction

const Transaction = ({ transaction, transactions, setTransactions }) => {
  return (
    <div
      onClick={() =>
        setTransactions(transactions.filter((el) => el.id !== transaction.id))
      }
      className="expense"
    >
      <div className={transaction.amount < 0 ? "line" : "positive"}></div>
      <p>{transaction.description}</p>
      <p>{transaction.amount}</p>
    </div>
  );
};

export default Transaction;
