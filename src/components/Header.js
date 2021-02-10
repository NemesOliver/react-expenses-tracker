// Header will display total amount
import { useState } from "react";

const Header = ({currentAmount}) => {
  //total amount

  return (
    <header>
      <h1>£{currentAmount}</h1>
    </header>
  );
};

export default Header;

// GET AMOUNT DISPLAYED
