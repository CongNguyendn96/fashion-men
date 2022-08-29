import React from "react";

import "./styles.scss";

function CartsNum({ cartCount }) {
  return <span className="carts-num" >{cartCount}</span>;
}

export default CartsNum;
