export function CardHolder({ userInfo }) {
  return (
    <section>
      <div>
        <p>CARD HOLDER</p>
        <span>
          {userInfo.firstName} {userInfo.lastName}
        </span>
      </div>
      <div>
        <p>BILLING ADDRESS</p>
        <span>{userInfo.address.line1}</span>
        <br />
        <span>
          {userInfo.address.city}, {userInfo.address.state}{" "}
          {userInfo.address.zip}
        </span>
      </div>
    </section>
  );
}
