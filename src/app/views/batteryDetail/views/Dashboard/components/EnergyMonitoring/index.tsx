import Chart from "@/components/Chart";
import { Tabs,Typography,Col, Row,Space } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;
import moment from "moment";
import {useMemo} from "react";
import merge from "lodash/merge"
function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const generateDemoData = () => {
    const start = moment().utcOffset(0).startOf("d");
    const end = moment().utcOffset(0).endOf("d");
    const now = moment().utcOffset(0);
    const current = start.clone();
    console.log("S", start.toJSON());
    const buyHours = [
        [0, 6],
        [21, 99]
    ];
    const sellHours = [
        [9, 11],
        [14, 21]
    ];
    let totalBought = 0;
    let totalSold = 0;
    const data = [];

    while (current.isSameOrBefore(end)) {
        const kwhBuyRate = 0.04672;
        const kwhSellRate = 0.08283;
        const dataItem = {
            time: current.toISOString(),
            buyKwh: 0,
            sellKwh: 0,
            forecastBuyKwh: 0
        };
        const currenthour = current.hour();
        let isBuy = false;

        buyHours.forEach((b) => {
            const [start, end] = b;
            if (currenthour >= start && currenthour < end) {
                const v = randomIntFromInterval(120, 130) * kwhBuyRate;
                totalBought += v;
                dataItem.buyKwh = v;
            }
        });

        sellHours.forEach((b) => {
            const [start, end] = b;
            if (currenthour >= start && currenthour < end) {
                const v = randomIntFromInterval(120, 130) * kwhSellRate;
                totalSold += v;
                dataItem.sellKwh = v;
            }
        });

        // if (currenthour >= sellHourStart && currenthour < sellHourEnd) {
        //   dataItem.forecastBuyKwh = randomIntFromInterval(12, 13) * 0.05372;
        // }
        data.push(dataItem);
        current.add(15, "m");
    }

    return [data, {
        totalBought,
        totalSold
    }];
};

const EnergyMonitoring = () => {
    const data:any = generateDemoData()

    const calcForecastCount = useMemo(() => {
        const now = moment();
        const eod = moment().endOf("d");
        const diff = eod.diff(now, "m");
        return Math.round(diff / 15);
    }, []);

    const chartBaseConfig = {
        options: {
            chart: {
                group: "buy-sell",
                type: "area",
                height: 350,
                toolbar: {
                    show: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 3,
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
                        x: new Date().getTime(),
                        x2: moment().utcOffset(0).endOf("d").valueOf(),
                        fillColor: "whitesmoke",
                        borderColor: "red",
                        opacity: 0.4,
                        label: {
                            borderColor: "#B3F7CA",
                            style: {
                                fontSize: "10px",
                                color: "#fff",
                                background: "#00E396"
                            },
                            offsetY: -10,
                            text: "Forecast"
                        }
                    }
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
                title: {
                    text: "$/Sold"
                },
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
                    text: "Sell"
                },
                colors: ["#007d36", "#61ed9e"],
                forecastDataPoints: {
                    count: calcForecastCount
                },
            },
            series: [
                {
                    name: "Sell",
                    data: data[0]?.map((d) => [d.time, d.sellKwh])
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
                    text: "Buy"
                },
                forecastDataPoints: {
                    count: calcForecastCount
                },
                colors: ["#fc0349", "#de5499"],
            },
            series: [
                {
                    name: "Buy",
                    data: data[0]?.map((d) => [d.time, d.buyKwh])
                }
            ]
        });
    }, [data, chartBaseConfig]);



    return <div>
        <Row gutter={16}>
            <Col span={12}>
                <div style={{background:"#fff", padding:"15px", position:"relative"}}>
                    <div style={{display:"flex", alignItems:"flex-start", justifyContent:"space-between"}}>
                        <Title style={{margin: 0,textAlign:"right"}}>Buy</Title>
                        <div>
                            <Title style={{margin: "2px 0",textAlign:"right"}}>${data[1].totalBought.toFixed(2)}</Title>
                            <Text style={{textAlign:"right"}}>To Date: ${data[1].totalBought.toFixed(2)}</Text>
                        </div>
                    </div>
                    <Chart type={"area"}  height={"250px"} options={buyChartConfig.options} series={buyChartConfig.series}/>
                </div>
            </Col>
            <Col style={{background:"#fff"}} span={12}>
                <div style={{background:"#fff", padding:"15px", position:"relative"}}>
                    <div style={{display:"flex", alignItems:"flex-start", justifyContent:"space-between"}}>
                        <Title style={{margin: 0,textAlign:"right"}}>Sold</Title>
                        <div>
                            <Title style={{margin: "2px 0",textAlign:"right"}}>${data[1].totalSold.toFixed(2)}</Title>
                            <Text style={{textAlign:"right"}}>To Date: ${data[1].totalSold.toFixed(2)}</Text>
                        </div>
                    </div>
                    <Chart type={"area"}  height={"250px"} options={sellChartConfig.options} series={sellChartConfig.series}/>
                </div>
            </Col>
        </Row>

    </div>
}
export default EnergyMonitoring