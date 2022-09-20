import React from 'react';
import './ProductListItem.css';
import Button from '../../atoms/Button/Button';
import Card from '../../atoms/Card/Card';
import Heading from '../../atoms/Heading/Heading';

function Text({ children }) {
  return <span>{children}</span>;
}

export default function ProductListItem({
  name,
  price,
  imageUrl,
  onAddToCart,
  isSoldOut,
  isOnSale
}) {
  return (
    <Card highlight={isOnSale}>
      <Heading>
        {name} {isOnSale && "(On Sale)"}
      </Heading>
      <img src={imageUrl} alt="" />
      <Text>{price}</Text>
      <Button onClick={onAddToCart} disabled={isSoldOut}>
        {isSoldOut ? "Sold out" : "Add to Cart"}
      </Button>
    </Card>
  );
}
