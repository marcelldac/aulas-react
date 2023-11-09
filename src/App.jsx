import { useState } from "react";

export default function App() {
  const [numberOne, setNumberOne] = useState();
  const [numberTwo, setNumberTwo] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const intNumberOne = parseInt(numberOne);
    const intNumberTwo = parseInt(numberTwo);
    const sum = intNumberOne + intNumberTwo;
    alert(numberOne + "+" + numberTwo + "=" + sum);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="numberOne">Number One</label>
          <input
            id="numberOne"
            type="number"
            value={numberOne}
            onChange={(e) => {
              setNumberOne(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="numberTwo">Number Two</label>
          <input
            id="numberTwo"
            type="number"
            value={numberTwo}
            onChange={(e) => {
              setNumberTwo(e.target.value);
            }}
          />
        </div>
        <button type="submit" style={{ width: "100%" }}>
          Submit
        </button>
      </form>
    </>
  );
}
