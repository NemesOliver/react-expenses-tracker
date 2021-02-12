// add ammount and description

//uuid
import { v4 as uuidv4 } from "uuid";

const AddTransaction = ({
  amount,
  setAmount,
  description,
  setDescription,
  transactions,
  setTransactions,
}) => {
  //functions
  const addTransactionHandler = (e) => {
    e.preventDefault();
    setTransactions([
      ...transactions,
      {
        amount: parseFloat(amount),
        description,
        id: uuidv4(),
      },
    ]);
    setAmount("");
    setDescription("");
  };

  return (
    <form onSubmit={addTransactionHandler} className="add-container">
      <input
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        name="description"
        value={description}
        placeholder="add description..."
        required
      />
      <input
        onChange={(e) => setAmount(e.target.value)}
        type="number"
        name="amount"
        value={amount}
        placeholder="add amount..."
        required
      />
      <button type="submit">add</button>
    </form>
  );
};

export default AddTransaction;
