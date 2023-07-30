import { Tabs,Typography,Col, Row,Space, Card, Layout } from 'antd';
import type { TabsProps } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;
import {  } from 'antd';
import LeftCard from './components/LeftCard';
const  BatteryMonitor=()=>{

    return(
        <Layout>
            <Row>
                <Col span={6}>
                    <LeftCard/>
                </Col>
                <Col span={18}></Col>
            </Row>
        </Layout>
    )
}
export default BatteryMonitor;





