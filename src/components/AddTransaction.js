// add ammount and description

const AddTransaction = ({ setAmount, setDescription }) => {
  return (
    <form className="add-container">
      <input
        onChange={(e) => setAmount(e.target.value)}
        type="tel"
        name="amount"
        placeholder="add amount..."
        required
      />
      <input
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        name="description"
        placeholder="add description..."
        required
      />
      <button type="submit">add</button>
    </form>
  );
};

export default AddTransaction;
