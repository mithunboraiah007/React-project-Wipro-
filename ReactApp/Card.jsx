import React from "react";
import "./Card.css"; // Make sure this file exists in the same folder

const cardLogos = {
  Visa: "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png",
  Mastercard: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
  "American Express": "https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg",
};

const transactions = [
  { card: "4920", type: "Credit", provider: "Mastercard", date: "Jun 24, 2023", status: "Verified", amount: 2890.0 },
  { card: "4230", type: "Debit", provider: "Visa", date: "Jun 20, 2023", status: "Rejected", amount: -49.0 },
  { card: "5510", type: "Credit", provider: "Visa", date: "Jun 19, 2023", status: "Pending", amount: -80.0 },
  { card: "0983", type: "Debit", provider: "American Express", date: "Jun 18, 2023", status: "Verified", amount: -30.0 },
  { card: "4443", type: "Credit", provider: "Mastercard", date: "Jun 17, 2023", status: "Verified", amount: 1500.0 },
  { card: "7635", type: "Debit", provider: "Visa", date: "Jun 14, 2023", status: "Rejected", amount: -200.0 },
];

const Card = () => {
  return (
    <div className="card-container">
      <h2>Recent Transactions</h2>
      <table>
        <thead>
          <tr>
            <th>Card</th>
            <th>Date</th>
            <th>Status</th>
            <th>Amount ($)</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>
                <img src={cardLogos[transaction.provider]} alt={transaction.provider} className="card-logo" />
                <strong>*{transaction.card}</strong> ({transaction.provider}) - {transaction.type}
              </td>
              <td>{transaction.date}</td>
              <td className={`status ${transaction.status.toLowerCase()}`}>{transaction.status}</td>
              <td className={transaction.amount >= 0 ? "positive" : "negative"}>
                {transaction.amount.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Card;
