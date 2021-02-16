import logo from "./logo.svg";
import "./App.css";
import { Button, Layout, Menu } from "antd";
import {
  HomeTwoTone,
  BookTwoTone,
  QuestionCircleTwoTone,
} from "@ant-design/icons";
import First from "./Components/First";
const { Sider, Content } = Layout;

function App() {
  return (
    <Layout>
      <Layout.Sider style={{ height: "100vh" }}>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item>Covid 19 India</Menu.Item>
          <Menu.Item
            icon={<HomeTwoTone key="1" style={{ fontSize: "30px" }} />}
          ></Menu.Item>
          <Menu.Item
            icon={<BookTwoTone key="2" style={{ fontSize: "30px" }} />}
          ></Menu.Item>
          <Menu.Item
            icon={
              <QuestionCircleTwoTone key="3" style={{ fontSize: "30px" }} />
            }
          ></Menu.Item>
        </Menu>
      </Layout.Sider>
      <Layout.Content
        style={{
          margin: "24px 16px",
          padding: 24,
          minHeight: 280,
        }}
      >
        <First />
      </Layout.Content>
    </Layout>
  );
}

export default App;
