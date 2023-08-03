
import { Tabs,Typography,Col, Row,Space } from 'antd';
import type { TabsProps } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;
import {  } from 'antd';

import BatteryDashboard from "./views/Dashboard";
import BatteryMonitor from "./views/BatteryMonitor";
import {Outlet, useNavigate, useParams} from "react-router";
import {useMemo} from "react";


interface TabWithPath extends  TabsProps{
    path: string
}

const BatteryDetail = ( ) =>{
    const nav=useNavigate()
    const {batteryId} = useParams<{batteryId: string}>()

    const batteryData = useMemo(() => {
        const batteries =  localStorage.getItem("__BATTERIES__")
        const batteriesJson = JSON.parse(batteries)

        return batteriesJson.find(b => b.id === batteryId)

    },[])
    // handleTabClick = key => {
    //     this.props.history.push(`/${key}`)   // < == router router v4
    //     browserHistory.push(`/${key}`);      // <== react router v3
    // }

    const onTabChange = (key: string) => {
        console.log(key);
    };

    const tabOptions = [
        {
            key: '1',
            path:"dashboard",
            label: `Dashboard`,
            // children: <BatteryDashboard/>,
        },
        {
            key: '2',
            path:"monitoring",
            label: `Monitoring`,
            // children: <BatteryMonitor/>,
        },
        {
            key: '3',
            label: `Control & Settings`,
            path:"control-settings",
            // children: `Content of Tab Pane 3`,
        },
        {
            key: '4',
            label: `Energy Analytics`,
            path:"energy-statistics",
            //children: `Content of Tab Pane 3`,
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
                <Title level={2}>Battery: {batteryData.name}</Title>
            </div>
        </Col>
        <Col span={24}>
            <div>
                <Tabs
                    onTabClick={(a)=>{
                        const tab = tabOptions.find(t=>t.key ===a)
                        if(tab){
                            nav(tab.path)
                        }
                    }}
                    tabBarStyle={{background:"#fff", padding:"0 15px"}} defaultActiveKey="1" items={tabOptions} onChange={onTabChange} />
            </div>
            <Outlet/>
        </Col>

    </Row>
}
export default BatteryDetail