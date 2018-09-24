import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom';
import { Layout, Tabs } from 'antd';

import './App.css';

import Orders from './components/Orders';
import OrderDetail from './components/OrderDetail';
import NewOrder from './components/NewOrder';
import OrderOverview from './components/OrderOverview';

const Header = Layout.Header;
const Content = Layout.Content;
const TabPane = Tabs.TabPane;

class App extends Component {
  render() {
    return (
      <Router>
        <Layout style={{ height: '100vh' }}>
          <Header>
            <Link to="/">
              <h1 style={{ color: '#FFF', display: 'inline-block' }}>Ranson</h1>
            </Link>
          </Header>
          <Content style={{ height: '100%', padding: '25px' }}>
            <Tabs defaultActiveKey="2" style={{ overflowX: 'visible' }}>
              <TabPane tab="Tab 1" key="1" />
              <TabPane
                tab="Bestelhistoriek"
                key="2"
                style={{ padding: '25px' }}
              >
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={() => <Redirect to="/orders" />}
                  />
                  <Route exact path="/orders/" component={Orders} />
                  <Route path="/orders/new" component={NewOrder} />
                  <Route
                    path="/orders/:id/overview"
                    component={OrderOverview}
                  />
                  <Route path="/orders/:id" component={OrderDetail} />
                </Switch>
              </TabPane>
              <TabPane tab="Tab 3" key="3" />
              <TabPane tab="Tab 4" key="4" />
              <TabPane tab="Tab 5" key="5" />
              <TabPane tab="Tab 6" key="6" />
            </Tabs>
          </Content>
        </Layout>
      </Router>
    );
  }
}

export default App;
