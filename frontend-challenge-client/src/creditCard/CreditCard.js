import { useEffect, useState } from "react";
import { Card } from "antd";

import { formatAmount } from "../utils";

import "./CreditCard.css";

const { Meta } = Card;

export function CreditCard() {
  const [loading, setLoading] = useState(true);
  const [cardInfo, setCardInfo] = useState({});
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    fetch(`/card-details/?show-card-number=${showInfo}`)
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setLoading(false);
        setCardInfo(response);
      });
  }, [showInfo]);
  return (
    <section>
      <Card bodyStyle={{ borderRadius: "15px" }} loading={loading}>
        <Meta
          title="Your Card"
          description="Use this card to pay for programs in your plan. Purchases will be visible by your manager."
        />
        <div className="cardBody">
          <div className="cardContent">
            <p>REMAINING BALANCE</p>
            <span>{formatAmount(cardInfo.balance)}</span>
            <p>{cardInfo.cardNumber}</p>
            {showInfo ? (
              <p>
                CVV: {cardInfo.cvv} EXP: {cardInfo.exp}
              </p>
            ) : (
              <button onClick={() => setShowInfo(true)}>
                SHOW CARD INFORMATION
              </button>
            )}
          </div>
        </div>
        Program doesn't accept cards? We can Help. <a href="#">Contact us.</a>
        <div className="infoBody">
          <p>CARD HOLDER</p>
          <p>BILLING</p>
        </div>
      </Card>
    </section>
  );
}
