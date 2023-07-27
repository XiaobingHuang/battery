import { ArrowDownOutlined,WarningOutlined, ArrowUpOutlined } from '@ant-design/icons';
import {Card, Col, Row, Typography, Statistic, Button} from 'antd';
const { Title } = Typography;
import React from "react"
import {formatPerc} from "@/helpers/formatting";

const CurrentStatus = ({currentPerc}) => {
    const barStyle ={
        width: (currentPerc) + "%",
        height: "100%",
        background: "#009f61"
    }
    return <div style={{background:"#f3f3f3",padding:"3px", width:'100%', height:"25px", border: "1px solid #c5c5c5"}}>
        <div style={barStyle}/>
    </div>
}
const CurrentState = ({data}) => {
    const currentSocPerc = data.currentSoc * 100

    return <React.Fragment>
        <Col span={24}>
            <Title  style={{margin:0, padding:0}} level={2}>Status</Title>
        </Col>
        <Col span={9}>
            <Card  style={{height:"100%"}} bordered={false}>
                <Title  style={{margin:0, padding:0}} level={3}>SOC: {formatPerc(data?.currentSoc)}</Title>
                <CurrentStatus currentPerc={currentSocPerc}/>
            </Card>
        </Col>

        <Col span={3}>
            <Card  style={{height:"100%"}}>
                <Statistic
                    title="State: Discharging"
                    value={9.3}
                    precision={2}
                    valueStyle={{ color: '#3f8600' }}
                    prefix={<ArrowDownOutlined />}
                    suffix="MW"
                />
            </Card>
        </Col>
        <Col span={3}>
            <Card style={{height:"100%"}}>
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
        <Col span={3}>
            <Card style={{height:"100%"}}>
                <Statistic
                    title="Temp"
                    value={117}
                    precision={0}
                    valueStyle={{ color: 'red' }}
                    prefix={<WarningOutlined />}
                    suffix="F"
                />
                <Typography.Text type="danger">Overheat for 0.5hrs</Typography.Text>
            </Card>
        </Col>
        <Col span={3}>
            <Card style={{height:"100%"}}>
                <Statistic
                    title="Current"
                    value={5}
                    precision={0}
                    // valueStyle={{ color: '#3f8600' }}
                    // prefix={<ArrowDownOutlined />}
                    suffix="A"
                />
            </Card>
        </Col>
        <Col span={3}>
            <Card style={{height:"100%"}}>
                <Statistic
                    title="Voltage"
                    value={57}
                    precision={0}
                    // valueStyle={{ color: '#3f8600' }}
                    // prefix={<ArrowDownOutlined />}
                    suffix="V"
                />
            </Card>
        </Col>
    </React.Fragment>
}

export default CurrentState