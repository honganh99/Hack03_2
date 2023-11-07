import React, { useState } from "react";

function Header({ dataProduct, cartProduct }) {
  const [totalMoney, setTotalMoney] = useState(128000000000);

  const totalPrice = cartProduct.reduce((total, prouct) => {
    return total + prouct.price * prouct.quantity;
  }, 0);

  return (
    <div className="header">
      <p>
        To Spend{" "}
        <b style={{ color: "white" }}>
          ${(totalMoney - totalPrice).toLocaleString("vi-VN")}
        </b>
        ,
        <span>
          {totalPrice == 0 ? "You have Money" : "You have a lot of Money"}
        </span>{" "}
      </p>
    </div>
  );
}

export default Header;
