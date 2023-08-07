import React, { useMemo, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ResponsiveSankey } from "@nivo/sankey";
import { ApexOptions } from "apexcharts";
import colors from "@/app/colors";
import { Chart } from "react-google-charts";
import { Row, Col, Space, Table, Tabs } from "antd";

const socData = [
  {
    Timestamp: "1/1/23 0:15",
    Temp: 70,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.89,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 0:30",
    Temp: 69,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.89,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 0:45",
    Temp: 69.3,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.89,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 1:00",
    Temp: 69,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.89,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 1:15",
    Temp: 69.4,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.89,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 1:30",
    Temp: 69.7,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.89,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 1:45",
    Temp: 69.9,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.89,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 2:00",
    Temp: 69.9,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.89,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 2:15",
    Temp: 69.1,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.89,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 2:30",
    Temp: 69.2,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.89,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 2:45",
    Temp: 69.3,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.89,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 3:00",
    Temp: 69.4,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.89,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 3:15",
    Temp: 69.8,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.89,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 3:30",
    Temp: 69.8,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.89,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 3:45",
    Temp: 69.1,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.89,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 4:00",
    Temp: 69.8,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.89,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 4:15",
    Temp: 69.9,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.89,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 4:30",
    Temp: 69.6,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.89,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 4:45",
    Temp: 69.5,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.89,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 5:00",
    Temp: 69.6,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.89,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 5:15",
    Temp: 69.8,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.89,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 5:30",
    Temp: 69.5,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.89,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 5:45",
    Temp: 69,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.89,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 6:00",
    Temp: 69.5,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.89,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 6:15",
    Temp: 69.9,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.89,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 6:30",
    Temp: 69.7,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.89,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 6:45",
    Temp: 69.6,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.89,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 7:00",
    Temp: 69.8,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.89,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 7:15",
    Temp: 75.3,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.89,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 7:30",
    Temp: 74.4,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.89,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 7:45",
    Temp: 71.4,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.89,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 8:00",
    Temp: 75.4,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.89,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 8:15",
    Temp: 72.4,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.89,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 8:30",
    Temp: 71.7,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.89,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 8:45",
    Temp: 75.6,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.84,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 9:00",
    Temp: 73.2,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.79,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 9:15",
    Temp: 73.4,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.74,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 9:30",
    Temp: 75.6,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.69,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 9:45",
    Temp: 75.8,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.63,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 10:00",
    Temp: 80.2,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.58,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 10:15",
    Temp: 87.3,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.53,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 10:30",
    Temp: 99.3,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.48,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 10:45",
    Temp: 97.4,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.43,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 11:00",
    Temp: 95.7,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.38,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 11:15",
    Temp: 98.5,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.33,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 11:30",
    Temp: 97,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.28,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 11:45",
    Temp: 96.1,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.23,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 12:00",
    Temp: 114.3,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.17,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 12:15",
    Temp: 115,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.12,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 12:30",
    Temp: 112.8,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.07,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 12:45",
    Temp: 110.8,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.02,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 13:00",
    Temp: 73.6,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.02,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 13:15",
    Temp: 77,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.02,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 13:30",
    Temp: 76,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.02,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 13:45",
    Temp: 77.2,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.02,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 14:00",
    Temp: 77.5,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.02,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 14:15",
    Temp: 87.9,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.07,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 14:30",
    Temp: 85.8,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.12,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 14:45",
    Temp: 76.9,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.12,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 15:00",
    Temp: 76.7,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.12,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 15:15",
    Temp: 72.8,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.12,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 15:30",
    Temp: 82.8,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.12,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 15:45",
    Temp: 82.6,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.12,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 16:00",
    Temp: 68.8,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.12,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 16:15",
    Temp: 68.7,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.12,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 16:30",
    Temp: 69.3,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.12,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 16:45",
    Temp: 68.8,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.12,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 17:00",
    Temp: 68.9,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.12,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 17:15",
    Temp: 68.4,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.12,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 17:30",
    Temp: 69.1,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.12,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 17:45",
    Temp: 68.3,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.12,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 18:00",
    Temp: 68.6,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.12,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 18:15",
    Temp: 68.5,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.12,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 18:30",
    Temp: 68.1,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.12,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 18:45",
    Temp: 68.6,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.12,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 19:00",
    Temp: 68,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.12,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 19:15",
    Temp: 68.4,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.12,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 19:30",
    Temp: 67.9,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.12,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 19:45",
    Temp: 67.3,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.12,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 20:00",
    Temp: 67.2,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.12,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 20:15",
    Temp: 67.1,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.12,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 20:30",
    Temp: 67.4,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.12,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 20:45",
    Temp: 67.5,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.12,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 21:00",
    Temp: 66.8,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.12,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 21:15",
    Temp: 67.3,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.12,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 21:30",
    Temp: 67,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.12,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 21:45",
    Temp: 67,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.12,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 22:00",
    Temp: 66.8,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.17,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 22:15",
    Temp: 80,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.22,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 22:30",
    Temp: 79.8,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.28,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 22:45",
    Temp: 79.4,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.33,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 23:00",
    Temp: 79.3,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.38,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 23:15",
    Temp: 79.7,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.43,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 23:30",
    Temp: 79.6,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.48,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
  {
    Timestamp: "1/1/23 23:45",
    Temp: 79,
    TempMin: 43,
    TempMax: 108,
    Voltage: 240,
    VoltageMax: 300,
    SOC: 0.53,
    SOCMin: 0.04,
    Current: 12,
    CurrentMin: 5,
    CurrentMax: 20,
  },
];

const generateRandomDecreasingArray = (
  length,
  minInterval,
  maxInterval,
  initialValue
) => {
  const randomArray = [];
  let currentValue = initialValue;

  for (let i = 0; i < length; i++) {
    randomArray.push(currentValue.toFixed(2));
    currentValue -= Math.random() * (maxInterval - minInterval) + minInterval;
  }

  return randomArray;
};

const arrayLength = 95;

const module_1 = generateRandomDecreasingArray(arrayLength, 0.01, 0.02, 100);
const module_2 = generateRandomDecreasingArray(arrayLength, 0.01, 0.02, 80);
const module_3 = generateRandomDecreasingArray(arrayLength, 0.01, 0.02, 50);
const module_4 = generateRandomDecreasingArray(arrayLength, 0.01, 0.02, 80);
const module_5 = generateRandomDecreasingArray(arrayLength, 0.01, 0.02, 80);
const module_6 = generateRandomDecreasingArray(arrayLength, 0.01, 0.02, 70);
const module_7 = generateRandomDecreasingArray(arrayLength, 0.01, 0.02, 100);
const module_8 = generateRandomDecreasingArray(arrayLength, 0.01, 0.02, 80);
const module_9 = generateRandomDecreasingArray(arrayLength, 0.01, 0.02, 90);
const module_10 = generateRandomDecreasingArray(arrayLength, 0.01, 0.02, 100);
const module_11 = generateRandomDecreasingArray(arrayLength, 0.01, 0.02, 80);
const module_12 = generateRandomDecreasingArray(arrayLength, 0.01, 0.02, 100);
const module_13 = generateRandomDecreasingArray(arrayLength, 0.01, 0.02, 90);
const module_14 = generateRandomDecreasingArray(arrayLength, 0.01, 0.02, 70);
const module_15 = generateRandomDecreasingArray(arrayLength, 0.01, 0.02, 80);
const module_16 = generateRandomDecreasingArray(arrayLength, 0.01, 0.02, 100);

// const moduleData=socData.map(
//     e=>{
//         return{
//             TimeStamp: e.Timestamp,
//             m1:
//         }
//     }
// )

// export interface ApexOptions {
//   annotations?: ApexAnnotations;
//   chart?: ApexChart;
//   colors?: any[];
//   dataLabels?: ApexDataLabels;
//   fill?: ApexFill;
//   forecastDataPoints?: ApexForecastDataPoints;
//   grid?: ApexGrid;
//   labels?: string[];
//   legend?: ApexLegend;
//   markers?: ApexMarkers;
//   noData?: ApexNoData;
//   plotOptions?: ApexPlotOptions;
//   responsive?: ApexResponsive[];
//   series: ApexAxisChartSeries | ApexNonAxisChartSeries;
//   states?: ApexStates;
//   stroke?: ApexStroke;
//   subtitle?: ApexTitleSubtitle;
//   theme?: ApexTheme;
//   title?: ApexTitleSubtitle;
//   tooltip?: ApexTooltip;
//   xaxis?: ApexXAxis;
//   yaxis?: ApexYAxis | ApexYAxis[];
// }

const series_1 = [
  {
    name: "module1",
    data: module_1,
  },
];
const series_2 = [
  {
    name: "module2",
    data: module_2,
  },
];
const series_3 = [
  {
    name: "module3",
    data: module_3,
  },
];
const series_4 = [
  {
    name: "module4",
    data: module_4,
  },
];
const series_5 = [
  {
    name: "module5",
    data: module_5,
  },
];
const series_6 = [
  {
    name: "module6",
    data: module_6,
  },
];
const series_7 = [
  {
    name: "module7",
    data: module_7,
  },
];
const series_8 = [
  {
    name: "module8",
    data: module_8,
  },
];
const series_9 = [
  {
    name: "module9",
    data: module_9,
  },
];
const series_10 = [
  {
    name: "module10",
    data: module_10,
  },
];
const series_11 = [
  {
    name: "module11",
    data: module_11,
  },
];
const series_12 = [
  {
    name: "module12",
    data: module_12,
  },
];
const series_13 = [
  {
    name: "module13",
    data: module_13,
  },
];
const series_14 = [
  {
    name: "module14",
    data: module_14,
  },
];
const series_15 = [
  {
    name: "module15",
    data: module_15,
  },
];
const series_16 = [
  {
    name: "module16",
    data: module_16,
  },
];

function generateOptions(index): ApexOptions {
  return {
    chart: {
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    colors:[colors.green],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      width: [3],
    },
    title: {
      text: `${index} Module Chart`,
      align: "left",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: socData.map((e) => e.Timestamp),
      type: "datetime",
    },
  };
}

const ModuleCharts = () => {
  return (
    <Row style={{ overflow: "auto", height: "450px" }}>
      <Space>
        <ReactApexChart
          series={series_1}
          options={generateOptions(1)}
          height={200}
          width={300}
        />
        <ReactApexChart
          series={series_2}
          options={generateOptions(2)}
          height={200}
          width={300}
        />
        <ReactApexChart
          series={series_3}
          options={generateOptions(3)}
          height={200}
          width={300}
        />
      </Space>
      <Space>
        <ReactApexChart
          series={series_4}
          options={generateOptions(4)}
          height={200}
          width={300}
        />
        <ReactApexChart
          series={series_5}
          options={generateOptions(5)}
          height={200}
          width={300}
        />
        <ReactApexChart
          series={series_6}
          options={generateOptions(6)}
          height={200}
          width={300}
        />
      </Space>
      <Space>
        <ReactApexChart
          series={series_7}
          options={generateOptions(7)}
          height={200}
          width={300}
        />
        <ReactApexChart
          series={series_8}
          options={generateOptions(8)}
          height={200}
          width={300}
        />
        <ReactApexChart
          series={series_9}
          options={generateOptions(9)}
          height={200}
          width={300}
        />
        
      </Space>
      <Space>
      <ReactApexChart
          series={series_10}
          options={generateOptions(10)}
          height={200}
          width={300}
        />
        <ReactApexChart
          series={series_11}
          options={generateOptions(11)}
          height={200}
          width={300}
        />

        <ReactApexChart
          series={series_12}
          options={generateOptions(12)}
          height={200}
          width={300}
        />
        
      </Space>
      <Space>
      <ReactApexChart
          series={series_13}
          options={generateOptions(13)}
          height={200}
          width={300}
        />
        <ReactApexChart
          series={series_14}
          options={generateOptions(14)}
          height={200}
          width={300}
        />
        <ReactApexChart
          series={series_15}
          options={generateOptions(15)}
          height={200}
          width={300}
        />
       
      </Space>
      <Space>
      <ReactApexChart
          series={series_16}
          options={generateOptions(16)}
          height={200}
          width={300}
        />
      </Space>
    </Row>
  );
};

export default ModuleCharts;