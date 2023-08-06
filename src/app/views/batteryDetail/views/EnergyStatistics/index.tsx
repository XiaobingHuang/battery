import React, { useMemo, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ResponsiveSankey } from "@nivo/sankey";
import { ApexOptions } from "apexcharts";
import colors from "@/app/colors";
import { Chart } from "react-google-charts";
import { Row, Col, Space, Table, Tabs } from "antd";
import {
  Box,
  Card,
  Stack,
  Button,
  Grid,
  Typography,
  List,
  ListItem,
  Divider,
} from "@mui/joy";
import BatteryConfiguration from "@/components/BatteryConfiguration/BatteryConfiguration";
import { Outlet, useNavigate, useParams } from "react-router";

const data = [
  ["From", "To", "Weight"],
  ["Brazil", "Portugal", 5],
  ["Brazil", "France", 1],
  ["Brazil", "Spain", 1],
  ["Brazil", "England", 1],
  ["Canada", "Portugal", 1],
  ["Canada", "France", 5],
  ["Canada", "England", 1],
  ["Mexico", "Portugal", 1],
  ["Mexico", "France", 1],
  ["Mexico", "Spain", 5],
  ["Mexico", "England", 1],
  ["USA", "Portugal", 1],
  ["USA", "France", 1],
  ["USA", "Spain", 1],
  ["USA", "England", 5],
  ["Portugal", "Angola", 2],
  ["Portugal", "Senegal", 1],
  ["Portugal", "Morocco", 1],
  ["Portugal", "South Africa", 3],
  ["France", "Angola", 1],
  ["France", "Senegal", 3],
  ["France", "Mali", 3],
  ["France", "Morocco", 3],
  ["France", "South Africa", 1],
  ["Spain", "Senegal", 1],
  ["Spain", "Morocco", 3],
  ["Spain", "South Africa", 1],
  ["England", "Angola", 1],
  ["England", "Senegal", 1],
  ["England", "Morocco", 2],
  ["England", "South Africa", 7],
  ["South Africa", "China", 5],
  ["South Africa", "India", 1],
  ["South Africa", "Japan", 3],
  ["Angola", "China", 5],
  ["Angola", "India", 1],
  ["Angola", "Japan", 3],
  ["Senegal", "China", 5],
  ["Senegal", "India", 1],
  ["Senegal", "Japan", 3],
  ["Mali", "China", 5],
  ["Mali", "India", 1],
  ["Mali", "Japan", 3],
  ["Morocco", "China", 5],
  ["Morocco", "India", 1],
  ["Morocco", "Japan", 3],
];

const series_battery = [70, 30];
const options_battery: ApexOptions = {
  chart: {
    width: 380,
    type: "pie",
  },
  labels: ["Battery Usage", "Battery "],
  colors: [colors.green, colors.lighterRed],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

const options = {
  sankey: {
    link: { color: { fill: "#d799ae" } },
    node: {
      colors: ["#a61d4c"],
      label: { color: "#871b47" },
    },
  },
};

const tabOptions = [
  {
    key: "1",
    path: "soc-monitoring",
    label: "SOC Monitoring",
  },
  {
    key: "2",
    label: "Energy Charge/Discharge Cycle",
    path: "charge-discharge-cycle",
  },
  {
    key: "3",
    label: "Energy Analytics Table",
    path: "energy-statistics-table",
  },
  {
    key: "4",
    label: "Battery Usage Statistics",
    path: "battery-usage",
  },
];
const BatteryDetailEnergy = () => {
  const nav = useNavigate();
  // console.log(nav);
  return (
    <Row>
      <Col span={6}>
        <Typography
          id="Energy Comsumption"
          textTransform="uppercase"
          fontWeight="lg"
        >
          Energy Comsumption
        </Typography>
        <List aria-labelledby="Energy Comsumption">
          <ListItem>Today: 12.5 kWh</ListItem>
          <ListItem>Yesterday: 10.8 kWh</ListItem>
        </List>
        <Divider/>
        <Typography
          id="Energy Production"
          textTransform="uppercase"
          fontWeight="lg"
        >
          Energy Production
        </Typography>
        <List aria-labelledby="Energy Production">
          <ListItem>Solar: 5.2 kWh</ListItem>
          <ListItem>Wind: 3.6 kWh</ListItem>
        </List>
        <Divider/>
        <Typography
          id="Cost Ananlysis"
          textTransform="uppercase"
          fontWeight="lg"
        >
          Cost Ananlysis
        </Typography>
        <List aria-labelledby="Cost Ananlysis">
          <ListItem>Cost saving: $200</ListItem>
          <ListItem>ROI: 15%</ListItem>
        </List>
        <Divider/>
      </Col>
      <Col span={18}>
        <div>
          <Tabs
            onTabClick={(a) => {
              const tab = tabOptions.find((t) => t.key === a);
              if (tab) {
                nav(tab.path);
              }
            }}
            tabBarStyle={{ background: "#fff", padding: "0 15px" }}
            defaultActiveKey="1"
            items={tabOptions}
          />
        </div>
        <Outlet />
      </Col>
    </Row>
  );
};
export default BatteryDetailEnergy;

{
  /* <Row>
          <Chart
            chartType="Sankey"
            width="450px"
            height="300px"
            data={data}
            options={options}
          />
        </Row>   */
}
