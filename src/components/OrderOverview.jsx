import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Button, Card } from 'antd';

import ProductsTableSimple from './ProductsTableSimple';

import orders from '../orders.json';

const OrderOverview = ({
  match: {
    params: { id }
  }
}) => {
  const order = orders.find(order => order.id === parseInt(id, 10));
  return (
    <div>
      <div style={{ marginBottom: '2em' }}>
        <Input
          size="large"
          placeholder={order.name}
          onChange={() => console.log('new name')}
          style={{ width: '300px' }}
        />
        <Link style={{ float: 'right' }} to={`/orders/${order.id}`}>
          <Button>Back</Button>
        </Link>
      </div>
      <ProductsTableSimple products={order.products} />
      <Card
        style={{ width: '30%', float: 'right' }}
        title="Total"
        actions={[<span>Order</span>]}
      >
        €{order.price}
      </Card>
    </div>
  );
};

export default OrderOverview;
