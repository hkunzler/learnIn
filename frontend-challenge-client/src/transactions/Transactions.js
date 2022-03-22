import { useEffect, useState } from "react";
import { Card, Input, Table } from "antd";

import { formatAmount } from "../utils";

import './Transactions.css';

const { Search } = Input;

export function Transactions() {
  const [dataSource, setDataSource] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);
  const columns = [
    { title: "DATE", dataIndex: "date", key: "date" },
    { title: "DESCRIPTION", dataIndex: "description", key: "description" },
    { title: "AMOUNT", dataIndex: "amount", key: "amount" },
    { title: "STATUS", dataIndex: "status", key: "status" },
  ];
  const formatDate = (date) => {
    let newDate = new Date(date);
    return `${
      newDate.getMonth() + 1
    }/${newDate.getDate()}/${newDate.getFullYear()}`;
  };

  useEffect(() => {
    fetch("/transactions")
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setLoading(false);
        setDataSource(response);
      });
  }, [searchValue]);

  const onSearch = (value) => {
    setSearchValue(value.toLowerCase());
  };
  let transactions = Object.values(dataSource).map(
    (transaction) =>
      transaction.company.toLowerCase().includes(searchValue) && {
        key: transaction.id,
        date: formatDate(transaction.date),
        description: [
          <img
            style={{ maxWidth: "3rem", marginRight: "1rem" }}
            src={transaction.logo}
          />,
          transaction.company,
        ],
        amount: formatAmount(transaction.amount),
        status: transaction.status,
      }
  );
  const search = (
    <Search
      allowClear
      placeholder="Search Transactions"
      onSearch={onSearch}
      style={{ width: 200 }}
    />
  );
  return (
    <section className="transactions">
      <Card bodyStyle={{borderRadius:"15px"}} title="Transactions" extra={search} loading={loading}>
        <Table
          pagination={{ defaultPageSize: 4, showSizeChanger: false }}
          dataSource={transactions}
          columns={columns}
        />
      </Card>
    </section>
  );
}
