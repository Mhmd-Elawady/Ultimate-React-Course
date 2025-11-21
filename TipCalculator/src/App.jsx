import { useState } from "react";
import "./index.css";

export function App() {
  return (
    <div className="app">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [percent1, setPercent1] = useState(0);
  const [percent2, setPercent2] = useState(0);

  const tip = (bill * (percent1 + percent2)) / 2 / 100;

  function handleReset() {
    setBill(0);
    setPercent1(0);
    setPercent2(0);
  }

  return (
    <div className="tip-calculator">
      <h1>Tip Calculator</h1>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percent1} onSelect={setPercent1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percentage={percent2} onSelect={setPercent2}>
        How did your friend like the service?
      </SelectPercentage>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div className="input-group">
      <label>How much was the bill?</label>
      <input
        type="number"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div className="percentage-group">
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <div className="output-section">
      <h3>
        You pay ${(bill + tip).toFixed(2)}
      </h3>
      <div className="breakdown">
        (${bill.toFixed(2)} bill + ${tip.toFixed(2)} tip)
      </div>
    </div>
  );
}

function Reset({ onReset }) {
  return (
    <button className="reset-btn" onClick={onReset}>
      Reset
    </button>
  );
}

export default App;