import React, { Component } from 'react';
import DecideNewOrderType from './DecideNewOrderType';
import OrderDetail from './OrderDetail';
import BaseOnPreviousOrder from './BaseOnPreviousOrder';

class NewOrder extends Component {
  constructor(props) {
    super(props);

    this.state = { step: 1 };

    this.nextStep = this.nextStep.bind(this);
  }

  nextStep(step) {
    this.setState({ step });
  }

  render() {
    switch (this.state.step) {
      case 1:
        return <DecideNewOrderType nextStep={this.nextStep} />;
      case 2:
        return <BaseOnPreviousOrder nextStep={this.nextStep} />;
      case 3:
        return <OrderDetail />;
      default:
        return <DecideNewOrderType nextStep={this.nextStep} />;
    }
  }
}

export default NewOrder;
