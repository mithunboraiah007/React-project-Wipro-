import { useState } from "react";

export default function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(240000);
  const [interestRate, setInterestRate] = useState(7.143);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(1620);

  const calculatePayment = () => {
    const r = interestRate / 1200;
    const n = loanTerm * 12;
    setMonthlyPayment(((loanAmount * r) / (1 - (1 + r) ** -n)).toFixed(2));
  };

  return (
    <div className="calculator">
      <h2>Loan Calculator</h2>
      <div className="input-group">
        <label>Loan Amount ($)</label>
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(+e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Interest Rate (%)</label>
        <input
          type="number"
          step="0.01"
          value={interestRate}
          onChange={(e) => setInterestRate(+e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Loan Term (Years)</label>
        <input
          type="number"
          value={loanTerm}
          onChange={(e) => setLoanTerm(+e.target.value)}
        />
      </div>
      <button onClick={calculatePayment}>Calculate</button>
      <h3>Monthly Payment: ${monthlyPayment}</h3>
      <style jsx>{`
        .calculator {
          width: 300px;
          margin: auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 10px;
          box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
          text-align: center;
        }
        .input-group {
          margin-bottom: 10px;
        }
        label {
          display: block;
          font-weight: bold;
        }
        input {
          width: 100%;
          padding: 5px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        button {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 10px;
          cursor: pointer;
          border-radius: 5px;
        }
        button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
}
