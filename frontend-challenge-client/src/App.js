import { Transactions } from "./transactions/Transactions.js";
import { Divider, Typography, Space } from "antd";
import { Budget } from "./budget/Budget.js";
import { CardInfo } from "./cardInfo/CardInfo.js";
import { Nav } from "./nav/Nav.js";
import "antd/dist/antd.css";

import "./App.css";

const { Title } = Typography;

function App() {
  return (
    <div className="App">
      <Nav />
      <section>
        <Title>Manage Financing</Title>
        <Divider />
        <Space direction="vertical">
          <Budget />
          <CardInfo />
          <Transactions />
        </Space>
      </section>
    </div>
  );
}

export default App;
