import "./App.css";
import { useState } from "react";
import InvestmentDataInsert from "./components/InvestmentDataInsert";
import InvestmentTable from "./components/InvestmentTable";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 27,
    duration: 10,
  });
  const inputIsValid = userInput.duration >= 1;
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prev) => {
      return { ...prev, [inputIdentifier]: +newValue };
    });
  }

  return (
    <div className="flex flex-col items-center">
      <InvestmentDataInsert handleChange={handleChange} userInput={userInput} />
      {inputIsValid == true ? (
        <InvestmentTable Input={userInput} />
      ) : (
        <p className="mt-4 text-2xl">
          Please enter a duration greater than zero.
        </p>
      )}
    </div>
  );
}

export default App;
