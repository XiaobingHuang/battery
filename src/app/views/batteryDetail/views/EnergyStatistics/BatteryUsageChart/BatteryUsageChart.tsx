import React, { useMemo, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ResponsiveSankey } from "@nivo/sankey";
import { ApexOptions } from "apexcharts";
import colors from "@/app/colors";
import { Chart } from "react-google-charts";
import { Row, Col, Space, Table, Tabs, Divider } from "antd";

const chargeDischargedata = [
  {
    Time: "1/1/23 0:00",
    Charge: 2.11,
    Discharge: 0,
    "MWh Price": 48.99,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 50,
  },
  {
    Time: "1/1/23 0:15",
    Charge: 2.09,
    Discharge: 0,
    "MWh Price": 49.87,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 50,
  },
  {
    Time: "1/1/23 0:30",
    Charge: 2.16,
    Discharge: 0,
    "MWh Price": 49.81,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 50,
  },
  {
    Time: "1/1/23 0:45",
    Charge: 2.14,
    Discharge: 0,
    "MWh Price": 48.07,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 50,
  },
  {
    Time: "1/1/23 1:00",
    Charge: 2.56,
    Discharge: 0,
    "MWh Price": 49.1,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 50,
  },
  {
    Time: "1/1/23 1:15",
    Charge: 2.08,
    Discharge: 0,
    "MWh Price": 48.33,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 50,
  },
  {
    Time: "1/1/23 1:30",
    Charge: 2.48,
    Discharge: 0,
    "MWh Price": 49.82,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 50,
  },
  {
    Time: "1/1/23 1:45",
    Charge: 2.03,
    Discharge: 0,
    "MWh Price": 49.31,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 50,
  },
  {
    Time: "1/1/23 2:00",
    Charge: 2.95,
    Discharge: 0,
    "MWh Price": 49.45,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 50,
  },
  {
    Time: "1/1/23 2:15",
    Charge: 2.34,
    Discharge: 0,
    "MWh Price": 48.33,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 50,
  },
  {
    Time: "1/1/23 2:30",
    Charge: 2.99,
    Discharge: 0,
    "MWh Price": 48.01,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 50,
  },
  {
    Time: "1/1/23 2:45",
    Charge: 2.78,
    Discharge: 0,
    "MWh Price": 48.28,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 50,
  },
  {
    Time: "1/1/23 3:00",
    Charge: 2.87,
    Discharge: 0,
    "MWh Price": 48.57,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 50,
  },
  {
    Time: "1/1/23 3:15",
    Charge: 2.12,
    Discharge: 0,
    "MWh Price": 48.2,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 50,
  },
  {
    Time: "1/1/23 3:30",
    Charge: 2.49,
    Discharge: 0,
    "MWh Price": 49.59,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 50,
  },
  {
    Time: "1/1/23 3:45",
    Charge: 2.01,
    Discharge: 0,
    "MWh Price": 49.35,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 4:00",
    Charge: 2.74,
    Discharge: 0,
    "MWh Price": 48.17,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 4:15",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 49.72,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 4:30",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 49.6,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 4:45",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 49.72,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 5:00",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 48.42,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 5:15",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 48.19,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 5:30",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 48.81,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 5:45",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 49.43,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 6:00",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 49.16,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 6:15",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 48.76,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 6:30",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 56.91,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 6:45",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 57.33,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 7:00",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 58.07,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 7:15",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 58.92,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 7:30",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 56.7,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 7:45",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 56.34,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 8:00",
    Charge: 0,
    Discharge: -2.85,
    "MWh Price": 55.23,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 8:15",
    Charge: 0,
    Discharge: -2.23,
    "MWh Price": 55.32,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 8:30",
    Charge: 0,
    Discharge: -2.86,
    "MWh Price": 56.76,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 8:45",
    Charge: 0,
    Discharge: -2.32,
    "MWh Price": 55.02,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 9:00",
    Charge: 0,
    Discharge: -2.79,
    "MWh Price": 56.51,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 9:15",
    Charge: 0,
    Discharge: -2.58,
    "MWh Price": 55.73,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 9:30",
    Charge: 0,
    Discharge: -2.16,
    "MWh Price": 55.93,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 9:45",
    Charge: 0,
    Discharge: -2.92,
    "MWh Price": 57.05,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 10:00",
    Charge: 0,
    Discharge: -2.59,
    "MWh Price": 56.18,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 10:15",
    Charge: 0,
    Discharge: -2.85,
    "MWh Price": 51.25,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 10:30",
    Charge: 0,
    Discharge: -2.79,
    "MWh Price": 53.63,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 10:45",
    Charge: 0,
    Discharge: -2.81,
    "MWh Price": 51.07,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 11:00",
    Charge: 0,
    Discharge: -2.13,
    "MWh Price": 52.65,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 11:15",
    Charge: 0,
    Discharge: -2.93,
    "MWh Price": 52.42,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 11:30",
    Charge: 0,
    Discharge: -2.36,
    "MWh Price": 61.61,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 11:45",
    Charge: 0,
    Discharge: -2.48,
    "MWh Price": 62.95,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 12:00",
    Charge: 0,
    Discharge: -2.17,
    "MWh Price": 64.15,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 12:15",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 63.02,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 12:30",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 66.35,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 12:45",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 63.99,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 13:00",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 63.19,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 13:15",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 67.09,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 13:30",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 65.73,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 13:45",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 63.62,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 14:00",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 64.58,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 14:15",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 66.63,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 14:30",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 66.01,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 14:45",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 65.01,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 15:00",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 65.19,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 15:15",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 65.71,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 15:30",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 67.72,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 15:45",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 69.23,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 16:00",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 70.89,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 16:15",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 71.26,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 16:30",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 72.23,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 16:45",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 69.92,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 17:00",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 71.12,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 17:15",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 69.71,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 17:30",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 71.41,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 17:45",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 70.41,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 18:00",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 71.45,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 18:15",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 72.84,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 18:30",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 72.25,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 18:45",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 52.12,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 19:00",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 53.57,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 19:15",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 55.32,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 19:30",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 54.24,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 19:45",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 52.63,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 20:00",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 52.06,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 20:15",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 52.36,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 20:30",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 53.93,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 20:45",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 53.5,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 21:00",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 54,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 21:15",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 52.1,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 21:30",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 52.14,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 21:45",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 52.38,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 22:00",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 54.5,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 22:15",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 54.15,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 22:30",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 49.78,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 22:45",
    Charge: 0,
    Discharge: 0,
    "MWh Price": 47.61,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 23:00",
    Charge: 2.62,
    Discharge: 0,
    "MWh Price": 44.49,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 23:15",
    Charge: 2.7,
    Discharge: 0,
    "MWh Price": 49.67,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 23:30",
    Charge: 2.02,
    Discharge: 0,
    "MWh Price": 45.78,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
  {
    Time: "1/1/23 23:45",
    Charge: 2.75,
    Discharge: 0,
    "MWh Price": 46.04,
    DischargePriceTrigger: 55,
    ChargePriceTrigger: 49,
  },
];

const battery_life_series = [
  {
    name: "Battery Life",
    data: [
      89.97, 89.92, 89.86, 89.8, 89.74, 89.69, 89.67, 89.62, 89.59, 89.55,
      89.53, 89.52, 89.47, 89.43, 89.41, 89.33, 89.27, 89.26, 89.22, 89.2,
      89.13, 89.1, 89.03, 89.01, 88.97, 88.95, 88.94, 88.92, 88.9, 88.89, 88.82,
      88.78, 88.74, 88.68, 88.63, 88.6, 88.54, 88.49, 88.47, 88.41, 88.33,
      88.26, 88.19, 88.12, 88.05, 87.98, 87.94, 87.89, 87.85, 87.83, 87.82,
      87.75, 87.68, 87.66, 87.59, 87.52, 87.48, 87.44, 87.41, 87.36, 87.34,
      87.28, 87.27, 87.21, 87.15, 87.12, 87.08, 87.02, 86.96, 86.9, 86.84,
      86.81, 86.73, 86.67, 86.62, 86.56, 86.49, 86.46, 86.42, 86.37, 86.36,
      86.32, 86.28, 86.27, 86.24, 86.22, 86.18, 86.1, 86.09, 86.05, 86.01,
      85.96, 85.92, 85.85, 85.77, 85.71,
    ],
  },
];

const battery_life_options: ApexOptions = {
  chart: {
    height: 350,
    type: "line",
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
    width: [3],
  },
  title: {
    text: "Battery Life",
    align: "left",
  },
  xaxis: {
    categories: chargeDischargedata.map((e) => e.Time),
    type: "datetime",
  },
  colors: [colors.green],
};

const series_battery = [85.77, 100 - 85.77];
const options_battery: ApexOptions = {
  chart: {
    width: 380,
    type: "pie",
  },
  labels: ["Battery Maximum Capacity", "Battery Consumption Usage"],
  colors: [colors.green, colors.gray],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "top",
        },
      },
    },
  ],
};

const BatteryUsageChart = () => {
  return (
    <div>
      <Space>
      <ReactApexChart
        options={options_battery}
        series={series_battery}
        type="pie"
        width={500}
        height={400}
      />
      <ReactApexChart
        options={battery_life_options}
        series={battery_life_series}
        type="line"
        width={500}
        height={400}
      />
      </Space>
    </div>
  );
};

export default BatteryUsageChart;
