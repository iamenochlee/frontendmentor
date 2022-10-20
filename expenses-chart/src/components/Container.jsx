import { useEffect, useState } from "react";
import Chart from "./Chart";

export default function Container() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const handleDataFetch = async () => {
      await fetch("/data.json")
        .then((response) => response.json())
        .then((data) => setExpenses(data));
    };
    handleDataFetch();
  }, []);

  return (
    <main>
      <h2>{`Spending - Last ${expenses?.length} days`}</h2>
      <div className="wrapper">
        {expenses.map((expense, index) => (
          <Chart
            day={expense.day}
            amount={expense.amount}
            key={index}
            id={index + 1}
          />
        ))}
      </div>
      <div className="footer">
        <div className="col col-1">
          <h3 className="footer-text--small">Total this month</h3>
          <p className="total">$478.33</p>
        </div>
        <div className="col col-2">
          <h3>+2.4%</h3>
          <p className="footer-text--small">from last month</p>
        </div>
      </div>
    </main>
  );
}
