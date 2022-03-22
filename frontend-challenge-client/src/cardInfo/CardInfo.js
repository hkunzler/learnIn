import { useEffect, useState } from "react";
import { Card } from "antd";

import { CreditCard } from "./creditCard/CreditCard.js";
import { CardHolder } from "./cardHolder/CardHolder.js";

import "./CardInfo.css";

const { Meta } = Card;

export function CardInfo() {
  const [loading, setLoading] = useState(true);
  const [showInfo, setShowInfo] = useState(false);
  const [cardInfo, setCardInfo] = useState({});
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    address: {
      line1: "",
      city: "",
      state: "",
      zip: "",
    },
  });

  useEffect(() => {
    fetch(`/card-details/?show-card-number=${showInfo}`)
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setLoading(false);
        setCardInfo(response);
        setUserInfo({
          firstName: response.holder.firstName,
          lastName: response.holder.lastName,
          address: {
            line1: response.holder.address.billing.line1,
            city: response.holder.address.billing.city,
            state: response.holder.address.billing.state,
            zip: response.holder.address.billing.zipcode,
          },
        });
      });
  }, [showInfo]);

  return (
    <Card loading={loading}>
      <Meta
        title="Your Card"
        description="Use this card to pay for programs in your plan. Purchases will be visible by your manager."
      />
      <div className="cardInfo">
        <div>
          <CreditCard
            cardInfo={cardInfo}
            onChange={(val) => setShowInfo(val)}
            showInfo={showInfo}
          />
          <p>
            Program doesn't accept cards? We can Help.{" "}
            <a href="#">Contact us.</a>
          </p>
        </div>
        <CardHolder
          className="infoBody"
          cardInfo={cardInfo}
          userInfo={userInfo}
        />
      </div>
    </Card>
  );
}
