import { useEffect, useState } from "react";

import { Card } from "antd";

import { formatAmount } from "../utils.js";

import './Budget.css';

export function Budget() {
  const [loading, setLoading] = useState(true);
  const [learningBudget, setLearningBudget] = useState({});
  useEffect(() => {
    fetch(`/personal-learning-budget`)
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setLoading(false);
        setLearningBudget(response);
      });
  }, []);
  return (
    <Card loading={loading}>
      <section className="budget">
        <div>
          <p>{learningBudget.title?.toUpperCase()}</p>
          <h2>{learningBudget.providerCompany}</h2>
        </div>
        <div>
          <p>AMOUNT</p>
          <h2>{formatAmount(learningBudget.amount)}</h2>
        </div>
      </section>
    </Card>
  );
}
