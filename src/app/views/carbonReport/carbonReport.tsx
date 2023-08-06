import React, {useMemo} from 'react'
import moment from "moment";
import {Table} from "antd";
import {Link} from "react-router-dom";
import {formatCurrency} from "@/helpers/formatting";
import {Box, Grid} from "@mui/joy";



const generateDemoData =(comp, start,end, interval, intervalType) => {
    const data =[ ]
    comp.forEach(c => {
        const mStart = moment(start,)
        const mEnd = moment(end)
        const current = mStart.clone()
        const dataItem = {
            comp:c
        }
        while (current.isSameOrBefore(mEnd)){
            dataItem[current.format("YYYY_MM_DD")] = 5000
            current.add(interval,intervalType)
        }
        data.push(dataItem)
    })


    return data
}

export default function CarbonReport() {
    const start = "2021-01-01"
    const end = "2023-01-01"
    const interval = 1
    const intervalType = "M"
    const revenueComponents = ["REGN","REGUP"]


    const data =generateDemoData(revenueComponents,start, end, interval, intervalType)

    const generateColumns = useMemo(() => {
        const cols:any = [
            {
                key: "comp",
                title: "",
                dataIndex: "comp",
                fixed: 'left',
                width: 130,
            },
        ]

        const mStart = moment(start)
        const mEnd = moment(end)
        const current = mStart.clone()
        while (current.isSameOrBefore(mEnd)){
            cols.push({
                key: current.format("YYYY_MM_DD"),
                title: current.format("MMM-YY"),
                dataIndex: current.format("YYYY_MM_DD"),
                render: (text,d) => {
                    return formatCurrency(text, 0)
                },
                width: 90,
            },)
            current.add(interval,intervalType)
        }
        return cols
    },[start,end,interval,intervalType])

  return (
    <Grid container gap={2} rowSpacing={2}>
        <Grid xs={12}>
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
        </Grid>
    </Grid>
  )
}
