import { ErrorBoundary } from "@sentry/react";
import {Routes, Route, Navigate} from "react-router-dom";
import { Layout, Menu, Button, theme } from 'antd';
import CurrentState from "./views/currentState/currentState";
import NoPermission from "./views/noPermission/noPermission";
import Setting from "./views/settingPage/setting";
import FinanceReport from "./views/financeReport/financeReport";
import CarbonReport from "./views/carbonReport/carbonReport";
import BidAward from "./views/bidAward/bidAward";
import TopHeader from "@/components/TopHeader/topHeader";

const { Header, Sider, Content } = Layout;

const BatteryBox = () => {
  return (
    <div className={"r-arctrade-brand r-bess-app-container"}>
      <Layout>
        <TopHeader />
        <Content>
        <ErrorBoundary>
            <Routes>
              <Route path="/home" element={<CurrentState />} />
              <Route path="/bid-award" element={<BidAward />} />
              <Route path="/carbon-report" element={<CarbonReport />} />
              <Route path="/finance-report" element={<FinanceReport />} />
              <Route path="/setting" element={<Setting />} />
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
