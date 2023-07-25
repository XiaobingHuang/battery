import React, { useState } from 'react';
import {Link } from "react-router-dom";
import type { MenuProps } from 'antd';

import {
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

function ModalCom(props) {
   
    return (
        <Modal
        open={props.open}
        title="Add battery"
        onOk={props.handleAdd}
        onCancel={props.handleCancel}
        footer={[
          <Button key="back" onClick={props.handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={props.handleAdd}>
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
    );
  }
  
  export default ModalCom
  