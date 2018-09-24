import React from 'react';
import { Link } from 'react-router-dom';

import { Card } from 'antd';

const Order = ({ order }) => {
  return (
    <Link to={`/orders/${order.id}`}>
      <Card title={order.name}>
        <p>{order.date}</p>
        <p>{`€${order.price}`}</p>
      </Card>
    </Link>
  );
};

export default Order;
