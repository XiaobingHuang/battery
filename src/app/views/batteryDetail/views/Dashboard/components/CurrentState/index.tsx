import { ArrowDownOutlined,WarningOutlined, ArrowUpOutlined } from '@ant-design/icons';
import {Card, Col, Row, Statistic, Button} from 'antd';
import {Typography} from "@mui/joy";
import React from "react"
import {formatPerc} from "@/helpers/formatting";
import ReactApexChart from "react-apexcharts";
import {ApexOptions} from "apexcharts";
import colors from "@/app/colors";

const CurrentStatus = ({currentPerc}) => {
    const barStyle ={
        width: (currentPerc) + "%",
        height: "100%",
        background: "#009f61"
    }
    return <div style={{background:"#f3f3f3",padding:"3px", width:'100%', height:"25px", border: "1px solid #c5c5c5"}}>
        <div style={barStyle}/>
    </div>
}
const CurrentState = ({data}) => {
    const currentSocPerc = data.currentSoc * 100


    const socOptions: ApexOptions ={
        chart: {
            type: 'radialBar',
            offsetY: -20,
            sparkline: {
                enabled: true
            }
        },
        plotOptions: {
            radialBar: {
                startAngle: -90,
                endAngle: 90,
                track: {
                    background: "#e7e7e7",
                    strokeWidth: '97%',
                    margin: 5, // margin is in pixels
                },
                dataLabels: {
                    name: {
                        show: false
                    },
                    value: {
                        offsetY: -2,
                        fontSize: '22px'
                    }
                }
            }
        },
        grid: {
            padding: {
                top: -10
            }
        },
        fill: {
            colors:[colors.blue]
        },
        labels: ['SOC'],
    };

    const socSeries = [parseFloat(currentSocPerc.toFixed(2))]

    return <React.Fragment>
        <Col span={24}>
            <Typography level={"h3"}>Status</Typography>
        </Col>
        <Col span={9}>
            <Card  style={{height:"100%"}} bordered={false}>
                <div className={"ant-statistic-title"}>SOC</div>
                <ReactApexChart  height={"250px"} type="radialBar" series={socSeries} options={socOptions}/>
            </Card>
        </Col>
        <Col span={3}>

            <Card  style={{height:"100%"}}>
                <Statistic
                    title="Current Charge"
                    value={data?.currentStateMwh}
                    precision={2}
                    suffix="MWh"
                />
                <Typography level={"body-sm"}>55 MWh Capacity</Typography>
            </Card>
        </Col>
        <Col span={3}>
            <Card  style={{height:"100%"}}>
                <Statistic
                    title="State"
                    value={9.3}
                    precision={2}
                    valueStyle={{ color: '#3f8600' }}
                    prefix={<ArrowDownOutlined />}
                    suffix="MW"
                />
                <Typography color={"success"} level={"body-sm"}>Discharging</Typography>
            </Card>
        </Col>
        <Col span={3}>
            <Card style={{height:"100%"}}>
                <Statistic
                    title="Charge Rate"
                    value={0.25}
                    precision={2}
                    suffix="C"
                />
                <Button style={{ marginTop: 16 }} size={"small"} type="default">
                    Reset
                </Button>
            </Card>
        </Col>
        <Col span={3}>
            <Card style={{height:"100%"}}>
                <Statistic
                    title="Temp"
                    value={117}
                    precision={0}
                    valueStyle={{ color: 'red' }}
                    prefix={<WarningOutlined />}
                    suffix="F"
                />
                <Typography color={"danger"} level={"body-sm"}>Overheat for 0.5hrs</Typography>
            </Card>
        </Col>
        <Col span={3}>
            <Card style={{height:"100%"}}>
                <Statistic
                    title="Current / Voltage"
                    value={"5A / 57V"}
                    precision={0}
                    // valueStyle={{ color: '#3f8600' }}
                    // prefix={<ArrowDownOutlined />}
                />
            </Card>
        </Col>
    </React.Fragment>
}

export default CurrentState