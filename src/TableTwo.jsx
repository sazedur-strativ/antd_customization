import { Checkbox, Divider, Radio, Table } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sydney No. 1 Lake Park',
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    // Column configuration not to be checked
    name: record.name,
  }),
};
const TableTwo = () => {
  const [selectionType, setSelectionType] = useState('checkbox');
  return (
    <DivStyle>
      <h1 >Table Two</h1>
      <Radio.Group
        onChange={({ target: { value } }) => {
          setSelectionType(value);
        }}
        value={selectionType}
      >
        <Checkbox value="checkbox">Checkbox</Checkbox>
        <Radio value="radio">radio</Radio>
      </Radio.Group>

      <Divider />

    <TableStyle>

    <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </TableStyle>
   
    </DivStyle>
  );
};
const DivStyle = styled.div`
background-color:rgb(254 249 195);
`
const TableStyle = styled.div`
  .ant-table-thead > tr > th {
    font-weight: bold;
    color: #2c82ec;
    text-align: center;
  }

  .ant-table-tbody > tr > td {
    align-self: center;
    color: rgb(22 163 74);
    

  }

 
`;

export default TableTwo;