import React from "react";
import useStore from "../store/useStore";
import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";

const Home = () => {
  const receipts = useStore((state) => state.receipts);
  const removeReceipt = useStore((state) => state.removeReceipt);

  return (
    <div>
      <h1>Mes recettes</h1>
      <Row gutter={16}>
        {receipts.map((receipt) => (
          <Col key={receipt.id} span={8}>
            <Card
              title={receipt.title}
              bordered={false}
              extra={<Link to={"/receipt/" + receipt.id}>Voir plus</Link>}
            >
              {receipt.description}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
