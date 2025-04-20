import React, { useState } from "react";

function App() {
  const [toppings, setToppings] = useState(["cheese"]);
  const [isPepperoni, setIsPepperoni] = useState(false);

  function handleCheckboxChange() {
    setIsPepperoni((prev) => !prev);
    setToppings((prevToppings) =>
      prevToppings.includes("pepperoni")
        ? prevToppings.filter((t) => t !== "pepperoni")
        : [...prevToppings, "pepperoni"]
    );
  }

  return (
    <div>
      <h1>Pizza Toppings</h1>
      <label>
        <input
          type="checkbox"
          checked={isPepperoni}
          onChange={handleCheckboxChange}
        />
        Add Pepperoni
      </label>
      <ul>
        {toppings.map((topping, index) => (
          <li key={index}>{topping}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
