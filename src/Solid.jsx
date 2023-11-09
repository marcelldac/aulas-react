import { useState } from "react";

export default function Solid() {
  const [numberOne, setNumberOne] = useState();
  const [numberTwo, setNumberTwo] = useState();

  const parseInput = (value) => {
    return parseInt(value);
  };

  const sumNumbers = (number1, number2) => {
    return number1 + number2;
  };

  const displayResult = (number1, number2, result) => {
    alert(number1 + "+" + number2 + "=" + result);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const intNumberOne = parseInput(numberOne);
    const intNumberTwo = parseInput(numberTwo);
    const sum = sumNumbers(intNumberOne, intNumberTwo);
    displayResult(intNumberOne, intNumberTwo, sum);
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
