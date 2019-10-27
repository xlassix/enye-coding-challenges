import React from "react"
import { Table } from 'antd';
const columns = [
    {
    title: 'First Name',
    dataIndex: 'first_name',
    },
    {
    title: 'Last Name',
    dataIndex: 'last_name',
    },
  {
    title: 'Birthday',
    dataIndex: 'birthday',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
  title: 'Hobby',
  dataIndex: 'Hobby',
},
];
// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};

function MyTable({users}){
 return(<Table rowSelection={rowSelection} columns={columns} dataSource={users} />)
}

export default MyTable;