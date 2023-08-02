import React, {useState} from "react";
import {Link} from "react-router-dom";
import type {Dayjs} from "dayjs";
import {Modal,Input, Button, ModalDialog, ModalClose, Typography, Box, FormControl, FormLabel} from "@mui/joy"
import {
    Modal as ModalDep,
    Space,
    DatePicker,
    Divider,
    Select,
    TimePicker,
} from "antd";
import BatteryConfiguration, {
    BatteryConfigFormElement
} from "@/components/BatteryConfiguration/BatteryConfiguration";

function ModalCom({handleAdd,handleCancel, open}) {
    const [batteryConfig, setBatteryConfig] = useState(null)

    const onAdd = (data) => {

    }

    return (
        <Modal
            open={open}
            title="Add battery"
            // onOk={handleAddChild}
            // onCancel={props.handleCancel}
            // footer={[
            //   <Button key="back" onClick={props.handleCancel}>
            //     Cancel
            //   </Button>,
            //   // <Button key="submit" type="primary" onClick={handleAddChild}>
            //   //   Add
            //   // </Button>,
            // ]}
        >
            <ModalDialog sx={{maxWidth: "710px"}} size={"sm"} variant="outlined">
                <Typography sx={{p: 1}} level="h2" fontSize={"md"}>
                    Add New Battery
                </Typography>
                <form
                    style={{display: 'flex',flexDirection:"column", overflow:"auto"}}
                    onSubmit={(event: React.FormEvent<BatteryConfigFormElement>) => {
                        event.preventDefault();
                        const formElements = event.currentTarget.elements;
                        const data = {
                            name: formElements.name.value,
                            grid: formElements.grid[1].value,
                            utility: formElements.utility[1].value,
                            state: formElements.state[1].value,
                            loadZone: formElements.loadZone[1].value,
                            manufacturerName: formElements.manufacturerName[1].value,
                            model: formElements.model[1].value,
                            capacity: formElements.capacity.value,
                            cRating: formElements.cRating.value,
                            lifeCycles: formElements.lifeCycles.value,
                            life: formElements.life.value,
                            chargeMode: formElements.chargeMode[1].value,
                            chargePowerLowerLimit: formElements.chargePowerLowerLimit.value,
                            chargePowerUpperLimit: formElements.chargePowerUpperLimit.value,
                            chargeMaxBatteryPerc: formElements.chargeMaxBatteryPerc.value,
                            chargeCRate: formElements.chargeCRate.value,
                            alarmChargeCurrentLowerPerc: formElements.alarmChargeCurrentLowerPerc.value,
                            alarmChargeCurrentUpperPerc: formElements.alarmChargeCurrentUpperPerc.value,
                            alarmChargeTempLower: formElements.alarmChargeTempLower.value,
                            alarmChargeTempUpper: formElements.alarmChargeTempUpper.value,
                            alarmChargeVoltageMaxPerc: formElements.alarmChargeVoltageMaxPerc.value,
                            dischargeMode: formElements.dischargeMode[1].value,
                            dischargePowerLowerLimit: formElements.dischargePowerLowerLimit.value,
                            dischargePowerUpperLimit: formElements.dischargePowerUpperLimit.value,
                            dischargeMinBatteryPerc: formElements.dischargeMinBatteryPerc.value,
                            dischargeCRate: formElements.dischargeCRate.value,
                            alarmDischargeCurrentLowerPerc: formElements.alarmDischargeCurrentLowerPerc.value,
                            alarmDischargeCurrentUpperPerc: formElements.alarmDischargeCurrentUpperPerc.value,
                            alarmDischargeTempLower: formElements.alarmDischargeTempLower.value,
                            alarmDischargeTempUpper: formElements.alarmDischargeTempUpper.value,
                            alarmDischargeVoltageMaxPerc: formElements.alarmDischargeVoltageMaxPerc.value,
                        };
                        handleAdd(data)
                    }}
                >
                    <Box sx={{p: 1,overflow:"auto"}}>
                        <BatteryConfiguration inEdit
                                              initValues={{}}
                                              onChange={setBatteryConfig}/>
                    </Box>
                    <Box sx={{p:1,py:2, display:'flex', justifyContent:"space-between"}}>
                        <Button
                            onClick={handleCancel}
                            size={"sm"} variant={"plain"} color={"primary"}>Cancel</Button>
                        <Button type={"submit"} size={"sm"} variant={"solid"} color={"primary"}>Add</Button>
                    </Box>
                </form>
            </ModalDialog>
        </Modal>
    );
}

export default ModalCom;
