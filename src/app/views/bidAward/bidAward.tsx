import React from 'react'
import {Table} from "antd";
import {ColumnsType} from "antd/es/table";
import {Link} from "react-router-dom";
import {Grid} from "@mui/joy";

export default function BidAward() {

    const data = []

    const baseColumns: ColumnsType<any> = []

    const chargingColumns: ColumnsType<any> = [
        {key: "beginning", title: "Beginning", dataIndex: "beginning", width: 80},
        {key: "end", title: "End", dataIndex: "end", width: 80},
        {key: "energy", title: "Energy", dataIndex: "energy", width: 80},
        {key: "source", title: "Source", dataIndex: "source", width: 80},
        {key: "price", title: "Price", dataIndex: "price", width: 80},
        {key: "cost", title: "Cost", dataIndex: "cost", width: 80},
        {key: "ghg", title: "GHG", dataIndex: "ghg", width: 80},
    ];


    return (
        <Grid spacing={2} sx={{flexWrap:0}} container>
            <Grid xs={6}>
                <Table
                    columns={chargingColumns}
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
            <Grid xs={6}>
                <Table
                    columns={chargingColumns}
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
