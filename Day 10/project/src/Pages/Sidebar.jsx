import { Layout, Menu } from "antd";
import Navbar from './Navbar';
import { useState } from "react";
import { Link } from 'react-router-dom';
import '../Assets/css/Sidebar.css';
import {
  UserOutlined,
  PhoneOutlined,
  MessageOutlined,
  QuestionCircleOutlined,
  FileProtectOutlined,
  FileTextOutlined,
  DashboardOutlined,
  BarChartOutlined,
  HomeOutlined
} from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu } = Menu;
 
export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);


  const onCollapse = (isCollapsed) => { // Rename the parameter to avoid shadowing
    setCollapsed(!isCollapsed); // Use the state setter function

    };
  

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={() => onCollapse(collapsed)}
      style={{ backgroundColor: "#000" }}
      theme="dark"
    >
    <div>
    
  </div>
      <div
        className="logo"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {!collapsed ? (
          <img  />
        ) : (
          <img width="25" />
        )}
      </div>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
      <div
        className="custom-trigger"
        onClick={() => onCollapse(collapsed)}
        style={{
          color: "white",
          fontSize: "18px", // Adjust the icon size if needed
          cursor: "pointer", // Add pointer cursor for interaction
          textAlign: "center",
          marginBottom: "20px",
          marginTop: "20px"
        }}
      >
        {collapsed ? <span>▶️</span> : <span>◀️</span>}
      </div>
        <Menu mode="inline" style={{ backgroundColor: "black" }} theme="dark">
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<DashboardOutlined />}>
            <Link to="/Dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<BarChartOutlined  />}>
            <Link to="/Poll">Poll</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            <Link to="/About">About</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<PhoneOutlined/>}>
            <Link to="/Contact">Contact</Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<MessageOutlined />}>
            <Link to="/Feedback">Feedback</Link>
          </Menu.Item>
          <Menu.Item key="7" icon={<QuestionCircleOutlined/>}>
            <Link to="/Faq">FAQ</Link>
          </Menu.Item>
          <Menu.Item key="8" icon={<FileTextOutlined/>}>
            <Link to="/Terms">Terms and Conditions</Link>
          </Menu.Item>
          <Menu.Item key="9" icon={<FileProtectOutlined/>}>
            <Link to="/Privacy">Privacy Policy</Link>
          </Menu.Item>
        </Menu>
        <Menu
          defaultSelectedKeys={["1"]}
          mode="inline"
          style={{ marginBottom: 70 }}
          color="white"
        >
         
        </Menu>
      </div>
      
    </Sider>
  );
}

// import React, { useState } from "react";
// // import Icon from "../Images/Icon.svg";
// // import Profile from "../Images/profile.png";
// // import Dashboard from "../Images/dashboard.svg";
// // import Transactions from "../Images/transactions.svg";
// // import Performance from "../Images/performance.svg";
// // import News from "../Images/news.svg";
// // import Settings from "../Images/settings.svg";
// // import Support from "../Images/support.svg";
// import { useLocation } from "react-router-dom";

// const Sidebar = () => {
//     const location = useLocation();

//     const [closeMenu, setCloseMenu] = useState(false);

//     const handleCloseMenu = () => {
//         setCloseMenu(!closeMenu);
//     };

//     return (
//         <div className={closeMenu === false ? "sidebar" : "sidebar active"}>
//             <div
//                 className={
//                     closeMenu === false
//                         ? "logoContainer"
//                         : "logoContainer active"
//                 }
//             >
//                 {/* <img src={Icon} alt="icon" className="logo" /> */}
//                 <h2 className="title">evergreen. </h2>
//             </div>
//             <div
//                 className={
//                     closeMenu === false
//                         ? "burgerContainer"
//                         : "burgerContainer active"
//                 }
//             >
//                 <div
//                     className="burgerTrigger"
//                     onClick={() => {
//                         handleCloseMenu();
//                     }}
//                 ></div>
//                 <div className="burgerMenu"></div>
//             </div>
//             <div
//                 className={
//                     closeMenu === false
//                         ? "profileContainer"
//                         : "profileContainer active"
//                 }
//             >
//                 {/* <img src={Profile} alt="profile" className="profile" /> */}
//                 <div className="profileContents">
//                     <p className="name">Hello, John👋</p>
//                     <p>johnsmith@gmail.com</p>
//                 </div>
//             </div>
//             <div
//                 className={
//                     closeMenu === false
//                         ? "contentsContainer"
//                         : "contentsContainer active"
//                 }
//             >
//                 <ul>
//                     <li className={location.pathname === "/" ? "active" : ""}>
//                         {/* <img src={Dashboard} alt="dashboard" /> */}
//                         <a href="/">dashboard</a>
//                     </li>
//                     <li
//                         className={
//                             location.pathname === "/transactions"
//                                 ? "active"
//                                 : ""
//                         }
//                     >
//                         {/* <img src={Transactions} alt="transactions" /> */}
//                         <a href="/transactions">transactions</a>
//                     </li>
//                     <li
//                         className={
//                             location.pathname === "/performance" ? "active" : ""
//                         }
//                     >
//                         {/* <img src={Performance} alt="Performance" /> */}
//                         <a href="/performance">performance</a>
//                     </li>
//                     <li
//                         className={
//                             location.pathname === "/news" ? "active" : ""
//                         }
//                     >
//                         {/* <img src={News} alt="News" /> */}
//                         <a href="/news">news</a>
//                     </li>
//                     <li
//                         className={
//                             location.pathname === "/settings" ? "active" : ""
//                         }
//                     >
//                         {/* <img src={Settings} alt="Settings" /> */}
//                         <a href="/settings">settings</a>
//                     </li>
//                     <li
//                         className={
//                             location.pathname === "/support" ? "active" : ""
//                         }
//                     >
//                         {/* <img src={Support} alt="Support" /> */}
//                         <a href="/support">support</a>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default Sidebar;

