//single transaction

const Transaction = ({ transaction, transactions, setTransactions }) => {
  return (
    <div
      onClick={
        () =>
          setTransactions(transactions.filter((el) => el.id !== transaction.id)) //<- delete transaction
      }
      className="expense"
    >
      <div className={transaction.amount < 0 ? "negative" : "positive"}></div>
      <p>{transaction.description}</p>
      <p>{transaction.amount}</p>
    </div>
  );
};

export default Transaction;
