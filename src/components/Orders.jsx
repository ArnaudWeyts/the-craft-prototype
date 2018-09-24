import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'antd';

import Order from './Order';

import orders from '../orders.json';

class Orders extends Component {
  render() {
    return (
      <div>
        <Link to="/orders/new">
          <Button type="primary" style={{ marginBottom: '2em' }}>
            New order
          </Button>
        </Link>
        <Row gutter={16}>
          {orders.map(order => (
            <Col span={8} key={order.id} style={{ marginBottom: '1em' }}>
              <Order order={order} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Orders;
