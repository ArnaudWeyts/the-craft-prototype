import React from 'react';
import { Card, Button } from 'antd';

const DecideNewOrderType = ({ nextStep }) => {
  return (
    <Card>
      <Button
        style={{ width: '50%', height: '200px' }}
        onClick={() => nextStep(3)}
      >
        New Order
      </Button>
      <Button
        style={{ width: '50%', height: '200px' }}
        onClick={() => nextStep(2)}
      >
        Base on a previous order
      </Button>
    </Card>
  );
};

export default DecideNewOrderType;
