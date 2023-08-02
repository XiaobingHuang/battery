import React, { Component } from "react";
import Chart from "react-apexcharts";
import { Row, Col, Grid} from 'antd';
import "@/app/views/batteryDetail/views/AlarmNotifications/data.json"
import data from "@/app/views/batteryDetail/views/AlarmNotifications/data"
const BatteryAlarmNotifications =() => {
    const time = data.map(e=>{e.Timestamp})
    const tempData = data.map(e=>[e.Temp,e.TempMax,e.TempMin]);
    const voltageData = data.map(e=>[e.Voltage,e.VoltageMax]);
    const currentData = data.map(e=>[e.Current, e.CurrentMin, e.CurrentMax])

    const series_temp = [
        {
            name: "temp",
            type: "line",
            data: tempData.map((e) => e[0]),
        },
        {
            name: "temMax",
            type: "line",
            data: tempData.map((e) => e[1]),
        },
        {
            name: "tempMin",
            type: "line",
            data: tempData.map((e) => e[2]),
        },
    ];
    const options_temp = {
        chart: {
            group: "temp",
            type: "line",
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
            text: "Temp alart",
            align: "left",
            offsetX: 110,
        },
        xaxis: {
            categories: time,
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
                seriesName: "temp",
                axisTicks: {
                  show: true,
                },
                title: {
                  text: "temp",
                },
            },
            {
                seriesName: "temp",
                show: false,
                title: {
                  text: "temp max",
                },
            },
            {
                seriesName: "temp",
                show: false,
                title: {
                  text: "temp min",
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

        }
    }

    return(
        <div>
           <Row>
            <Col>
            <Chart type={"line"} height={"200px"} options={options_temp} series={series}/>
            </Col>

            <Col></Col>
           </Row>
           <Row>
           <Col></Col>
           <Col></Col>
           </Row>
        </div>
    )

}
export default BatteryAlarmNotifications