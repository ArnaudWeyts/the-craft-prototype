import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id'
  },
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
        <a>Add</a>
      </span>
    )
  }
];

const ProductsTable = ({ products }) => {
  return <Table columns={columns} dataSource={products} rowKey="id" />;
};

export default ProductsTable;
