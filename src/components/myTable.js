import React from "react"
import { Table } from 'antd';
import {useSelector} from 'react-redux'


// columns represent table header and possible features
const columns = [
    {
    title: 'User ID',
    dataIndex: 'userId',
    },
    {
    title: 'First Name',
    dataIndex: 'first_name',
    sorter: (a, b) => a.first_name.length - b.first_name.length,
    sortDirections: ['descend','ascend'],
    },
    {
    title: 'Last Name',
    dataIndex: 'last_name',
    sorter: (a, b) => a.last_name.length - b.last_name.length,
    sortDirections: ['descend','ascend'],
    },
  {
    title: 'Birthday',
    dataIndex: 'birthday',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    sorter: (a, b) => a.age.length - b.age.length,
    sortDirections: ['descend','ascend'],
  },
  {
  title: 'Hobby',
  dataIndex: 'Hobby',
},
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};

function MyTable(){
  //using selector to get all user from redux store
  const users=useSelector((state)=>state.users)
 return(<Table rowSelection={rowSelection} columns={columns} dataSource={users} key='userId'  />)
}

export default MyTable;


