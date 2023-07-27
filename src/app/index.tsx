import {ApolloProvider} from "@apollo/client";
import { ConfigProvider, theme } from 'antd';
import BatteryBox from "@/app/batteryBox";
import {QueryClientProvider} from "react-query";
import gQueryClient from "@/app/queryClient";
import {rQueryClient} from "@/app/queryClient";
import 'react-loading-skeleton/dist/skeleton.css'
import "@arctrade/relay/dist/index.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import "./styles/styles.scss";
import "./styles/app.scss";
import "./styles/brand.scss";
import {
    AppConfig,
    NotificationProvider,
    SecurityContextProvider,
} from "@arctrade/relay";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {LicenseManager} from 'ag-grid-enterprise'
import AppContextProvider from "@/app/context";
import {appBasePath} from "@/app/configs";

LicenseManager.setLicenseKey(
    'CompanyName=ArcTrade,LicensedApplication=ArcTrade,LicenseType=SingleApplication,LicensedConcurrentDeveloperCount=1,LicensedProductionInstancesCount=1,AssetReference=AG-018135,ExpiryDate=18_August_2022_[v2]_MTY2MDc3NzIwMDAwMA==ad4ee582f20113b5a5af22b36151f997'
);

const screenSizeConfig = {
    width: {
        xs: 400,
        sm: 600,
        md: 1000,
        lg: 1400,
        xl: 1600,
    },
};

const App = () => {
    // @ts-ignore
    return (<AppConfig height={"100vh"} theme={{screenSizeConfig}}>
            <BatteryBox/>
        </AppConfig>
    );
};

const BessApp = () => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#37002d',
                },
            }}
        >
        <NotificationProvider>
            <BrowserRouter basename={appBasePath}>
                <ApolloProvider client={gQueryClient}>
                    <AppContextProvider>
                        <QueryClientProvider client={rQueryClient}>
                            <SecurityContextProvider actions={[]}>
                                <App/>
                            </SecurityContextProvider>
                        </QueryClientProvider>
                    </AppContextProvider>
                </ApolloProvider>
            </BrowserRouter>
        </NotificationProvider>
        </ConfigProvider>
    );
};
export default BessApp;
