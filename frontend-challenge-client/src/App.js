import { Transactions } from './transactions/Transactions.js'
import { Divider, Typography} from "antd";
import { CreditCard  } from './creditCard/CreditCard.js';
import { Nav } from './nav/Nav.js';
import 'antd/dist/antd.css'

import "./App.css";

const { Title } = Typography;

function App() {
  
  return (
    <div className='App'>
      <Nav />
      <section>
      <Title>Manage Financing</Title>
      <Divider />
      <CreditCard />
      <Transactions />
      </section>
    </div>
  );
}

export default App;
