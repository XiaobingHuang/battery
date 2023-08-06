// import * as chartData from "@/app/views/batteryDetail/views/BatteryMonitor/components/MainPage/data.json";
import React from "react";
import Chart from "@/components/Chart";
import {Tabs, Typography, Col, Row, Space, Card, Table} from "antd";
import colors from "@/app/colors";
const {Title, Paragraph, Text, Link} = Typography;
import moment from "moment";
import {useMemo} from "react";
import merge from "lodash/merge";
import {formatCurrency, formatNumber} from "@/helpers/formatting";



const data = [
    {
        "Time": "1/1/23 0:00",
        "Charge": 2.11,
        "Discharge": 0,
        "MWh Price": 48.99,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 50
    },
    {
        "Time": "1/1/23 0:15",
        "Charge": 2.09,
        "Discharge": 0,
        "MWh Price": 49.87,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 50
    },
    {
        "Time": "1/1/23 0:30",
        "Charge": 2.16,
        "Discharge": 0,
        "MWh Price": 49.81,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 50
    },
    {
        "Time": "1/1/23 0:45",
        "Charge": 2.14,
        "Discharge": 0,
        "MWh Price": 48.07,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 50
    },
    {
        "Time": "1/1/23 1:00",
        "Charge": 2.56,
        "Discharge": 0,
        "MWh Price": 49.1,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 50
    },
    {
        "Time": "1/1/23 1:15",
        "Charge": 2.08,
        "Discharge": 0,
        "MWh Price": 48.33,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 50
    },
    {
        "Time": "1/1/23 1:30",
        "Charge": 2.48,
        "Discharge": 0,
        "MWh Price": 49.82,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 50
    },
    {
        "Time": "1/1/23 1:45",
        "Charge": 2.03,
        "Discharge": 0,
        "MWh Price": 49.31,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 50
    },
    {
        "Time": "1/1/23 2:00",
        "Charge": 2.95,
        "Discharge": 0,
        "MWh Price": 49.45,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 50
    },
    {
        "Time": "1/1/23 2:15",
        "Charge": 2.34,
        "Discharge": 0,
        "MWh Price": 48.33,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 50
    },
    {
        "Time": "1/1/23 2:30",
        "Charge": 2.99,
        "Discharge": 0,
        "MWh Price": 48.01,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 50
    },
    {
        "Time": "1/1/23 2:45",
        "Charge": 2.78,
        "Discharge": 0,
        "MWh Price": 48.28,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 50
    },
    {
        "Time": "1/1/23 3:00",
        "Charge": 2.87,
        "Discharge": 0,
        "MWh Price": 48.57,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 50
    },
    {
        "Time": "1/1/23 3:15",
        "Charge": 2.12,
        "Discharge": 0,
        "MWh Price": 48.2,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 50
    },
    {
        "Time": "1/1/23 3:30",
        "Charge": 2.49,
        "Discharge": 0,
        "MWh Price": 49.59,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 50
    },
    {
        "Time": "1/1/23 3:45",
        "Charge": 2.01,
        "Discharge": 0,
        "MWh Price": 49.35,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 4:00",
        "Charge": 2.74,
        "Discharge": 0,
        "MWh Price": 48.17,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 4:15",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 49.72,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 4:30",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 49.6,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 4:45",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 49.72,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 5:00",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 48.42,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 5:15",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 48.19,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 5:30",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 48.81,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 5:45",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 49.43,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 6:00",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 49.16,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 6:15",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 48.76,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 6:30",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 56.91,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 6:45",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 57.33,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 7:00",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 58.07,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 7:15",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 58.92,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 7:30",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 56.7,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 7:45",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 56.34,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 8:00",
        "Charge": 0,
        "Discharge": -2.85,
        "MWh Price": 55.23,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 8:15",
        "Charge": 0,
        "Discharge": -2.23,
        "MWh Price": 55.32,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 8:30",
        "Charge": 0,
        "Discharge": -2.86,
        "MWh Price": 56.76,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 8:45",
        "Charge": 0,
        "Discharge": -2.32,
        "MWh Price": 55.02,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 9:00",
        "Charge": 0,
        "Discharge": -2.79,
        "MWh Price": 56.51,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 9:15",
        "Charge": 0,
        "Discharge": -2.58,
        "MWh Price": 55.73,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 9:30",
        "Charge": 0,
        "Discharge": -2.16,
        "MWh Price": 55.93,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 9:45",
        "Charge": 0,
        "Discharge": -2.92,
        "MWh Price": 57.05,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 10:00",
        "Charge": 0,
        "Discharge": -2.59,
        "MWh Price": 56.18,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 10:15",
        "Charge": 0,
        "Discharge": -2.85,
        "MWh Price": 51.25,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 10:30",
        "Charge": 0,
        "Discharge": -2.79,
        "MWh Price": 53.63,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 10:45",
        "Charge": 0,
        "Discharge": -2.81,
        "MWh Price": 51.07,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 11:00",
        "Charge": 0,
        "Discharge": -2.13,
        "MWh Price": 52.65,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 11:15",
        "Charge": 0,
        "Discharge": -2.93,
        "MWh Price": 52.42,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 11:30",
        "Charge": 0,
        "Discharge": -2.36,
        "MWh Price": 61.61,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 11:45",
        "Charge": 0,
        "Discharge": -2.48,
        "MWh Price": 62.95,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 12:00",
        "Charge": 0,
        "Discharge": -2.17,
        "MWh Price": 64.15,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 12:15",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 63.02,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 12:30",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 66.35,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 12:45",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 63.99,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 13:00",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 63.19,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 13:15",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 67.09,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 13:30",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 65.73,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 13:45",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 63.62,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 14:00",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 64.58,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 14:15",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 66.63,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 14:30",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 66.01,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 14:45",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 65.01,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 15:00",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 65.19,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 15:15",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 65.71,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 15:30",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 67.72,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 15:45",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 69.23,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 16:00",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 70.89,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 16:15",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 71.26,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 16:30",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 72.23,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 16:45",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 69.92,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 17:00",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 71.12,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 17:15",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 69.71,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 17:30",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 71.41,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 17:45",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 70.41,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 18:00",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 71.45,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 18:15",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 72.84,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 18:30",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 72.25,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 18:45",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 52.12,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 19:00",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 53.57,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 19:15",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 55.32,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 19:30",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 54.24,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 19:45",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 52.63,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 20:00",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 52.06,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 20:15",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 52.36,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 20:30",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 53.93,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 20:45",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 53.5,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 21:00",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 54,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 21:15",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 52.1,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 21:30",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 52.14,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 21:45",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 52.38,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 22:00",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 54.5,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 22:15",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 54.15,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 22:30",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 49.78,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 22:45",
        "Charge": 0,
        "Discharge": 0,
        "MWh Price": 47.61,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 23:00",
        "Charge": 2.62,
        "Discharge": 0,
        "MWh Price": 44.49,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 23:15",
        "Charge": 2.7,
        "Discharge": 0,
        "MWh Price": 49.67,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 23:30",
        "Charge": 2.02,
        "Discharge": 0,
        "MWh Price": 45.78,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    },
    {
        "Time": "1/1/23 23:45",
        "Charge": 2.75,
        "Discharge": 0,
        "MWh Price": 46.04,
        "DischargePriceTrigger": 55,
        "ChargePriceTrigger": 49
    }
]


const MonitorChart = () => {
    const series = [
        {
            name: "Charge - MWh",
            type: "area",
            data: data.map((e) => e.Charge),
        },
        {
            name: "Discharge - MWh",
            type: "area",
            data: data.map((e) => e.Discharge),
        },
        {
            name: "$/MWh",
            type: "line",
            data: data.map((e) => e["MWh Price"]),
        },
        {
            name: "Charge Trigger - $/MWh",
            type: "line",
            data: data.map((e) => e.ChargePriceTrigger),
        },
        {
            name: "Discharge Trigger - $/MWh",
            type: "line",
            data: data.map((e) => e.DischargePriceTrigger),
        },
    ];

    const options = {
        chart: {
            group: "charge-discharge",
            type: "area",
            height: 350,
            toolbar: {
                show: false,
            },
            animations: {
                enabled: true,
                easing: "linear",
                dynamicAnimation: {
                    speed: 1000,
                },
            },
        },
        grid: {
            xaxis: {
                lines: {
                    show: true
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            }
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: [3, 3, 3,9,9],
        },
        title: {
            align: "left",
            offsetX: 110,
        },
        colors: [colors.red, colors.green, colors.blue, "#FEB019", "#000", "#000"],
        xaxis: {
            categories: data.map((e) => e.Time),
            type: "datetime",
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
        },
        yaxis: [
            {
                seriesName: "Charge - MWh",
                axisTicks: {
                  show: true,
                },
                title: {
                  text: "MWh",
                },
            },
            {
                seriesName: "Charge - MWh",
                show: false,
                title: {
                  text: "Discharge",
                  style: {
                    color: colors.lighterBlue,
                  },
                },
            },
            {
                seriesName: "$/MWh",
                opposite: true,
                axisTicks: {
                  show: true,
                },
                axisBorder: {
                  show: true,
                },
                labels: {
                  style: {
                  },
                },
                title: {
                  text: "Price",
                  style: {
                  },
                },
            },
            {
                seriesName: "$/MWh",
                show:false,
            },
            {
                seriesName: "$/MWh",
                show:false,
            }

        ],
        tooltip: {
            fixed: {
                enabled: true,
                position: "topLeft", 
                offsetY: 30,
                offsetX: 60,
            },
        },
        legend: {
            offsetX: 40,

        },
    };

    console.log("a",series)
    return (
        <Chart type={"area"} height={"350px"} options={options} series={series}/>
    )
};

const MonitorTable = () => {

}

export default MonitorChart
