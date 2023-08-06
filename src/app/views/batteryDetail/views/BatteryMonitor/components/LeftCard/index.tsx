import {
  Tabs,
  Typography,
  Col,
  Row,
  Space,
  Card,
  Layout,
  Descriptions,
} from "antd";
import type { TabsProps } from "antd";
const { Title, Paragraph, Text, Link } = Typography;
import {} from "antd";

const LeftCard = () => {
  return (
    <Card title="Battery name" style={{ overflow: "scroll", height: 600 }}>

      <table>
        <tr><th>SOC</th><td>87%</td></tr>
        <tr><th>Operating Mode</th><td>Charging</td></tr>
        <tr><th>Power</th><td>10 MW</td></tr>
      </table>
      <Card title="Battery Status">

        <p>SOC: 87%</p>
        <p>Operating Mode: Charging</p>
        <p>Power: 10MW</p>
        <p>C-rating: 0.25</p>
        <p>Current: 25A</p>
        <p>Voltage: 400V</p>
        <p>SOH: 99%</p>
        <p>Temp: 99%</p>
        <p>Alarms: 3hr overheat</p>
      </Card>
      <Card title="Parameter">
        <Card>
          <p>Capacity: 100Ah</p>
        </Card>

        <Card title="Charging">
          <table>
            <tr><th>C Rating</th><td>0.25C</td></tr>
          </table>
          <p>C rating: 0.25C</p>
          <p>Curent: 25A</p>
          <p>Threshold: 90%</p>
        </Card>
        <Card title="Discharging">
          <p>C rating: 0.25C</p>
          <p>Curent: 25A</p>
          <p>Threshold: 115%</p>
        </Card>
        <Card>
          <p>Temp: 25-115F</p>
          <p>Threshold: 120F</p>
        </Card>
        <Card>
          <p>Voltage: 400V</p>
          <p>Threshold: 110%</p>
        </Card>
        <Card>
          <p>Cycle: 6,000</p>
          <p>Life: 20</p>
        </Card>
      </Card>
    </Card>
  );
};
export default LeftCard;
