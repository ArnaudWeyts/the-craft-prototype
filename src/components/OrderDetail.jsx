import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Button, Badge } from 'antd';

import ProductsTable from './ProductsTable';

import orders from '../orders.json';

const Search = Input.Search;

const OrderDetail = ({ match }) => {
  let order;
  if (match) {
    order = orders.find(order => order.id === parseInt(match.params.id, 10));
  } else {
    order = {
      name: 'New order',
      products: []
    };
  }

  return (
    <div>
      <div>
        <Input
          size="large"
          placeholder={order.name}
          onChange={() => console.log('new name')}
          style={{ width: '300px' }}
        />
        <Link to={`/orders/${order.id}/overview`} style={{ float: 'right' }}>
          <Badge count={order.products.length}>
            <Button>Order</Button>
          </Badge>
        </Link>
      </div>
      <Search
        style={{ width: '500px', margin: '2em 0' }}
        placeholder="Article number or product name..."
      />
      <ProductsTable products={order.products} />
    </div>
  );
};

export default OrderDetail;
