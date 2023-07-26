import React, { useState } from 'react';
import {Link } from "react-router-dom";
import type { Dayjs } from 'dayjs';

import {
    Button,
    Modal,
    Input,
    Space,
    DatePicker,
    Divider,
    Select,
    TimePicker,
  } from "antd";

function ModalCom(props) {

    const[batteryName, setBatteryName] = useState("");
    const[COD, setCOD] = useState<Dayjs | null>(null);
    const[grid,setGrid] = useState("");
    const[utility, setUtility] = useState("");
    const [state, setState] = useState("");
    const [loadZone, setLoadZone] = useState("");
    const [manufacteraerName, setManufacteraerName] = useState("");
    const[model, setModel] = useState("");
    const [capacity, setCapacity] = useState("");
    const [attributeModel, setAttributeModel] = useState("");
    const [cRating, setCRating] = useState("");
    const [lifeSpan, setLifeSpan] = useState("");

    {/* ------------------Charge Settings--------------------*/}

    const[chargeMode, setChargeMode] = useState("");
    const [chargePowerLimitUpper, setChargePowerLimitUpper] = useState("");
    const[chargePowerLimitLower, setChargePowerLimitLower] = useState("");
    const[maxChargeLevel, setMaxChargeLevel] = useState("");
    const [chargeRate, setChargeRate] = useState("");

     {/* ------------------Discharge Settings--------------------*/}
     const[dischargeMode, setDischargeMode] = useState("");
     const[discahrgePowerLimitUpper, setDiscahrgePowerLimitUpper] = useState("");
     const[discahrgePowerLimitLower, setDiscahrgePowerLimitLower] = useState("");
     const[discahrgeMaxChargeLevel, setDiscahrgeMaxChargeLevel] = useState("");
     const[discahrgeChargeRate, setDiscahrgeChargeRate] = useState("");

    {/* ------------------Alarm for exceed Threshold Settings--------------------*/}

    const[chargeForCurrentUpper, setChargeForCurrentUpper] = useState("");
    const[chargeForCurrentLower, setChargeForCurrentLower] = useState("");
    const[alertSettingTempUpper,setAlertSettingTempUpper] = useState("");
    const[alertSettingTempLower, setAlertSettingTempLower] = useState("");
    const[chargeVoltageMax, setChargeVoltageMax] = useState("");
    const[dischargeForCurrentUpper, setDischargeForCurrentUpper] = useState("");
    const[dischargeForCurrentLower, setDischargeForCurrentLower] = useState("");
    const[dischargeTempUpper,setDischargeTempUpper] = useState("");
    const[dischargeTempLower, setDischargeTempLower] = useState("");
    const[dischargeVoltageMax, setDischargeVoltageMax] = useState("");

  {/* ------------------charge and discharge settings--------------------*/}
    const[chargeModeChargeScheduleFromValue, setChargeModeChargeScheduleFromValue] = useState<Dayjs | null>(null);
    const[chargeModeChargeScheduleToValue, setChargeModeChargeScheduleToValue] = useState<Dayjs | null>(null);
    const [dischargeModeChargeScheduleFromValue, setDischargeModeChargeScheduleFromValue] = useState<Dayjs | null>(null);
    const [ dischargeModeChargeScheduleToValue,setDischargeModeChargeScheduleToValue] =useState<Dayjs | null>(null);

    const onChangeDate = (date, dateString) => {
        setCOD(dateString);
      };
    const chargeModeChargeScheduleFromOnChange = (time:Dayjs, timeString: string) => {
        setChargeModeChargeScheduleFromValue(time);
      };
    const chargeModeChargeScheduleToOnChange=(time:Dayjs, timeString: string)=>{
        setChargeModeChargeScheduleToValue(time);
    }
    const dischargeModeChargeScheduleFromOnChange = (time:Dayjs, timeString: string) => {
        setDischargeModeChargeScheduleFromValue(time);
      };
    const dischargeModeChargeScheduleToOnChange = (time:Dayjs, timeString: string) => {
        setDischargeModeChargeScheduleToValue(time);
      };

    const handleAddChild =()=>{
      props.handleAdd(batteryName,
        manufacteraerName,
        grid,
       state,
        utility,
        loadZone,
        capacity,
        cRating,
       "Charging",
       "50%",
        "50%",
        "None",
       "200/6500",
        lifeSpan,
        "yes");
    }
   
    return (
        <Modal
        open={props.open}
        title="Add battery"
        onOk={handleAddChild}
        onCancel={props.handleCancel}
        footer={[
          <Button key="back" onClick={props.handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleAddChild}>
            Add
          </Button>,
        ]}
      >
        <Space direction="vertical">
          <Space>
            <strong>Battery</strong>
          </Space>
          <Space>
            <label>Name:</label>
            <Input value={batteryName} onChange={(e)=>{setBatteryName(e.target.value)}}></Input>
            <label>COD:</label>
            <DatePicker onChange={onChangeDate} value={COD}></DatePicker>
          </Space>
        </Space>

        <Divider />

        <Space direction="vertical">
          <Space>
            <strong>Market</strong>
          </Space>
          <Space>
            <label>Grid:</label>
            <Select
              placeholder="--Select--"
              options={[
                {
                  value: "ercot",
                  label: "ERCOT",
                },
                {
                  value: "pjm",
                  label: "PJM",
                },
                {
                  value: "nyiso",
                  label: "NYISO",
                },
              ]}
              value={grid}
             onChange={setGrid}
            ></Select>
            <label>Utility:</label>
            <Select
              placeholder="--Select--"
              options={[
                {
                  value: "cnp",
                  label: "CNP",
                },
                {
                  value: "peco",
                  label: "PECO",
                },
                {
                  value: "nyseg",
                  label: "NYSEG",
                },
              ]}
              value={utility}
              onChange={setUtility}
            ></Select>
          </Space>
          <Space>
            <label>State:</label>
            <Select
              placeholder="--Select--"
              options={[
                {
                  value: "AL",
                  label: "AL",
                },
                {
                  value: "AK",
                  label: "AK",
                },
                {
                  value: "AZ",
                  label: "AZ",
                },
                {
                  value: "ZR",
                  label: "AR",
                },
                {
                  value: "CA",
                  label: "CA",
                },
                {
                  value: "CO",
                  label: "CO",
                },
                {
                  value: "CT",
                  label: "CT",
                },
                {
                  value: "DE",
                  label: "DE",
                },
                {
                  value: "DC",
                  label: "DC",
                },
                {
                  value: "FL",
                  label: "FL",
                },
                {
                  value: "GA",
                  label: "GA",
                },
                {
                  value: "HI",
                  label: "HI",
                },
                {
                  value: "ID",
                  label: "ID",
                },
                {
                  value: "IL",
                  label: "IL",
                },
                {
                  value: "IN",
                  label: "IN",
                },
                {
                  value: "IA",
                  label: "IA",
                },
                {
                  value: "KS",
                  label: "KS",
                },
                {
                  value: "KY",
                  label: "KY",
                },
                {
                  value: "LA",
                  label: "LA",
                },
                {
                  value: "ME",
                  label: "ME",
                },
                {
                  value: "MD",
                  label: "MD",
                },
                {
                  value: "MA",
                  label: "MA",
                },
                {
                  value: "MI",
                  label: "MI",
                },
                {
                  value: "MN",
                  label: "MN",
                },
                {
                  value: "MS",
                  label: "MS",
                },
                {
                  value: "MO",
                  label: "MO",
                },
                {
                  value: "MT",
                  label: "MT",
                },
                {
                  value: "NE",
                  label: "NE",
                },
                {
                  value: "NV",
                  label: "NV",
                },
                {
                  value: "NH",
                  label: "NH",
                },
                {
                  value: "NJ",
                  label: "NJ",
                },
                {
                  value: "NM",
                  label: "NM",
                },
                {
                  value: "NY",
                  label: "NY",
                },
                {
                  value: "NC",
                  label: "NC",
                },
                {
                  value: "ND",
                  label: "ND",
                },
                {
                  value: "OH",
                  label: "OH",
                },
                {
                  value: "OK",
                  label: "OK",
                },
                {
                  value: "OR",
                  label: "OR",
                },
                {
                  value: "PA",
                  label: "PA",
                },
                {
                  value: "RI",
                  label: "RI",
                },
                {
                  value: "SC",
                  label: "SC",
                },
                {
                  value: "SD",
                  label: "SD",
                },
                {
                  value: "TN",
                  label: "TN",
                },
                {
                  value: "TX",
                  label: "TX",
                },
                {
                  value: "UT",
                  label: "UT",
                },
                {
                  value: "VT",
                  label: "VT",
                },
                {
                  value: "VA",
                  label: "VA",
                },
                {
                  value: "WA",
                  label: "WA",
                },
                {
                  value: "WV",
                  label: "WV",
                },
                {
                  value: "WI",
                  label: "WI",
                },
                {
                  value: "WY",
                  label: "WY",
                },
              ]}
              value={state}
              onChange={setState}
            ></Select>
            <label>Load Zone:</label>
            <Select
              placeholder="--Select--"
              options={[
                {
                  value: "huston",
                  label: "Huston",
                },
                {
                  value: "peco",
                  label: "PECO",
                },
                {
                  value: "zonef",
                  label: "Zone F",
                },
              ]}
              value={loadZone}
              onChange={setLoadZone}
            ></Select>
          </Space>
        </Space>
        <Divider />
        <Space direction="vertical">
          <Space>
            <strong>Manufacteraer</strong>
          </Space>
          <Space>
            <label>Name:</label>
            <Select
              placeholder="--Select--"
              options={[
                {
                  value: "CATL",
                  label: "CATL",
                },
                {
                  value: "BYD",
                  label: "BYD",
                },
                {
                  value: "Megapack",
                  label: "Megapack",
                },
              ]}
              value={manufacteraerName}
              onChange={setManufacteraerName}
            ></Select>
            <label>Model:</label>
            <Select
              placeholder="--Select--"
              options={[
                {
                  value: "A",
                  label: "A",
                },
                {
                  value: "B",
                  label: "B",
                },
                {
                  value: "C",
                  label: "C",
                },
              ]}
              value={model}
              onChange={setModel}
            ></Select>
          </Space>
        </Space>

        <Divider />

        <Space direction="vertical">
          <Space>
            <strong>Attributes</strong>
          </Space>
          <Space>
            <label>Capacity(kW):</label>
            <Input value={capacity} onChange={(e)=>{setCapacity(e.target.value)}}></Input>
            <label>Model:</label>
            <Input value={attributeModel} onChange={(e)=>{setAttributeModel(e.target.value)}}></Input>
          </Space>
          <Space>
            <label>C rating:</label>
            <Input value={cRating} onChange={(e)=>{setCRating(e.target.value)}}></Input>
            <label>Life span(year):</label>
            <Input value={lifeSpan} onChange={(e)=>{setLifeSpan(e.target.value)}}></Input>
          </Space>
        </Space>
        <Divider />
       {/* ------------------Charge and Discharge Settings--------------------*/}
        <strong>Charge and Discharge Settings</strong>
        <Space>
          <Space>
            <Space direction="vertical">
              <label> Charge Mode:</label>
              <Select
                placeholder="--Select--"
                options={[
                  {
                    value: "grid_charge",
                    label: "Grid Charge",
                  },
                  {
                    value: "off",
                    label: "Off",
                  },
                ]}
                value={chargeMode}
                onChange={setChargeMode}
              ></Select>
              <Divider />
              <label>Power Limit:</label>
              <Space>
                <label>Upper:</label>
                <Input value={chargePowerLimitUpper} onChange={(e)=>{setChargePowerLimitUpper(e.target.value)}}></Input>
              </Space>

              <Space>
                <label>Lower:</label>
                <Input  value={chargePowerLimitLower} onChange={(e)=>{setChargePowerLimitLower(e.target.value)}}></Input>
              </Space>
              <Divider />
              <label>Max Charge Level(%):</label>
              <Input  value={maxChargeLevel} onChange={(e)=>{setMaxChargeLevel(e.target.value)}}></Input>
              <Divider />
              <label>Charge Rate:</label>
              <Input value={chargeRate} onChange={(e)=>{setChargeRate(e.target.value)}}></Input>
              <Divider />
              <Space direction="vertical">
                <label>Charge Schedule:</label>
                <Space>
                  <label>From:</label>
                  <TimePicker format="HH:mm" onChange={chargeModeChargeScheduleFromOnChange} value={chargeModeChargeScheduleFromValue}></TimePicker>
                  <label>To:</label>
                  <TimePicker format="HH:mm" onChange={chargeModeChargeScheduleToOnChange} value={chargeModeChargeScheduleToValue}></TimePicker>
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
              ></Select>
              <Divider />
              <label>Power Limit:</label>
              <Space>
                <label>Upper:</label>
                <Input value={discahrgePowerLimitUpper} onChange={(e)=>{setDiscahrgePowerLimitUpper(e.target.value)}}></Input>
              </Space>

              <Space>
                <label>Lower:</label>
                <Input value={discahrgePowerLimitLower} onChange={(e)=>{setDiscahrgePowerLimitLower(e.target.value)}}></Input>
              </Space>
              <Divider />
              <label>Max Charge Level(%):</label>
              <Input value={discahrgeMaxChargeLevel} onChange={(e)=>{setDiscahrgeMaxChargeLevel(e.target.value)}}></Input>
              <Divider />
              <label>Charge Rate:</label>
              <Input value={discahrgeChargeRate} onChange={(e)=>{setDiscahrgeChargeRate(e.target.value)}}></Input>
              <Divider />
              <Space direction="vertical">
                <label>Charge Schedule:</label>
                <Space>
                  <label>From:</label>
                  <TimePicker format="HH:mm" onChange={dischargeModeChargeScheduleFromOnChange} value={dischargeModeChargeScheduleFromValue}></TimePicker>
                  <label>To:</label>
                  <TimePicker format="HH:mm" onChange={dischargeModeChargeScheduleToOnChange} value={dischargeModeChargeScheduleToValue}></TimePicker>
                </Space>
              </Space>
            </Space>
          </Space>
        </Space>

        <Divider/>
<Space direction="vertical">
<strong>Alarm for exceed Threshold Settings</strong>
  <Space>
        <Space direction="vertical">
        
          <Space direction="vertical">
            Charge for current:
            <Space>
                <label>Upper:</label>
                <Input value={chargeForCurrentUpper} onChange={(e)=>{setChargeForCurrentUpper(e.target.value)}}></Input>
            </Space>
            <Space>
                <label>Lower:</label>
                <Input value={chargeForCurrentLower} onChange={(e)=>{setChargeForCurrentLower(e.target.value)}}></Input>
            </Space>
          </Space>

          <Divider/>

          <Space direction="vertical">
            Temp:
            <Space>
                <label>Upper:</label>
                <Input value={alertSettingTempUpper} onChange={(e)=>{setAlertSettingTempUpper(e.target.value)}}></Input>
            </Space>
            <Space>
                <label>Lower:</label>
                <Input value={alertSettingTempLower} onChange={(e)=>{setAlertSettingTempLower(e.target.value)}}></Input>
            </Space>
          </Space>
          <Divider/>
          <Space direction="vertical">
            Voltage:
            <Space>
                <label>Max:</label>
                <Input value={chargeVoltageMax} onChange={(e)=>{setChargeVoltageMax(e.target.value)}}></Input>
            </Space>
          </Space>
        </Space>

        <Space direction="vertical">
        {/* <strong>Alarm for exceed Threshold Settings</strong> */}
          <Space direction="vertical">
            Discharge for current:
            <Space>
                <label>Upper:</label>
                <Input value={dischargeForCurrentUpper} onChange={(e)=>{setDischargeForCurrentUpper(e.target.value)}}></Input>
            </Space>
            <Space>
                <label>Lower:</label>
                <Input value={dischargeForCurrentLower} onChange={(e)=>{setDischargeForCurrentLower(e.target.value)}}></Input>
            </Space>
          </Space>

          <Divider/>

          <Space direction="vertical">
            Temp:
            <Space>
                <label>Upper:</label>
                <Input value={dischargeTempUpper} onChange={(e)=>{setDischargeTempUpper(e.target.value)}}></Input>
            </Space>
            <Space>
                <label>Lower:</label>
                <Input value={dischargeTempLower} onChange={(e)=>{setDischargeTempLower(e.target.value)}}></Input>
            </Space>
          </Space>
          <Divider/>
          <Space direction="vertical">
            Voltage:
            <Space>
                <label>Max:</label>
                <Input value={dischargeVoltageMax} onChange={(e)=>{setDischargeVoltageMax(e.target.value)}}></Input>
            </Space>
          </Space>
        </Space>
  </Space>
</Space>


      </Modal>
    );
  }
  
  export default ModalCom
  