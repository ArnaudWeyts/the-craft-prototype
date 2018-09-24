import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    render: text => <a>{text}</a>
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a>Delete</a>
      </span>
    )
  }
];

const ProductsTableSimple = ({ products }) => {
  return (
    <Table
      style={{ width: '60%', display: 'inline-block' }}
      columns={columns}
      dataSource={products}
      rowKey="id"
    />
  );
};

export default ProductsTableSimple;
