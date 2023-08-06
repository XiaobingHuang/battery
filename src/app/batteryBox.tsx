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
import BatteryDetailEnergy from "./views/batteryDetail/views/EnergyStatistics";
import BatteryAlarmNotifications from "./views/batteryDetail/views/AlarmNotifications";
import { FormItemPrefixContext } from "antd/es/form/context";
import SOCChart from "./views/batteryDetail/views/EnergyStatistics/SOCChart";
import ChargeDischargeCycle from "./views/batteryDetail/views/EnergyStatistics/ChargeDischargeCycle";
import EnergyTable from "./views/batteryDetail/views/EnergyStatistics/EnergyTable";
import BatteryUsageChart from "./views/batteryDetail/views/EnergyStatistics/BatteryUsageChart/BatteryUsageChart";


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
                <Route path="energy-statistics" element={<BatteryDetailEnergy />}>
                  <Route path="soc-monitoring" element={<SOCChart />}/>
                  <Route path="charge-discharge-cycle" element={<ChargeDischargeCycle />}/>
                  <Route path="energy-statistics-table" element={<EnergyTable/>}/>
                  <Route path="battery-usage" element={<BatteryUsageChart/>}/>
                </Route>
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
