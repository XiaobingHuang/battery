import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { Table, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import ModalCom from "../ModalCom/ModalCom";
import {appBasePath} from "@/app/configs";
import {Link} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

interface DataType {
  id: string;
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
      id:"AB",
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
      cod:"11/01/22"
    },
    {
      id:"erv",
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
      cod:"04/19/21"
    },
    {
      id:"4g3",
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
      cod:"01/01/20"
    },
  ];
  const columns: ColumnsType<DataType> = [
    { key: "name", title: "Name", dataIndex: "name",
      render: (text,d) => {
        return <Link to={"/battery/" + d.id}>{text}</Link>
      },
      width: 90 },
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
      width: 100,
    },
    { key: "cod", title: "COD", dataIndex: "cod", width: 80 },
  ];

  const [open, setOpen] = useState(false);
  const [rawData, setRawdata] = useState([]);
  let batteryStorageKey = "__BATTERIES__"

  useEffect(() => {
    if(rawData.length>0){
      localStorage.setItem(batteryStorageKey, JSON.stringify(rawData));
    }
  }, [rawData]);

  useEffect(() => {
    const ls = localStorage.getItem(batteryStorageKey)
    if(ls){
      setRawdata(JSON.parse(ls))
    } else {
      setRawdata(data)
    }
  },[])


  const openModal = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const handleAdd = (data) => {
    console.log("in the parent handleAdd, name is:",data.name );
    const newData={
      ...data,
      id: uuidv4(),
      opMode: "Idle",
      soc: null,
      soh: null,
      alert: null,
      cycle: 0,
      life: 0,
    }
    setRawdata([...rawData, newData ]);
    setOpen(false);
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
