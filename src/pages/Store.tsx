import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { StoreItem, StoreItemProps } from "../components/StoreItem";

const Store = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <>
      <h1>Store</h1>
      <Row md={2} x={1} lg={3} className="g-3">
        {products.map((product: StoreItemProps, key) => (
          <Col key={key}>
            <StoreItem {...product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
