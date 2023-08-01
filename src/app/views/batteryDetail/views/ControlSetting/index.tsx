import { Tabs,Typography,Col, Row,Space, Card, Layout, Input, Select, Divider, TimePicker, Button } from 'antd';
import React, { useState } from "react";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
const  BatteryDetailSetting=()=>{
    console.log(localStorage.Battery1)
    const [batteryName, setBatteryName] = useState("battery1");
    const [reset, setReset] = useState(false);
  
  {
    /* ------------------Charge Settings--------------------*/
  }

  const [chargeMode, setChargeMode] = useState("Grid charging");
  const [chargePowerLimitUpper, setChargePowerLimitUpper] = useState("10MW");
  const [chargePowerLimitLower, setChargePowerLimitLower] = useState("2.5MW");
  const [maxChargeLevel, setMaxChargeLevel] = useState("95%");
  const [chargeRate, setChargeRate] = useState("0.25C");

  {
    /* ------------------Discharge Settings--------------------*/
  }
  const [dischargeMode, setDischargeMode] = useState("Grid Export");
  const [discahrgePowerLimitUpper, setDiscahrgePowerLimitUpper] = useState("10MW");
  const [discahrgePowerLimitLower, setDiscahrgePowerLimitLower] = useState("2.5MW");
  const [discahrgeMaxChargeLevel, setDiscahrgeMaxChargeLevel] = useState("5%");
  const [discahrgeChargeRate, setDiscahrgeChargeRate] = useState("0.25C");

  {
    /* ------------------Alarm for exceed Threshold Settings--------------------*/
  }

  const [chargeForCurrentUpper, setChargeForCurrentUpper] = useState("110%");
  const [chargeForCurrentLower, setChargeForCurrentLower] = useState("90%");
  const [alertSettingTempUpper, setAlertSettingTempUpper] = useState("115F");
  const [alertSettingTempLower, setAlertSettingTempLower] = useState("30F");
  const [chargeVoltageMax, setChargeVoltageMax] = useState("110%");
  const [dischargeForCurrentUpper, setDischargeForCurrentUpper] = useState("110%");
  const [dischargeForCurrentLower, setDischargeForCurrentLower] = useState("90%");
  const [dischargeTempUpper, setDischargeTempUpper] = useState("115F");
  const [dischargeTempLower, setDischargeTempLower] = useState("30F");
  const [dischargeVoltageMax, setDischargeVoltageMax] = useState("110%");

  {
    /* ------------------charge and discharge settings--------------------*/
  }
  const [
    chargeModeChargeScheduleFromValue,
    setChargeModeChargeScheduleFromValue,
  ] = useState<Dayjs | null>(dayjs("01:00:00","HH:mm"));
  const [chargeModeChargeScheduleToValue, setChargeModeChargeScheduleToValue] =
    useState<Dayjs | null>(dayjs("05:00:00", "HH:mm"));
  const [
    dischargeModeChargeScheduleFromValue,
    setDischargeModeChargeScheduleFromValue,
  ] = useState<Dayjs | null>(dayjs("17:00:00", "HH:mm"));
  const [
    dischargeModeChargeScheduleToValue,
    setDischargeModeChargeScheduleToValue,
  ] = useState<Dayjs | null>(dayjs("21:00:00", "HH:mm"));

  // -------------------------
  // console.log( chargeModeChargeScheduleFromValue)
  const chargeModeChargeScheduleFromOnChange = (
    time: Dayjs,
    timeString: string
  ) => {
    setChargeModeChargeScheduleFromValue(time);
  };
  const chargeModeChargeScheduleToOnChange = (
    time: Dayjs,
    timeString: string
  ) => {
    setChargeModeChargeScheduleToValue(time);
  };
  const dischargeModeChargeScheduleFromOnChange = (
    time: Dayjs,
    timeString: string
  ) => {
    setDischargeModeChargeScheduleFromValue(time);
  };
  const dischargeModeChargeScheduleToOnChange = (
    time: Dayjs,
    timeString: string
  ) => {
    setDischargeModeChargeScheduleToValue(time);
  };
    return(
        <Layout>
           
      {/* ------------------Charge and Discharge Settings--------------------*/}
      <strong>Charge and Discharge Settings</strong>
      <Divider/>
      {reset?
      (<Space>
        <Button onClick={()=>{setReset(false)}}>Save</Button>
        <Space>
          <Space direction="vertical">
            <label> Charge Mode:</label>
            <Select
            placeholder="--Select--"
            options={[
              {
                value: "grid_charge",
                label: "Grid Charging",
              },
              {
                value: "off",
                label: "Off",
              },
            ]}
            value={chargeMode}
            onChange={setChargeMode}
            style={{ width: 100 }}
          ></Select>
       
            
            <Divider />
            <label>Power Limit:</label>
            <Space>
              <label>Upper:</label>
              <Input
                value={chargePowerLimitUpper}
                onChange={(e) => {
                  setChargePowerLimitUpper(e.target.value);
                }}
              ></Input>
            </Space>

            <Space>
              <label>Lower:</label>
              <Input
                value={chargePowerLimitLower}
                onChange={(e) => {
                  setChargePowerLimitLower(e.target.value);
                }}
              ></Input>
            </Space>
            <Divider />
            <label>Max Charge Level(%):</label>
            <Input
              value={maxChargeLevel}
              onChange={(e) => {
                setMaxChargeLevel(e.target.value);
              }}
            ></Input>
            <Divider />
            <label>Charge Rate:</label>
            <Input
              value={chargeRate}
              onChange={(e) => {
                setChargeRate(e.target.value);
              }}
            ></Input>
            <Divider />
            <Space direction="vertical">
              <label>Charge Schedule:</label>
              <Space>
                <label>From:</label>
                <TimePicker
                  format="HH:mm"
                  onChange={chargeModeChargeScheduleFromOnChange}
                  value={chargeModeChargeScheduleFromValue}
                ></TimePicker>
                <label>To:</label>
                <TimePicker
                  format="HH:mm"
                  onChange={chargeModeChargeScheduleToOnChange}
                  value={chargeModeChargeScheduleToValue}
                ></TimePicker>
              </Space>
            </Space>
          </Space>
        </Space>
        <Space>
          <Space direction="vertical">
            <label> Discharge Mode:</label>
            <Select
              placeholder="--Select--"
              options={[
                {
                  value: "grid_export",
                  label: "Grid Export",
                },
                {
                  value: "load_management",
                  label: "Load Management",
                },
              ]}
              value={dischargeMode}
              onChange={setDischargeMode}
              style={{ width: 100 }}
            ></Select>
            <Divider />
            <label>Power Limit:</label>
            <Space>
              <label>Upper:</label>
              <Input
                value={discahrgePowerLimitUpper}
                onChange={(e) => {
                  setDiscahrgePowerLimitUpper(e.target.value);
                }}
              ></Input>
            </Space>

            <Space>
              <label>Lower:</label>
              <Input
                value={discahrgePowerLimitLower}
                onChange={(e) => {
                  setDiscahrgePowerLimitLower(e.target.value);
                }}
              ></Input>
            </Space>
            <Divider />
            <label>Max Charge Level(%):</label>
            <Input
              value={discahrgeMaxChargeLevel}
              onChange={(e) => {
                setDiscahrgeMaxChargeLevel(e.target.value);
              }}
            ></Input>
            <Divider />
            <label>Charge Rate:</label>
            <Input
              value={discahrgeChargeRate}
              onChange={(e) => {
                setDiscahrgeChargeRate(e.target.value);
              }}
            ></Input>
            <Divider />
            <Space direction="vertical">
              <label>Charge Schedule:</label>
              <Space>
                <label>From:</label>
                <TimePicker
                  format="HH:mm"
                  onChange={dischargeModeChargeScheduleFromOnChange}
                  value={dischargeModeChargeScheduleFromValue}
                ></TimePicker>
                <label>To:</label>
                <TimePicker
                  format="HH:mm"
                  onChange={dischargeModeChargeScheduleToOnChange}
                  value={dischargeModeChargeScheduleToValue}
                ></TimePicker>
              </Space>
            </Space>
          </Space>
        </Space>
      </Space>)
      :
      <Row>
       <Button onClick={()=>setReset(true)}>Reset</Button>
     <Col span={24}>
        <Space>
          <Space direction="vertical">
            <label> Charge Mode:</label>
            <span>{chargeMode}</span>
       
            <Divider />
            <label>Power Limit:</label>
            <Space>
              <label>Upper:</label>
              <span>{chargePowerLimitUpper}</span>
            </Space>

            <Space>
              <label>Lower:</label>
              <span>{chargePowerLimitLower}</span>
            </Space>
            <Divider />
            <label>Max Charge Level(%):</label>
            <span>{maxChargeLevel}</span>
            <Divider />
            <label>Charge Rate:</label>
            <span>{chargeRate}</span>
            <Divider />
            <Space direction="vertical">
              <label>Charge Schedule:</label>
              <Space>
                <label>From:</label>
                <span>{chargeModeChargeScheduleFromValue["$d"].toTimeString().split(" ")[0].slice(0,5)}</span>
                <label>To:</label>
                <span>{chargeModeChargeScheduleToValue["$d"].toTimeString().split(" ")[0].slice(0,5)}</span>
              </Space>
            </Space>
          </Space>
        </Space>
        <Space>
          <Space direction="vertical">
            <label> Discharge Mode:</label>
            <span>{dischargeMode}</span>
            <Divider />
            <label>Power Limit:</label>
            <Space>
              <label>Upper:</label>
              <span>{discahrgePowerLimitUpper}</span>
            </Space>

            <Space>
              <label>Lower:</label>
             <span>{discahrgePowerLimitLower}</span>
            </Space>
            <Divider />
            <label>Max Charge Level(%):</label>
            <span>{discahrgeMaxChargeLevel}</span>
            <Divider />
            <label>Charge Rate:</label>
            <span>{discahrgeChargeRate}</span>
            <Divider />
            <Space direction="vertical">
              <label>Charge Schedule:</label>
              <Space>
                <label>From:</label>
                <span>{dischargeModeChargeScheduleFromValue["$d"].toTimeString().split(" ")[0].slice(0,5)}</span>
                <label>To:</label>
                <span>{dischargeModeChargeScheduleToValue["$d"].toTimeString().split(" ")[0].slice(0,5)}</span>
              </Space>
            </Space>
          </Space>
        </Space>
     
      
      </Col>
      <Divider />
      <Col span={24}>
      <Space direction="vertical">
        <strong>Alarm for exceed Threshold Settings</strong>
        <Space>
          <Space direction="vertical">
            <Space direction="vertical">
              Charge for current:
              <Space>
                <label>Upper:</label>
                <span>{chargeForCurrentUpper}</span>
              </Space>
              <Space>
                <label>Lower:</label>
                <span>{chargeForCurrentLower}</span>
              </Space>
            </Space>

            <Divider />

            <Space direction="vertical">
              Temp:
              <Space>
                <label>Upper:</label>
                <span>{alertSettingTempUpper}</span>
              </Space>
              <Space>
                <label>Lower:</label>
                <span>{alertSettingTempLower}</span>
              </Space>
            </Space>
            <Divider />
            <Space direction="vertical">
              Voltage:
              <Space>
                <label>Max:</label>
                <span>{chargeVoltageMax}</span>
              </Space>
            </Space>
          </Space>

          <Space direction="vertical">
            {/* <strong>Alarm for exceed Threshold Settings</strong> */}
            <Space direction="vertical">
              Discharge for current:
              <Space>
                <label>Upper:</label>
                <span>{dischargeForCurrentUpper}</span>
              </Space>
              <Space>
                <label>Lower:</label>
                <span>{dischargeForCurrentLower}</span>
              </Space>
            </Space>

            <Divider />

            <Space direction="vertical">
              Temp:
              <Space>
                <label>Upper:</label>
                <span>{dischargeTempUpper}</span>
              </Space>
              <Space>
                <label>Lower:</label>
                <span>{dischargeTempLower}</span>
              </Space>
            </Space>
            <Divider />
            <Space direction="vertical">
              Voltage:
              <Space>
                <label>Max:</label>
                <span>{dischargeVoltageMax}</span>
              </Space>
            </Space>
          </Space>
        </Space>
      </Space>
      </Col>
      </Row>}
        </Layout>
    )
}
export default BatteryDetailSetting;





