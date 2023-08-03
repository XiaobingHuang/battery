import React from "react"
import Chart from "@/components/Chart";
import {Tabs, Col, Row, Space, Card} from 'antd';
import moment from "moment";
import {useMemo} from "react";
import merge from "lodash/merge"
import {formatCurrency, formatNumber} from "@/helpers/formatting";
import {Typography} from "@mui/joy";
import colors from "@/app/colors";

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
                        speed: 1000
                    }
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 1.5,
                curve: "straight"
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
                        // x: new Date().getTime(),
                        // x2: new Date("2023-07-27T09:39:00.000Z").getTime(),
                        x: moment().subtract(4, "h").valueOf(),
                        x2: moment().utcOffset(0).endOf("d").valueOf(),
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
                opacity: 0.5
            },
            tooltip: {
                x: {
                    format: "HH:mm"
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
                colors: [ colors.green],
                forecastDataPoints: {
                    count: calcForecastCount
                },
            },
            series: [
                {
                    name: "currentMwh",
                    data: data.chartData?.map((d) => [d.time, d.currentMwh])
                }
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
                forecastDataPoints: {
                    count: calcForecastCount
                },
                colors: [colors.red, colors.green],
                yaxis:{
                    title: {
                        text: "$"
                    },
                }
                // colors: ["#fc0349", "#de5499"],
            },
            series: [
                {
                    name: "Buy",
                    data: data.chartData?.map((d) => [d.time, d.buyKwh])
                },
                {
                    name: "Sell",
                    data: data.chartData?.map((d) => [d.time, d.sellKwh])
                }
            ]
        });
    }, [data, chartBaseConfig]);



    return <React.Fragment>
        <Col span={24}>
            <Typography level={"h3"}>Monitoring</Typography>
        </Col>
        <Col span={12}>
            <Card style={{height:"100%"}}>
                <div style={{display:"flex", alignItems:"flex-start", justifyContent:"space-between"}}>
                    <Typography level={"h4"} style={{margin: 0,textAlign:"right"}}>Market</Typography>
                        <table>
                            <tr>
                                <td style={{padding:"0px 8px"}}></td>
                                <td style={{padding:"0px 8px", textAlign:"right"}}>Bought</td>
                                <td style={{padding:"0px 8px", textAlign:"right"}}>Sold</td>
                                <td style={{padding:"0px 8px", textAlign:"right"}}>Net</td>
                            </tr>
                            <tr>
                                <td style={{padding:"0px 8px", textAlign:"right"}}></td>
                                <td style={{padding:"0px 8px", textAlign:"right"}}> <Typography level={"h4"} style={{margin: "2px 0",textAlign:"right"}}>{formatCurrency(data.totalBought)}</Typography></td>
                                <td style={{padding:"0px 8px", textAlign:"right"}}> <Typography level={"h4"} style={{margin: "2px 0",textAlign:"right"}}>{formatCurrency(data.totalSold)}</Typography></td>
                                <td style={{padding:"0px 8px", textAlign:"right"}}> <Typography level={"h4"} style={{margin: "2px 0",textAlign:"right"}}>{formatCurrency(data.totalSold + data.totalBought)}</Typography></td>
                            </tr>
                            <tr>
                                <td style={{padding:"0px 8px", textAlign:"right"}}>To Date</td>
                                <td style={{padding:"0px 8px", textAlign:"right"}}> <Typography level={"body-sm"}  style={{margin: "2px 0",textAlign:"right"}}>{formatCurrency(data.totalBoughtPast)}</Typography></td>
                                <td style={{padding:"0px 8px", textAlign:"right"}}> <Typography level={"body-sm"}  style={{margin: "2px 0",textAlign:"right"}}>{formatCurrency(data.totalSoldPast)}</Typography></td>
                                <td style={{padding:"0px 8px", textAlign:"right"}}> <Typography level={"body-sm"}  style={{margin: "2px 0",textAlign:"right"}}>{formatCurrency(data.totalSoldPast + data.totalBoughtPast)}</Typography></td>
                            </tr>
                        </table>
                        {/*<Text style={{textAlign:"right", fontSize:'11px'}}>Bought / Sold / Net</Text>*/}
                        {/*<Title style={{margin: "2px 0",textAlign:"right"}}>${data[1].totalBought.toFixed(2)} / ${data[1].totalSold.toFixed(2)} / ${(data[1].totalSold + data[1].totalBought).toFixed(2)}</Title>*/}
                        {/*<Text style={{textAlign:"right"}}>To Date: ${data[1].totalBoughtPast.toFixed(2)} / ${data[1].totalSoldPast.toFixed(2)} / ${(data[1].totalSoldPast + data[1].totalBoughtPast).toFixed(2)}</Text>*/}
                </div>
                <Chart type={"area"}  height={"250px"} options={buyChartConfig.options} series={buyChartConfig.series}/>
            </Card>
        </Col>
        <Col span={12}>
            <Card style={{height:"100%"}}>
                <div style={{display:"flex", alignItems:"flex-start", justifyContent:"space-between"}}>
                    <Typography level={"h3"} style={{margin: 0,textAlign:"right"}}>Charge</Typography>
                        <table>
                            <tr>
                                <td style={{padding:"0px 8px"}}></td>
                                <td style={{padding:"0px 8px", textAlign:"right"}}>Current</td>
                            </tr>
                            <tr>
                                <td style={{padding:"0px 8px", textAlign:"right"}}></td>
                                <td style={{padding:"0px 8px", textAlign:"right"}}>
                                    <Typography level={"h3"} style={{margin: "2px 0",textAlign:"right"}}>{formatNumber(data?.currentStateMwh, 2)}MWh</Typography></td>
                            </tr>
                        </table>
                </div>
                <Chart type={"area"}  height={"250px"} options={sellChartConfig.options} series={sellChartConfig.series}/>
            </Card>
        </Col>
    </React.Fragment>

}
export default EnergyMonitoring