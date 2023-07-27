import ApexChart from "react-apexcharts";

const Chart = ({options, type, height, series}) => {
    return <ApexChart type={type} height={height} options={options} series={series}/>
}

export default Chart