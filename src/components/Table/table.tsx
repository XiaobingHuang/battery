import React, { useState } from "react";
import { render } from "react-dom";
import {
  Table,
  Button,
  Modal,
  Input,
  Space,
  DatePicker,
  Divider,
  Dropdown,
  Select,
  TimePicker,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import dayjs from "dayjs";

interface DataType {
  name: string;
  manufacturer: string;
  grid: string;
  state: string;
  utility: string;
  loadZone: string;
  capacity: string;
  cRating: string;
  opMode: string;
  soc: string;
  soh: string;
  alert: string;
  cycle: string;
  life: string;
  certification: string;
}

function TableComp() {
  const data: DataType[] = [
    {
      name: "Battery1",
      manufacturer: "BYD",
      grid: "ERCOT",
      state: "TX",
      utility: "CNP",
      loadZone: "HoustonZone",
      capacity: "100",
      cRating: "4C",
      opMode: "Charging",
      soc: "85%",
      soh: "99%",
      alert: "None",
      cycle: "200",
      life: "1",
      certification: "Yes",
    },
    {
      name: "Battery2",
      manufacturer: "CATL(NingDe)",
      grid: "PJM",
      state: "PA",
      utility: "PECO",
      loadZone: "PECO",
      capacity: "50",
      cRating: "3C",
      opMode: "Discharging",
      soc: "15%",
      soh: "95%",
      alert: "None",
      cycle: "300",
      life: "3",
      certification: "Yes",
    },
    {
      name: "Battery3",
      manufacturer: "Tesla",
      grid: "NYISO",
      state: "NY",
      utility: "NYSEG",
      loadZone: "ZoneF",
      capacity: "25",
      cRating: "4C",
      opMode: "IDLE",
      soc: "",
      soh: "90%",
      alert: "Yes",
      cycle: "500",
      life: "2",
      certification: "Yes",
    },
  ];
  const columns: ColumnsType<DataType> = [
    { key: "name", title: "Name", dataIndex: "name", width: 90 },
    { key: "manufacturer", title: "Manufacturer", width: 130 },
    { key: "grid", title: "Grid", dataIndex: "grid", width: 80 },
    { key: "state", title: "State", dataIndex: "state", width: 90 },
    { key: "utility", title: "Utility", dataIndex: "utility", width: 90 },
    { key: "loadZone", title: "Load Zone", dataIndex: "loadzone", width: 110 },
    { key: "capacity", title: "Capacity", dataIndex: "capacity", width: 105 },
    { key: "cRating", title: "C Rating", dataIndex: "cRating", width: 105 },
    { key: "opMode", title: "OP Mode", dataIndex: "opMode", width: 105 },
    { key: "soc", title: "SOC", dataIndex: "soc", width: 78 },
    { key: "soh", title: "SOH", dataIndex: "soh", width: 78 },
    { key: "alert", title: "Alert", dataIndex: "alert", width: 80 },
    { key: "cycle", title: "Cycle", dataIndex: "cycle", width: 85 },
    { key: "life", title: "Life", dataIndex: "life", width: 75 },
    {
      key: "certification",
      title: "Certifications",
      dataIndex: "certification",
      width: 130,
    },
  ];

  const [open, setOpen] = useState(false);
  const [rawData, setRawdata] = useState(data);

  const openModal = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const handleAdd = () => {
    return;
  };

  return (
    <div style={{ padding: 15 }}>
      <Button onClick={openModal} type="primary" style={{ marginBottom: 10 }}>
        Add new battery
      </Button>
      <Modal
        open={open}
        title="Add battery"
        onOk={handleAdd}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleAdd}>
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
            <Input></Input>
            <label>COD:</label>
            <DatePicker></DatePicker>
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
            <Input></Input>
            <label>Model:</label>
            <Input></Input>
          </Space>
          <Space>
            <label>C rating:</label>
            <Input></Input>
            <label>Life span(year)</label>
            <Input></Input>
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
              ></Select>
              <Divider />
              <label>Power Limit:</label>
              <Space>
                <label>Upper:</label>
                <Input></Input>
              </Space>

              <Space>
                <label>Lower:</label>
                <Input></Input>
              </Space>
              <Divider />
              <label>Max Charge Level(%):</label>
              <Input></Input>
              <Divider />
              <label>Charge Rate:</label>
              <Input></Input>
              <Divider />
              <Space direction="vertical">
                <label>Charge Schedule:</label>
                <Space>
                  <label>From:</label>
                  <TimePicker format="HH:mm"></TimePicker>
                  <label>To:</label>
                  <TimePicker format="HH:mm"></TimePicker>
                </Space>
              </Space>
            </Space>
            <Space></Space>
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
              ></Select>
              <Divider />
              <label>Power Limit:</label>
              <Space>
                <label>Upper:</label>
                <Input></Input>
              </Space>

              <Space>
                <label>Lower:</label>
                <Input></Input>
              </Space>
              <Divider />
              <label>Max Charge Level(%):</label>
              <Input></Input>
              <Divider />
              <label>Charge Rate:</label>
              <Input></Input>
              <Divider />
              <Space direction="vertical">
                <label>Charge Schedule:</label>
                <Space>
                  <label>From:</label>
                  <TimePicker format="HH:mm"></TimePicker>
                  <label>To:</label>
                  <TimePicker format="HH:mm"></TimePicker>
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
                <Input></Input>
            </Space>
            <Space>
                <label>Lower:</label>
                <Input></Input>
            </Space>
          </Space>

          <Divider/>

          <Space direction="vertical">
            Temp:
            <Space>
                <label>Upper:</label>
                <Input></Input>
            </Space>
            <Space>
                <label>Lower:</label>
                <Input></Input>
            </Space>
          </Space>
          <Divider/>
          <Space direction="vertical">
            Voltage:
            <Space>
                <label>Max:</label>
                <Input></Input>
            </Space>
          </Space>
        </Space>

        <Space direction="vertical">
        {/* <strong>Alarm for exceed Threshold Settings</strong> */}
          <Space direction="vertical">
            Discharge for current:
            <Space>
                <label>Upper:</label>
                <Input></Input>
            </Space>
            <Space>
                <label>Lower:</label>
                <Input></Input>
            </Space>
          </Space>

          <Divider/>

          <Space direction="vertical">
            Temp:
            <Space>
                <label>Upper:</label>
                <Input></Input>
            </Space>
            <Space>
                <label>Lower:</label>
                <Input></Input>
            </Space>
          </Space>
          <Divider/>
          <Space direction="vertical">
            Voltage:
            <Space>
                <label>Max:</label>
                <Input></Input>
            </Space>
          </Space>
        </Space>
  </Space>
</Space>


      </Modal>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        onRow={(record) => {
          return {
            onDoubleClick: () => {
              console.log(record.name);
            },
          };
        }}
      />
    </div>
  );
}

export default TableComp;
