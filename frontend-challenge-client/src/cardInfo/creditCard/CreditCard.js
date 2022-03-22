import { formatAmount } from "../../utils.js";

import "./CreditCard.css";

export function CreditCard({ cardInfo, onChange, showInfo }) {
  return (
    <>
      <section className="creditCard">
        <div className="cardContent">
          <p>REMAINING BALANCE</p>
          <span>{formatAmount(cardInfo.balance)}</span>
          <p>{cardInfo.cardNumber}</p>
          {showInfo ? (
            <p>
              CVV: {cardInfo.cvv} EXP: {cardInfo.exp}
            </p>
          ) : (
            <button onClick={() => onChange(true)}>
              SHOW CARD INFORMATION
            </button>
          )}
        </div>
      </section>
    </>
  );
}
