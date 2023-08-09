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
  // {
  //   key: "5",
  //   label: "Battery Modules Statistics",
  //   path: "battery-modules",
  // },
];
const BatteryDetailEnergy = () => {
  const nav = useNavigate();
  // console.log(nav);
  return (
    <Row style={{padding:"0 16px"}} gutter={[16,16]}>
      <Col span={6}>
        <Card>
          <Typography level={"h3"}>Battery Status</Typography>
          <table>
            <tr><th>SOC</th><td>87%</td></tr>
            <tr><th>Operating Mode</th><td>Charging</td></tr>
            <tr><th>Power</th><td>10 MW</td></tr>
            <tr><th>C-Rating</th><td>0.25C</td></tr>
            <tr><th>Current</th><td>25A</td></tr>
            <tr><th>Voltage</th><td>400V</td></tr>
            <tr><th>SOH</th><td>97.3%</td></tr>
            <tr><th>Temp</th><td>117F | 47C</td></tr>
          </table>

        </Card>
        {/*<Card title="Parameter">*/}
        {/*  <Card>*/}
        {/*    <p>Capacity: 100Ah</p>*/}
        {/*  </Card>*/}

        {/*  <Card title="Charging">*/}
        {/*    <table>*/}
        {/*      <tr><th>C Rating</th><td>0.25C</td></tr>*/}
        {/*    </table>*/}
        {/*    <p>C rating: 0.25C</p>*/}
        {/*    <p>Curent: 25A</p>*/}
        {/*    <p>Threshold: 90%</p>*/}
        {/*  </Card>*/}
        {/*  <Card title="Discharging">*/}
        {/*    <p>C rating: 0.25C</p>*/}
        {/*    <p>Curent: 25A</p>*/}
        {/*    <p>Threshold: 115%</p>*/}
        {/*  </Card>*/}
        {/*  <Card>*/}
        {/*    <p>Temp: 25-115F</p>*/}
        {/*    <p>Threshold: 120F</p>*/}
        {/*  </Card>*/}
        {/*  <Card>*/}
        {/*    <p>Voltage: 400V</p>*/}
        {/*    <p>Threshold: 110%</p>*/}
        {/*  </Card>*/}
        {/*  <Card>*/}
        {/*    <p>Cycle: 6,000</p>*/}
        {/*    <p>Life: 20</p>*/}
        {/*  </Card>*/}
        {/*</Card>*/}

        <Divider/>
      </Col>
      <Col span={18}>
        <Card title="Battery name" style={{ overflow: "scroll" }}>
          <Row>
            <Col span={8}>
              <Typography
                  textAlign={"center"}
                  id="Energy Consumption"
                  textTransform="uppercase"
              >
                Energy Consumption
              </Typography>
              <Typography
                  textAlign={"center"}
                  level={"h3"}
              >
                Today: 32.5 MWh
              </Typography>
              <Typography
                  textAlign={"center"}
                  level={"h3"}
              >
                Yesterday: 29.8 MWh
              </Typography>
            </Col>
            <Col span={8}>
              <Typography
                  id="Energy Production"
                  textTransform="uppercase"
                  textAlign={"center"}
              >
                Energy Production
              </Typography>
              <Typography
                  textAlign={"center"}
                  level={"h3"}
              >
                Today: 42.3  MWh
              </Typography>
              <Typography
                  textAlign={"center"}
                  level={"h3"}
              >
                Yesterday: 47.1 MWh
              </Typography>
            </Col>
            <Col span={8}>
              <Typography
                  id="Cost Ananlysis"
                  textTransform="uppercase"
                  textAlign={"center"}
              >
                Net Revenue
              </Typography>
              <Typography
                  textAlign={"center"}
                  level={"h3"}
              >
                Today: $1,240.32
              </Typography>
              <Typography
                  textAlign={"center"}
                  level={"h3"}
              >
                Yesterday: $1,541.88
              </Typography>
            </Col>
          </Row>
        </Card>
        <Card>
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
          <Outlet />
        </Card>
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
