import { ErrorBoundary } from "@sentry/react";
import {Routes, Route, Navigate} from "react-router-dom";
import { Layout, Menu, Button, theme } from 'antd';
import CurrentState from "./views/currentState/currentState";
import NoPermission from "./views/noPermission/noPermission";
import Setting from "./views/settingPage/setting";
import FinanceReport from "./views/financeReport/financeReport";
import CarbonReport from "./views/carbonReport/carbonReport";
import BidAward from "./views/bidAward/bidAward";
import BatteryDetail from "./views/batteryDetail";
import BatteryDetailDashboard from "./views/batteryDetail/views/Dashboard";
import BatteryDetailMonitoring from "./views/batteryDetail/views/BatteryMonitor";
import BatteryDetailSetting from "./views/batteryDetail/views/ControlSetting";
import TopHeader from "@/components/TopHeader/topHeader";
import BatteryEnergyAnalystics from "./views/batteryDetail/views/EnergyAnalystics"
import BatteryAlarmNotifications from "./views/batteryDetail/views/AlarmNotifications";

const { Header, Sider, Content } = Layout;

const BatteryBox = () => {
  return (
    <div className={"r-bess-app-container"}>
      <Layout style={{minHeight:"100vh"}}>
        <TopHeader />
        <Content>
        <ErrorBoundary>
            <Routes>
              <Route path="/home" element={<CurrentState />} />
              <Route path="/bid-award" element={<BidAward />} />
              <Route path="/carbon-report" element={<CarbonReport />} />
              <Route path="/finance-report" element={<FinanceReport />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/battery/:batteryId" element={<BatteryDetail />}>
                <Route path="dashboard" element={<BatteryDetailDashboard />}/>
                <Route path="monitoring" element={<BatteryDetailMonitoring />}/>
                <Route path="control-settings" element={<BatteryDetailSetting />}/>
                <Route path="energy-analystics" element={<BatteryEnergyAnalystics />}/>
                <Route path="alarm-notifications" element={<BatteryAlarmNotifications />}/>
                <Route path="" element={<Navigate to={"dashboard"} />} />
              </Route>
              <Route path="/" element={<Navigate to ="/home" />}/>
              <Route path="*" element={<NoPermission />}/>
            </Routes>
        </ErrorBoundary>
        </Content>
        </Layout>
    </div>
  );
};
export default BatteryBox;
