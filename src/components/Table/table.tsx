import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { Table, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import ModalCom from "../ModalCom/ModalCom";

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
  const data = [
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
    {
      key: "manufacturer",
      title: "Manufacturer",
      dataIndex: "manufacturer",
      width: 130,
    },
    { key: "grid", title: "Grid", dataIndex: "grid", width: 80 },
    { key: "state", title: "State", dataIndex: "state", width: 90 },
    { key: "utility", title: "Utility", dataIndex: "utility", width: 90 },
    { key: "loadZone", title: "Load Zone", dataIndex: "loadZone", width: 110 },
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

  useEffect(() => {
    rawData.forEach((item, index) => {
      localStorage.setItem(`${item.name}`, JSON.stringify(rawData[index]));
    });
  }, [rawData]);

  const openModal = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const handleAdd = 
  async (name:string,
    manufacturer:string,
    grid:string,
    state:string,
    utility:string,
    loadZone:string, 
    capacity:string, 
    cRating:string, 
    opMode:string, 
    soc:string, 
    soh:string, 
    alert:string, 
    cycle:string, 
    life:string,
    certification:string) => {
    console.log("in the parent handleAdd, name is:",name );
    const newData={
      name: name,
      manufacturer: manufacturer,
      grid: grid,
      state:state,
      utility: utility,
      loadZone: loadZone,
      capacity: capacity,
      cRating: cRating,
      opMode: opMode,
      soc: soc,
      soh: soh,
      alert: alert,
      cycle: cycle,
      life: life,
      certification: certification,
    }
    setRawdata([...rawData, newData ])

  };

  return (
    <div style={{ padding: 15 }}>
      <Button onClick={openModal} type="primary" style={{ marginBottom: 10 }}>
        Add new battery
      </Button>
      <ModalCom open={open} handleCancel={handleCancel} handleAdd={handleAdd} />
      <Table
        columns={columns}
        dataSource={rawData}
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
