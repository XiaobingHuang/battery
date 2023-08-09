import React, {useState} from "react"
import Chart from "@/components/Chart";
import {Tabs, Col, Row, Space, DatePicker,Card, Statistic} from 'antd';
import moment from "moment";
import {useMemo} from "react";
import merge from "lodash/merge"
import {formatCurrency, formatNumber} from "@/helpers/formatting";
import {Typography} from "@mui/joy";
import colors from "@/app/colors";
import dayjs, {Dayjs} from "dayjs";
const { RangePicker } = DatePicker;

const EnergyMonitoring = ({data}) => {

    const calcForecastCount = useMemo(() => {
        const now = moment();
        const eod = moment().endOf("d");
        const diff = eod.diff(now, "m");
        return Math.round(diff / 15);
    }, []);


    console.log(new Date().toISOString())
    console.log(new Date().getTime())
    console.log(moment().subtract(4, 'h').toISOString())
    console.log(new Date().getTimezoneOffset())
    console.log( new Date("2023-07-27T07:39:00.000Z").getTime())
    console.log( {
        x1: moment().subtract(4, "h").toISOString(),
        x2: moment().utcOffset(0).endOf("d").toISOString(),
        y:moment().valueOf(),
        j:new Date().getTime()
    })
    // x: new Date().getTime(),
    // x2: moment().utcOffset(0).endOf("d").valueOf(),
    const chartBaseConfig = {
        options: {
            chart: {
                group: "buy-sell",
                type: "area",
                height: 350,
                toolbar: {
                    show: false
                },
                animations: {
                    enabled: true,
                    easing: 'linear',
                    dynamicAnimation: {
                        speed: 200
                    }
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 1.5,
                curve: "smooth"
            },

            title: {
                align: "left",
                style: {
                    fontSize: "14px"
                }
            },
            annotations: {
                xaxis: [
                    {
                        x: moment().valueOf(),
                        x2: moment().endOf("d").valueOf(),
                        fillColor: "#DCDCDC",
                        borderColor: "red",
                        opacity: 0.4,
                        label: {
                            style: {
                                fontSize: "10px",
                                color: "#fff",
                                background: "#9A9A9A"
                            },
                            offsetY: -10,
                            text: "Forecast"
                        }
                    },

                ]
            },
            xaxis: {
                type: "datetime",
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                }
            },
            yaxis: {
                tickAmount: 4,
                floating: false,

                labels: {
                    style: {
                        colors: "#8e8da4"
                    },
                    offsetY: -7,
                    offsetX: 0,
                    formatter: function (value) {
                        return value.toFixed(2);
                    }
                },
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                }
            },
            fill: {
                opacity: 1,
                type:["gradient", "gradient","solid"]
            },
            tooltip: {
                x: {
                    format: "MM/dd/yy HH:mm"
                },
                fixed: {
                    enabled: false,
                    position: "topRight"
                }
            },


            grid: {
                yaxis: {
                    lines: {
                        offsetX: -30
                    }
                },
                padding: {
                    left: 20
                }
            }
        }
    };

    const sellChartConfig = useMemo(() => {
        return merge({},chartBaseConfig, {
            options: {
                chart: {
                    id: "sell",
                },
                title: {
                    // text: "Sells"
                },
                // colors: [ colors.green],
                // forecastDataPoints: {
                //     count: calcForecastCount
                // },
                tooltip: {
                    enabled: true,
                    y: {
                        enabled: true,
                    }
                },
                xaxis: {
                    labels: {
                        datetimeUTC: false
                    }
                },
                colors: [colors.red, colors.green,colors.blue,],
                stroke: {
                    colors: [colors.red, colors.green,colors.blue,],
                    curve: 'smooth',
                },
                yaxis:[

                    {
                        seriesName: 'MWh - Bought',

                        labels: {
                            style: {
                                colors: "#8e8da4"
                            },
                            offsetY: -7,
                            offsetX: 0,
                            formatter: function (value) {
                                return value.toFixed(2);
                            }
                        },
                    },
                    {
                        seriesName: 'MWh - Bought',
                        show: false,

                        labels: {
                            style: {
                                colors: "#8e8da4"
                            },
                            offsetY: -7,
                            offsetX: 0,
                            formatter: function (value) {
                                return value.toFixed(2);
                            }
                        },
                    },
                    {
                        seriesName: 'MWh Price',
                        opposite: true,
                        labels: {
                            style: {
                                colors: "#8e8da4"
                            },
                            offsetY: -7,
                            offsetX: 0,
                            formatter: function (value) {
                                return value.toFixed(2);
                            }
                        },
                    },
                ]
            },
            series: [

                {
                    name: "MWh - Bought",
                    type:"area",
                    data: data.chartData?.map((d) => [d.time, d.mwhBought*-1])
                },
                {
                    name: "MWh - Sold",
                    type:"area",
                    data: data.chartData?.map((d) => [d.time, d.mwhSold*-1])
                },
                {
                    name: "MWh Price",
                    type:"line",
                    data: data.chartData?.map((d) => [d.time, d.price])
                },

            ]
        });
    }, [data, chartBaseConfig]);


    const buyChartConfig = useMemo(() => {
        return merge({},chartBaseConfig, {
            options: {
                chart: {
                    id: "buy",
                },
                title: {
                    // text: "Market"
                },
                stroke: {
                    colors:  [colors.red, colors.green,colors.blue,],
                    width: [0,0,3]
                },
                forecastDataPoints: {
                    // count: data.forecastPoints
                },
                xaxis: {
                    labels: {
                        datetimeUTC: false
                    }
                },
                colors: [colors.red, colors.green,colors.blue,],
                yaxis: [
                    {
                        seriesName: 'Buy',
                        labels: {
                            style: {
                                colors: "#8e8da4"
                            },
                            offsetY: -7,
                            offsetX: 0,
                            formatter: function (value) {
                                return value.toFixed(2);
                            }
                        },
                    },
                    {
                        seriesName: 'Buy',
                        show: false,
                        labels: {
                            style: {
                                colors: "#8e8da4"
                            },
                            offsetY: -7,
                            offsetX: 0,
                            formatter: function (value) {
                                return value.toFixed(2);
                            }
                        },
                    },
                    {
                        seriesName: 'Net',
                        opposite: true,
                        labels: {
                            style: {
                                colors: "#8e8da4"
                            },
                            offsetY: -7,
                            offsetX: 0,
                            formatter: function (value) {
                                return value.toFixed(2);
                            }
                        },
                    },
                ],
                // colors: ["#fc0349", "#de5499"],
            },

            series: [
                {
                    name: "Buy",
                    type:"bar",
                    data: data.chartData?.map((d) => [d.time, d.amtBought])
                },
                {
                    name: "Sell",
                    type:"bar",
                    data: data.chartData?.map((d) => [d.time, d.amtSold])
                },
                {
                    name: "Net",
                    type:"area",
                    data: data.chartData?.map((d) => [d.time, d.totalMWhNet])
                }
            ]
        });
    }, [data, chartBaseConfig]);

    const [dateVal,setDateVal] = useState<Dayjs>(     dayjs())

    return <Row gutter={[16, 16]} >
        <Col span={24} style={{display:'flex'}}>
            <Typography level={"h3"}>Monitoring</Typography>
            <DatePicker
                style={{marginLeft:"20px"}}
                picker={"date"}
                onChange={(e) => {
                    // setDateVal(e)
                }}
                value={dateVal} />
        </Col>
        <Col span={8}>
            <Card>
                <Typography fontWeight={"500"} level={"body-sm"}>Bought</Typography>
                <Typography fontWeight={"500"} level={"h1"}>{formatCurrency(data.totalMWhBought,0)}</Typography>
            </Card>
        </Col>
        <Col span={8}>
            <Card>
                <Typography fontWeight={"500"} level={"body-sm"}>Sold</Typography>
                <Typography fontWeight={"500"} level={"h1"}>{formatCurrency(data.totalMWhSold, 0)}</Typography>
            </Card>
        </Col>
        <Col span={8}>
            <Card>
                <Typography fontWeight={"500"} level={"body-sm"}>Net</Typography>
                <Typography fontWeight={"500"} level={"h1"}>{formatCurrency(data.totalMWhBought+data.totalMWhSold,0)}</Typography>
            </Card>
        </Col>
        <Col span={24}>
            <Card style={{height:"100%"}}>
                <div style={{display:"flex", alignItems:"flex-start", justifyContent:"space-between"}}>
                    {/*<Typography level={"h4"} style={{margin: 0,textAlign:"right"}}>Charge</Typography>*/}
                    {/*<table>*/}
                    {/*    <tr>*/}
                    {/*        <td style={{padding:"0px 8px"}}></td>*/}
                    {/*        <td style={{padding:"0px 8px", textAlign:"right"}}>Current</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td style={{padding:"0px 8px", textAlign:"right"}}></td>*/}
                    {/*        <td style={{padding:"0px 8px", textAlign:"right"}}>*/}
                    {/*            <Typography level={"h3"} style={{margin: "2px 0",textAlign:"right"}}>{formatNumber(data?.currentStateMwh, 2)}MWh</Typography></td>*/}
                    {/*    </tr>*/}
                    {/*</table>*/}
                </div>
                <Chart type={"area"}  height={"465px"} options={sellChartConfig.options} series={sellChartConfig.series}/>
            </Card>
        </Col>
        {/*<Col span={24}>*/}
        {/*    <Card style={{height:"100%"}}>*/}
        {/*        <div style={{display:"flex", alignItems:"flex-start", justifyContent:"space-between"}}>*/}
        {/*            <Typography level={"h4"} style={{margin: 0,textAlign:"right"}}>Market</Typography>*/}
        {/*                <table>*/}
        {/*                    <tr>*/}
        {/*                        <td style={{padding:"0px 8px"}}></td>*/}
        {/*                        <td style={{padding:"0px 8px", textAlign:"right"}}>Bought</td>*/}
        {/*                        <td style={{padding:"0px 8px", textAlign:"right"}}>Sold</td>*/}
        {/*                        <td style={{padding:"0px 8px", textAlign:"right"}}>Net</td>*/}
        {/*                    </tr>*/}
        {/*                    <tr>*/}
        {/*                        <td style={{padding:"0px 8px", textAlign:"right"}}></td>*/}
        {/*                        <td style={{padding:"0px 8px", textAlign:"right"}}> <Typography level={"h4"} style={{margin: "2px 0",textAlign:"right"}}>{formatCurrency(data.totalMWhBought)}</Typography></td>*/}
        {/*                        <td style={{padding:"0px 8px", textAlign:"right"}}> <Typography level={"h4"} style={{margin: "2px 0",textAlign:"right"}}>{formatCurrency(data.totalMWhSold)}</Typography></td>*/}
        {/*                        <td style={{padding:"0px 8px", textAlign:"right"}}> <Typography level={"h4"} style={{margin: "2px 0",textAlign:"right"}}>{formatCurrency(data.totalMWhSold + data.totalMWhBought)}</Typography></td>*/}
        {/*                    </tr>*/}

        {/*                </table>*/}
        {/*                /!*<Text style={{textAlign:"right", fontSize:'11px'}}>Bought / Sold / Net</Text>*!/*/}
        {/*                /!*<Title style={{margin: "2px 0",textAlign:"right"}}>${data[1].totalBought.toFixed(2)} / ${data[1].totalSold.toFixed(2)} / ${(data[1].totalSold + data[1].totalBought).toFixed(2)}</Title>*!/*/}
        {/*                /!*<Text style={{textAlign:"right"}}>To Date: ${data[1].totalBoughtPast.toFixed(2)} / ${data[1].totalSoldPast.toFixed(2)} / ${(data[1].totalSoldPast + data[1].totalBoughtPast).toFixed(2)}</Text>*!/*/}
        {/*        </div>*/}
        {/*        <Chart type={"area"}  height={"120px"} options={buyChartConfig.options} series={buyChartConfig.series}/>*/}
        {/*    </Card>*/}
        {/*</Col>*/}

    </Row>

}
export default EnergyMonitoring