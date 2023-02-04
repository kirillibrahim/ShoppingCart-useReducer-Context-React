import styled from "styled-components";
import ProductCard from "./ProductCard";

import useShop from "./store/ShopContext";
const Cart = () => {
  const { products, total } = useShop();
  return (
    <>
      <Title>Your cart total is {total}.00$</Title>

      {products.map((product, index) => (
        <ProductCard {...product} key={index} />
      ))}
    </>
  );
};

export default Cart;

const Title = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
`;
