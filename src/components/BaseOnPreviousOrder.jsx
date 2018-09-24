import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

import orders from '../orders.json';

const BaseOnPreviousOrder = () => {
  return (
    <div>
      {orders.map(order => (
        <div key={order.id}>
          <p>
            {order.name}{' '}
            <Link to={`/orders/${order.id}`}>
              <Button style={{ float: 'right' }} type="primary">
                +
              </Button>
            </Link>
          </p>
        </div>
      ))}
    </div>
  );
};

export default BaseOnPreviousOrder;
