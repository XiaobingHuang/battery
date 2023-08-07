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
    comp.forEach(c => {
        const mStart = moment(start,)
        const mEnd = moment(end)
        let current = dayjs(start.valueOf())
        const dataItem = {
            comp:c.name
        }
        // @ts-ignore
        while (current.isSameOrBefore(mEnd)){
            dataItem[current.format("YYYY_MM_DD")] = Math.floor(Math.random() * (c.max - c.min + 1) +  c.min)
            current = current.add(interval,intervalType)
        }
        data.push(dataItem)
    })

    let totalRow = {
        isTotalRow: true
    }


    let costRow = {
        isCostRow: true
    }

    const setTotal = () => {
        const mEnd = moment(end)
        let current = dayjs(start.valueOf())
        // @ts-ignore
        while (current.isSameOrBefore(mEnd)){
            let dateTotal = 0
            data.forEach(d => {
                dateTotal += d[current.format("YYYY_MM_DD")]
            })
            totalRow[current.format("YYYY_MM_DD")] = dateTotal
            current = current.add(interval,intervalType)
        }
    }

    setTotal()



    const setCost = () => {
        const mEnd = moment(end)
        let current = dayjs(start.valueOf())
        // @ts-ignore
        while (current.isSameOrBefore(mEnd)){
            costRow[current.format("YYYY_MM_DD")] = totalRow[current.format("YYYY_MM_DD")]*-0.8
            current = current.add(interval,intervalType)
        }
    }
    setCost()

    data.push([])
    data.push(totalRow)
    data.push([])
    data.push(costRow)
    debugger
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
                render: (text,d) => {
                    if(d.isTotalRow){
                        return <b><i>Total</i></b>
                    }
                    if(d.isCostRow){
                        return <b><i>Cost</i></b>
                    }

                    return text
                },
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
                    if(d.isTotalRow ||d.isCostRow){
                        return <b>{formatCurrency(text || 0, 0)}</b>
                    }
                    if(text === null || text === undefined){
                        return""
                    }

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
                    name: c.comp,
                    data: _data
                }
                t.push(d)
                return t
            }, [])
        }
        return []
    }, [data,dateVal])

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

    console.log("ASD",chartConfig)

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
