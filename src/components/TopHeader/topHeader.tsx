import React, { useState } from 'react';
import {Link } from "react-router-dom";
import { Layout, Menu, theme } from 'antd';
import type { MenuProps } from 'antd';
import "./styles.scss"

const { Header } = Layout;
interface IHeaderMenu{
  key:string,
  label:string,
  icon?:string,
  url?:string
}

const headerMenue=[
  {
    key:"curren_state",
    label:"Portfolio",
    path:"/home"
  },
  {
    key:"bid_award",
    label:"Bid Award",
    path:"/bid-award"
  },
  {
    key:"carbon_report",
    label:"Carbon Report",
    path:"/carbon-report"
  },
  {
    key:"financial_report",
    label:"Financial Report",
    path:"finance-report"
  },
  {
    key:"alert",
    label:"Alert",
    path:"setting"
  },
  {
    key:"settings",
    label:"Settings",
    path:"setting"
  },
]


function TopHeader() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div>
      <Header style={{ padding:0, background: colorBgContainer, display: 'flex', alignItems: 'center'  }}>
      <Menu
            style={{width:"100%"}}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["curren_state"]}
            items={headerMenue.map((item) => {
            return {
              key: item.key,
              label: <Link to={item.path} style={{ color: 'inherit', textDecoration: 'inherit'}}>{item.label}</Link>,
            };
          })}
        />
      </Header>
    </div>
  );
}

export default TopHeader
