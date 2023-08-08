import { ArrowDownOutlined,WarningOutlined, ArrowUpOutlined } from '@ant-design/icons';
import {Card, Col, Row, Statistic, Button} from 'antd';
import {Typography} from "@mui/joy";
import React from "react"
import {formatPerc} from "@/helpers/formatting";
import ReactApexChart from "react-apexcharts";
import {ApexOptions} from "apexcharts";
import colors from "@/app/colors";
import ProgressBar from 'react-bootstrap/ProgressBar';

const CurrentStatus = ({current,total,state}) => {
    const remain = parseFloat((total - current).toFixed(1))
    const curr = parseFloat((current).toFixed(1))
    const perc = parseFloat((current / total * 100).toFixed(1))
    return <div>
        <div className={"ant-statistic-title"}>SOC</div>
        <div style={{display: "flex"}}>
            <div style={{width: '100%', paddingTop: "6px"}}>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end"
                }}>
                    <div style={{
                        padding: "0 8px",
                        fontSize: "18px",
                        fontWeight: 600
                    }}>{state === "DISCHARGE" ? "Discharging" : "Charging"} (9.4MW)</div>
                    <div style={{fontSize: "12px", textAlign: "right"}}>Cap: {total} MWh</div>
                </div>
                {
                    state === "DISCHARGE"
                        ? <React.Fragment>
                            <ProgressBar>
                                <ProgressBar variant={state === "DISCHARGE" ? "success" : "danger"} label={`${curr} MWh`}
                                             animated key={1} now={perc}/>
                                {/*<ProgressBar animated label={"Remaining - 12MWh"} variant="warning" now={20} key={2} />*/}
                            </ProgressBar>
                            <div style={{fontSize: "12px", width: "100%", textAlign: "right"}}>{remain} MWh - Discharged
                            </div>
                        </React.Fragment>
                        : <React.Fragment>
                            <ProgressBar>
                                <ProgressBar variant={"danger"} label={`${curr} MWh`} animated key={1} now={perc}/>
                            </ProgressBar>
                            <div style={{fontSize: "12px", width: "100%", textAlign: "right"}}>{remain} MWh - Remaining to
                                Charge
                            </div>
                        </React.Fragment>
                }


            </div>
            <div style={{padding: "27px 8px", fontSize: "18px", fontWeight: 600}}>
                {perc}%
            </div>
        </div>
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

    return <Row gutter={[16, 16]}>
            <Col span={24}>
                <Typography level={"h3"}>Status</Typography>
            </Col>
        <Col span={24}>
            <Card bordered={false}>
                <CurrentStatus
                    state={"DISCHARGE"}
                    total={data.maxMWh}
                    current={data.currentStateMwh}
                    currentPerc={currentSocPerc}/>
                {/*<CurrentStatus*/}
                {/*    state={"CHARGE"}*/}
                {/*    total={data.maxMWh}*/}
                {/*    current={data.currentStateMwh}*/}
                {/*    currentPerc={currentSocPerc}/>*/}
                {/*<ReactApexChart  height={"250px"} type="radialBar" series={socSeries} options={socOptions}/>*/}
            </Card>
        </Col>
        <Col span={24}>
            <Card>
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
        <Col span={24}>
            <Card>
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
        <Col span={24}>
            <Statistic
                title="Current / Voltage"
                value={"5A / 57V"}
                precision={0}
                // valueStyle={{ color: '#3f8600' }}
                // prefix={<ArrowDownOutlined />}
            />
        </Col>
    </Row>
}

export default CurrentState