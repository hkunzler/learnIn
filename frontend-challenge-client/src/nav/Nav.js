import { MenuOutlined } from "@ant-design/icons";

import "./Nav.css";

export function Nav() {
  return (
    <nav>
      <div>LEARN IN</div>
      <MenuOutlined style={{ cursor: 'pointer' }}/>
    </nav>
  );
}
