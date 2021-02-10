//list of transactions

const Transactions = () => {
  return (
    <div className="expenses-list">
      <div className="expense">
        <div className="line"></div>
        <p>description</p>
        <p>-100</p>
      </div>
      <div className="expense">
        <div className="line positive"></div>
        <p>description2</p>
        <p>200</p>
      </div>
      <div className="expense">
        <div className="line"></div>
        <p>description3</p>
        <p>-15</p>
      </div>
    </div>
  );
};

export default Transactions;
