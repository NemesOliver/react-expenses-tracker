// Header will display Balance

const Header = ({ transactions }) => {
  // calculate Balance
  const amounts = transactions.map((trans) => trans.amount);
  const total = amounts.reduce((a, b) => (a += b), 0).toFixed(2);

  return (
    <header>
      <h1>£{total}</h1>
    </header>
  );
};

export default Header;
