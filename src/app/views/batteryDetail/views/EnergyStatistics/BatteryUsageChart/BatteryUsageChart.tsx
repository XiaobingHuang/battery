import React, { useMemo, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ResponsiveSankey } from "@nivo/sankey";
import { ApexOptions } from "apexcharts";
import colors from "@/app/colors";
import { Chart } from "react-google-charts";
import { Row, Col, Space, Table, Tabs } from "antd";

const series_battery= [70,30]
const options_battery:ApexOptions= {
  chart: {
    width: 380,
    type: 'pie',
  },
  labels: ['Battery Usage',"Battery "],
  colors:[colors.green, colors.lighterRed],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
}

const BatteryUsageChart=()=>{
     return(
        <div>
        <ReactApexChart options={options_battery} series={series_battery} type="pie" width={380} />
        

        </div>
        
     )
}

export default BatteryUsageChart