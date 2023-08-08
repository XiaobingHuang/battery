import React, {useMemo, useState} from 'react'
import moment from "moment";
import {Table,DatePicker, Space } from "antd";
import {Link} from "react-router-dom";
import merge from "lodash/merge"
import {formatCurrency} from "@/helpers/formatting";
import {Box, Card, Grid} from "@mui/joy";
const { RangePicker } = DatePicker;
import dayjs, {Dayjs} from 'dayjs'
import colors from "@/app/colors";
import Chart from "@/components/Chart";
var isSameOrBefore = require('dayjs/plugin/isSameOrBefore')
dayjs.extend(isSameOrBefore)

const generateDemoData =(comp, start,end, interval, intervalType) => {
    const data =[ ]

    const ghg = [
        {
            name: "MWh Bought",
            type: "MWH",
            min: 800,
            max: 900,
            factor: 1,
            unit: "MWh"
        },
        {
            name: "MWh Sold",
            type: "MWH",
            min: 800,
            max: 900,
            factor: -1,
            unit: "MWh"
        },
        {
            name: "GHG Produced",
            type: "GHG",
            min: 800 * 1.5624,
            max: 900 * 1.5624,
            factor: 1,
            unit: "lbs CO2 (1000)"
        },
        {
            name: "GHG Consumed",
            type: "GHG",
            min: 800 * 1.5624,
            max: 900 * 1.5624,
            factor: -1,
            unit: "lbs CO2 (1000)"
        },
    ]

    ghg.forEach(c => {
        const mStart = moment(start,)
        const mEnd = moment(end)
        let current = dayjs(start.valueOf())
        const dataItem = {
            comp:c.name,
                ...c
        }
        // @ts-ignore
        while (current.isSameOrBefore(mEnd)){
            let val = Math.floor(Math.random() * (c.max - c.min + 1) +  c.min) *c.factor

            dataItem[current.format("YYYY_MM_DD")] = val
            current = current.add(interval,intervalType)
        }
        data.push(dataItem)
    })


    return data
}

export default function CarbonReport() {
    const [dateVal,setDateVal] = useState<[Dayjs,Dayjs]>(     [dayjs().subtract(2,'y'), dayjs()])
    const interval = 1
    const intervalType = "M"
    const revenueComponents = [
        {min:3000, name:"REGUP", max:6000},
        {min:10000, name:"REGN", max:14000},
        {min:10000, name:"RRS", max:14000},
        {min:10000, name:"NSPIN", max:14000},
        {min:10000, name:"ECRS", max:14000},
        {min:32000, name:"RT Energy", max:40000},
    ]


    const data =generateDemoData(revenueComponents,dateVal[0], dateVal[1], interval, intervalType)

    const generateColumns = useMemo(() => {
        const cols:any = [
            {
                key: "comp",
                title: "",
                dataIndex: "comp",
                fixed: 'left',
                width: 130,
            },
            {
                key: "unit",
                title: "Unit",
                dataIndex: "unit",
                fixed: 'left',
                width: 130,
            },
        ]

        const mStart = dateVal[0]
        const mEnd = dateVal[1]
        let current = dayjs(mStart.valueOf())
        //@ts-ignore
        while (current.isSameOrBefore(mEnd)){
            cols.push({
                key: current.format("YYYY_MM_DD"),
                title: current.format("MMM-YY"),
                dataIndex: current.format("YYYY_MM_DD"),
                align:"right",
                render: (text,d) => {
                    // debugger
                   return  text?.toLocaleString('en-US')
                    return formatCurrency(text || 0, 0)
                },
                width: 90,
            },)
            current = current.add(interval,intervalType)
        }
        return cols
    },[dateVal,interval,intervalType])

    const chartBaseConfig = {
        options: {
            chart: {
                type: "bar",
                stacked: true,
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
                width: 0,
                curve: "straight"
            },

            title: {
                align: "left",
                style: {
                    fontSize: "14px"
                }
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
                        return value.toFixed(0);
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
                    format: "MMM-yy"
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

    const chartData = useMemo(() => {
        if(data && data.length>0){
            return data.reduce((t,c) => {
                const _data =[]

                const mStart = dateVal[0]
                const mEnd = dateVal[1]
                let current = dayjs(mStart.valueOf())
                //@ts-ignore
                while (current.isSameOrBefore(mEnd)){
                    const key = current.format("YYYY_MM_DD")
                    _data.push([current.valueOf(),c[key] || 0])
                    current = current.add(interval,intervalType)
                }

                const d = {
                    name: c.name,
                    data: _data,
                    dataType: c.type
                }
                t.push(d)
                return t
            }, []).filter(d => {
                return d.dataType ==="GHG"
            })
        }
        return []
    }, [data,dateVal])

    console.log(chartData)
    const chartConfig = useMemo(() => {
        return merge({},chartBaseConfig, {
            options: {
                chart: {
                    id: "sell",
                },
                title: {
                    // text: "Sells"
                },
                // colors: [ colors.green],
            },
            series: chartData
        });
    }, [chartData, chartBaseConfig]);

    return (
    <Grid container gap={1} rowSpacing={1} sx={{p:2}}>
        <Grid xs={12}>
            <RangePicker
                picker={"month"}
                onChange={(e) => {
                    setDateVal(e)
                }}
                value={dateVal} />
        </Grid>
        <Grid xs={12}>
            <Card>
            <Chart type={"bar"}  height={"220px"} options={chartConfig.options} series={chartConfig.series}/>
            </Card>
        </Grid>
        <Grid xs={12}>
            <Card>
                <Table
                    style={{width:"100%"}}
                    scroll={{ x: 1000 }}
                    columns={generateColumns}
                    dataSource={data}
                    pagination={false}
                    onRow={(record) => {
                        return {
                            onDoubleClick: () => {
                                console.log(record.name);
                            },
                        };
                    }}
                />
            </Card>
        </Grid>
    </Grid>
  )
}
