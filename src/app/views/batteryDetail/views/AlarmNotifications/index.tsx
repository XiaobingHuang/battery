import React, {Component, useState} from "react";
import ReactApexChart from "react-apexcharts";
import {ApexOptions} from "apexcharts";
import {Row, Col, Table, Space} from "antd";
import {Box,CardContent,CardOverflow,AspectRatio, Card, Divider, Grid, Modal, ModalDialog,ModalClose, Typography} from "@mui/joy";
import colors from "@/app/colors";
import moment from "moment";
// import "@/app/views/batteryDetail/views/AlarmNotifications/data.json"
// import data from "@/app/views/batteryDetail/views/AlarmNotifications/data"
const data = [
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
const BatteryAlarmNotifications = () => {
    const time = data.map((e) => e.Timestamp);
    const tempData = data.map((e) => [e.Temp, e.TempMax, e.TempMin]);
    const voltageData = data.map((e) => [e.Voltage, e.VoltageMax]);
    const currentData = data.map((e) => [e.Current, e.CurrentMin, e.CurrentMax]);

    const [showTempAlarmModal,setShowTempAlarmModal] = useState(false)

    const currentSetRange = data.map((e) => {
        return {x: e.Timestamp, y: [e.CurrentMin, e.CurrentMax]};
    });
    const currentSetActual = data.map((e) => {
        return {x: e.Timestamp, y: e.Current};
    });

    const socSetMin = data.map((e) => {
        return {x: e.Timestamp, y: e.SOCMin * 100};
    });
    const socSetActual = data.map((e) => {
        return {x: e.Timestamp, y: e.SOC * 100};
    });


    const set = data.map((e) => {
        return {x: e.Timestamp, y: [e.TempMin, e.TempMax]};
    });
    const set2 = data.map((e) => {
        return {x: e.Timestamp, y: e.Temp};
    });
    console.log(set);


    const series = [
        {
            type: 'rangeArea',
            name: 'Acceptable Range',
            data: set
        },
        {
            type: 'line',
            name: 'Battery Temp',
            data: set2
        },

    ]
    const options: ApexOptions = {
        chart: {
            type: 'rangeArea',
            animations: {
                speed: 500
            },
            toolbar: {
                show: false,
            },
        },
        colors: [colors.gray, colors.blue],
        dataLabels: {
            enabled: false
        },
        annotations: {
            xaxis: [{
                x: new Date('1/1/23 12:00').getTime(),
                x2: new Date('1/1/23 12:45').getTime(),
                fillColor: colors.red,
                opacity: 0.2,
                label: {
                    click: () => setShowTempAlarmModal(true),
                    borderColor: colors.red,
                    style: {
                        fontSize: '10px',
                        color: '#fff',
                        background: colors.red,
                    },
                    offsetY: -10,
                    text: 'Alarm',
                }
            }]
        },
        grid: {
            xaxis: {
                lines: {
                    show: true,
                },
            },
            yaxis: {
                lines: {
                    show: false,
                },
            },
        },
        fill: {
            opacity: [0.5, 1]
        },
        stroke: {
            curve: 'straight',
            width: [0, 1.5]
        },
        legend: {
            show: true,
        },
        markers: {
            hover: {
                sizeOffset: 5
            }
        },
        xaxis: {
            // categories: time,
            type: "datetime",
        },

    }


    const series_current = [
        {
            type: 'rangeArea',
            name: 'Acceptable Range',
            data: currentSetRange
        },
        {
            type: 'line',
            name: 'Current',
            data: currentSetActual
        },
    ];

    const options_current: ApexOptions = {
        chart: {
            type: 'rangeArea',
            animations: {
                speed: 500
            },
            toolbar: {
                show: false,
            },
        },
        colors: [colors.gray, colors.blue],
        dataLabels: {
            enabled: false
        },

        grid: {
            xaxis: {
                lines: {
                    show: true,
                },
            },
            yaxis: {
                lines: {
                    show: false,
                },
            },
        },
        fill: {
            opacity: [0.5, 1]
        },
        stroke: {
            curve: 'straight',
            width: [0, 1.5]
        },
        legend: {
            show: true,
        },
        markers: {
            hover: {
                sizeOffset: 5
            }
        },
        xaxis: {
            // categories: time,
            type: "datetime",
        },
    }
    
    const series_voltage = [
        {
            name: "voltage",
            type: "line",
            data: data.map((e) => e.Voltage),
        },
        {
            name: "voltage_max",
            type: "line",
            data: data.map((e) => e.VoltageMax),
        },
    ];

    const options_voltage: ApexOptions = {
        chart: {
            group: "voltage",
            type: "area",
            height: 200,
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
                    show: true,
                },
            },
            yaxis: {
                lines: {
                    show: false,
                },
            },
        },
        dataLabels: {
            enabled: false,
        },
        colors: [colors.darkGray, colors.blue],
        stroke: {
            width: [1.5,1.5],
        },
        xaxis: {
            categories: time,
            type: "datetime",
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: [
            {
                seriesName: "voltage",
                axisTicks: {
                    show: true,
                },
                title: {
                    text: "temp",
                },
            },
            {
                seriesName: "voltage",
                show: false,
                title: {
                    text: "temp max",
                },
            },
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

    const series_soc = [

        {
            name: "SOC Min",
            type: "line",
            data: socSetMin
        },
        {
            name: "Actual SOC",
            type: "line",
            data: socSetActual
        },
    ];

    const options_soc: ApexOptions = {
        chart: {
            group: "soc",
            type: "area",
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
                    show: true,
                },
            },
            yaxis: {
                lines: {
                    show: false,
                },
            },
        },
        dataLabels: {
            enabled: false,
        },
        colors: [colors.darkGray, colors.blue],
        stroke: {
            width: [1.5,1.5],
        },
        annotations: {
            xaxis: [{
                x: new Date('1/1/23 12:45').getTime(),
                x2: new Date('1/1/23 14:15').getTime(),
                fillColor: colors.red,
                opacity: 0.2,
                label: {
                    click: () => setShowTempAlarmModal(true),
                    borderColor: colors.red,
                    style: {
                        fontSize: '10px',
                        color: '#fff',
                        background: colors.red,
                    },
                    offsetY: -10,
                    text: 'Alarm',
                }
            }]
        },
        xaxis: {
            categories: time,
            type: "datetime",
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: [
            {
                seriesName: "soc",
                axisTicks: {
                    show: true,
                },
                title: {
                    text: "SOC %",
                },
                labels: {
                    formatter: (v) => v.toFixed(0)
                }

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

    const dataSource = [
        {
            key: "1",
            type: "temp",
            details: "",
            timestamps: "",
            status: "",
            addNotoes: "",
        },
        {
            key: "2",
            type: "temp",
            details: "",
            timestamps: "",
            status: "",
            addNotoes: "",
        },
    ];

    const columns = [
        {
            title: "Type",
            dataIndex: "type",
            key: "type",
        },
        {
            title: "Details",
            dataIndex: "details",
            key: "details",
        },
        {
            title: "Timestamps",
            dataIndex: "timestamps",
            key: "timestamps",
        },
        {
            title: "status",
            key: "status",
            dataIndex: "status",
        },
        {
            title: "Add notes",
            key: "addNotoes",
            dataIndex: "addNotoes",
        },
    ];

    const chartHeights = "250px"
    return (
        <Box>
            <Box sx={{maxWidth:"800px", margin: "0 auto"}}>
                <Typography level={"h3"}>Active Alarms </Typography>
                <Card orientation="horizontal" color={"danger"} variant="soft" invertedColors sx={{ width: 260 }}>
                    <CardContent>
                        <Typography level={"h4"} fontWeight="md" textColor="danger.plainColor">
                            Temperature
                        </Typography>
                        <Typography level="h2">120 F</Typography>
                        <Typography level="body-sm">
                            {moment().subtract(23,"m").format("MM/DD/YY HH:mm")}
                        </Typography>
                    </CardContent>
                    <CardOverflow
                        variant="solid"
                        color="danger"
                        sx={{
                            px: 0.2,
                            writingMode: 'vertical-rl',
                            textAlign: 'center',
                            fontSize: 'xs',
                            fontWeight: 'xl',
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            borderLeft: '1px solid',
                            borderColor: 'divider',
                        }}
                    >
                        ALARM
                    </CardOverflow>
                </Card>
            </Box>
            <Grid container spacing={2} sx={{flexGrow: 1, p: 2}}>
                
                <Grid xs={6}>
                    <Card>
                        <Typography level={"h3"}>Temperature</Typography>
                        <ReactApexChart type={"rangeArea"} height={chartHeights} options={options} series={series}/>
                    </Card>
                </Grid>
                <Grid xs={6}>
                    <Card>
                        <Typography level={"h3"}>Current</Typography>
                        <ReactApexChart
                            type={"rangeArea"}
                            height={chartHeights}
                            options={options_current}
                            series={series_current}
                        />
                    </Card>
                </Grid>
                <Grid xs={6}>
                    <Card>
                        <Typography level={"h3"}>Voltage</Typography>
                        <ReactApexChart
                            type={"line"}
                            height={chartHeights}
                            options={options_voltage}
                            series={series_voltage}
                        />
                    </Card>
                </Grid>
                <Grid xs={6}>
                    <Card>
                        <Typography level={"h3"}>SOC</Typography>
                        <ReactApexChart
                            type={"line"}
                            height={chartHeights}
                            options={options_soc}
                            series={series_soc}
                        />
                    </Card>
                </Grid>
            </Grid>

            <Modal open={showTempAlarmModal} onClose={() => setShowTempAlarmModal(false)}>
                <ModalDialog sx={{maxWidth:"350px"}}>
                    <ModalClose/>
                    <Grid gap={2} container>
                        <Grid xs={12}>
                            <Typography level={"body-sm"}>Alarm Time Range</Typography>
                            <Typography level={"h4"} fontSize={"md"}>12:00 - 12:45pm (45 minutes)</Typography>
                        </Grid>
                        <Grid xs={12}>
                            <Divider/>
                        </Grid>
                        <Grid xs={12}>
                            <Typography level={"body-sm"}>Temp Range</Typography>
                            <Typography level={"h4"} fontSize={"md"}>110 - 125 F</Typography>
                        </Grid>
                        <Grid xs={12}>
                            <Divider/>
                        </Grid>
                        <Grid xs={12}>
                            <Typography level={"body-sm"}>Alert Notification</Typography>
                            <Typography level={"h4"} fontSize={"md"}>Michael Scott (12:04 pm)</Typography>
                            <Typography level={"h4"} fontSize={"md"}>Jim Halpert (12:06 pm)</Typography>
                        </Grid>
                    </Grid>
                </ModalDialog>
            </Modal>
        </Box>
    );
};
export default BatteryAlarmNotifications;
