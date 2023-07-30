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

const data = [
  {
    batteryStatus: {},
  },
];


const LeftCard = () => {
  return (
    <Card title="Battery name" >
        <Card title="Battery Status">
            <p>
                SOC: 87%
            </p>
            <p>
                Operating Mode: Charging
            </p>
            <p>
                Power: 10MW
            </p>
            <p>
                C-rating: 0.25
            </p>
            <p>
                Current: 25A
            </p>
            <p>
                Voltage: 400V
            </p>
        </Card>
    </Card>
  );
};
export default LeftCard;
