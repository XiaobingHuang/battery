
import { Tabs,Typography,Col, Row,Space } from 'antd';
import type { TabsProps } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;
import {  } from 'antd';

import BatteryDashboard from "./views/Dashboard"
const BatteryDetail = ( ) =>{


    const onTabChange = (key: string) => {
        console.log(key);
    };

    const tabOptions: TabsProps['items'] = [
        {
            key: '1',
            label: `Dashboard`,
            children: <BatteryDashboard/>,
        },
        {
            key: '2',
            label: `Monitoring`,
            children: `Content of Tab Pane 2`,
        },
        {
            key: '3',
            label: `Control & Settings`,
            children: `Content of Tab Pane 3`,
        },
        {
            key: '4',
            label: `Energy Analytics`,
            children: `Content of Tab Pane 3`,
        },
        {
            key: '5',
            label: `Alarm & Notifications`,
            children: `Content of Tab Pane 3`,
        },
    ];

    return  <Row>
        <Col style={{background:"#fff"}} span={24}>
            <div style={{background:"#fff",padding:"15px"}}>
                <Title level={2}>Battery Name 123</Title>

            </div>
        </Col>
        <Col span={24}>
            <div>
                <Tabs tabBarStyle={{background:"#fff", padding:"0 15px"}} defaultActiveKey="1" items={tabOptions} onChange={onTabChange} />
            </div>
        </Col>

    </Row>
}
export default BatteryDetail