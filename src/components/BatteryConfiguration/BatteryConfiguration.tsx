import React, {useState} from "react";
import {Link} from "react-router-dom";
import type {Dayjs} from "dayjs";
import {
    Input,
    List,
    FormControl,
    Divider,
    Select,
    Card,
    FormLabel,
    Grid,
    Typography,
    Box,
    Option,
    Stack
} from '@mui/joy';


interface FormElements extends HTMLFormControlsCollection {
    name: HTMLInputElement;
    grid: [null,HTMLSelectElement];
    utility:  [null,HTMLSelectElement];
    state:  [null,HTMLSelectElement];
    loadZone: [null,HTMLSelectElement];
    manufacturerName:[null,HTMLSelectElement];
    model: [null,HTMLSelectElement];
    capacity: HTMLInputElement;
    cRating: HTMLInputElement;
    lifeCycles: HTMLInputElement;
    life: HTMLInputElement;
    chargeMode:[null,HTMLSelectElement];
    chargePowerLowerLimit: HTMLInputElement;
    chargePowerUpperLimit: HTMLInputElement;
    chargeMaxBatteryPerc: HTMLInputElement;
    chargeCRate: HTMLInputElement;
    alarmChargeCurrentLowerPerc: HTMLInputElement;
    alarmChargeCurrentUpperPerc: HTMLInputElement;
    alarmChargeTempLower: HTMLInputElement;
    alarmChargeTempUpper: HTMLInputElement;
    alarmChargeVoltageMaxPerc: HTMLInputElement;
    dischargeMode: [null,HTMLSelectElement];
    dischargePowerLowerLimit: HTMLInputElement;
    dischargePowerUpperLimit: HTMLInputElement;
    dischargeMinBatteryPerc: HTMLInputElement;
    dischargeCRate:HTMLInputElement;
    alarmDischargeCurrentLowerPerc: HTMLInputElement;
    alarmDischargeCurrentUpperPerc: HTMLInputElement;
    alarmDischargeTempLower: HTMLInputElement;
    alarmDischargeTempUpper: HTMLInputElement;
    alarmDischargeVoltageMaxPerc: HTMLInputElement;
}

export interface BatteryConfigFormElement extends HTMLFormElement {
    readonly elements: FormElements;
}

function BatteryConfiguration({onChange, inEdit = false, initValues}) {
    return (

        <Stack spacing={2}>
            <Grid
                columnSpacing={2}
                container
                rowSpacing={2}>
                <Grid md={12}>
                    <Typography level={"h3"} fontSize={"md"}>Battery</Typography>
                </Grid>
                <Grid md={6}>
                    <FormControl required>
                        <FormLabel>Name</FormLabel>
                        <Input
                            disabled={!inEdit}
                            defaultValue={initValues.name}
                            size={"sm"}
                            style={{width: "100%"}}
                            name={"name"}
                        ></Input>
                    </FormControl>
                </Grid>
                <Grid md={6}>
                    <FormControl>
                        <FormLabel>COD</FormLabel>
                        <Box sx={{display: 'flex'}}>
                            <Input
                                disabled={!inEdit}
                                size={"sm"}
                                type="number"
                                placeholder="MM"
                                sx={{borderTopRightRadius: 0, borderBottomRightRadius: 0}}
                            />
                            <Input
                                disabled={!inEdit}
                                sx={{borderRadius: 0}}
                                size={"sm"}
                                type="number"
                                placeholder="DD"
                            />
                            <Input
                                disabled={!inEdit}
                                size={"sm"}
                                type="number"
                                placeholder="YY"
                                sx={{borderTopLeftRadius: 0, borderBottomLeftRadius: 0}}
                            />
                        </Box>
                    </FormControl>
                </Grid>
            </Grid>

            <Divider/>

            <Grid
                columnSpacing={2}
                container rowSpacing={2}>
                <Grid md={12}>
                    <Typography level={"h3"} fontSize={"md"}>Market</Typography>
                </Grid>
                <Grid md={6}>
                    <FormControl>
                        <FormLabel>Grid</FormLabel>
                        <Select
                            disabled={!inEdit}
                            name={"grid"}
                            defaultValue={initValues.grid}
                            size={"sm"}
                            placeholder="--Select--"
                            style={{width: "100%"}}
                        >
                            {
                                [
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
                                ].map((o, i) => <Option key={i} value={o.value} label={o.label}>{o.label}</Option>)
                            }
                        </Select>
                    </FormControl>
                </Grid>
                <Grid md={6}>
                    <FormControl>
                        <FormLabel>Utility</FormLabel>
                        <Select
                            disabled={!inEdit}
                            name={"utility"}
                            defaultValue={initValues.utility}
                            size={"sm"}
                            placeholder="--Select--"
                            style={{width: "100%"}}
                        >
                            {
                                [
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
                                ].map((o, i) => <Option key={i} value={o.value} label={o.label}>{o.label}</Option>)
                            }
                        </Select>
                    </FormControl>
                </Grid>
                <Grid md={6}>
                    <FormControl>
                        <FormLabel>State</FormLabel>
                        <Select
                            disabled={!inEdit}
                            size={"sm"}
                            placeholder="--Select--"
                            name="state"
                            defaultValue={initValues.state}
                            style={{width: "100%"}}
                        >
                            {
                                [
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
                                ].map((o, i) => <Option key={i} value={o.value} label={o.label}>{o.label}</Option>)
                            }
                        </Select>
                    </FormControl>
                </Grid>
                <Grid md={6}>
                    <FormControl>
                        <FormLabel>Load Zone</FormLabel>
                        <Select
                            disabled={!inEdit}
                            size={"sm"}
                            placeholder="--Select--"
                            name={"loadZone"}
                            defaultValue={initValues.loadZone}
                            style={{width: "100%"}}
                        >
                            {
                                [
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
                                ].map((o, i) => <Option key={i} value={o.value} label={o.label}>{o.label}</Option>)
                            }
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>

            <Divider/>

            <Grid
                columnSpacing={2}
                container rowSpacing={2}>
                <Grid md={12}>
                    <Typography level={"h3"} fontSize={"md"}>Manufacturer</Typography>
                </Grid>
                <Grid md={6}>
                    <FormControl>
                        <FormLabel>Name</FormLabel>
                        <Select
                            disabled={!inEdit}
                            name={"manufacturerName"}
                            size={"sm"}
                            placeholder="--Select--"
                            defaultValue={initValues.manufacturerName}
                            style={{width: "100%"}}
                        >
                            {
                                [
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
                                ].map((o, i) => <Option key={i} value={o.value} label={o.label}>{o.label}</Option>)
                            }
                        </Select>
                    </FormControl>
                </Grid>
                <Grid md={6}>
                    <FormControl>
                        <FormLabel>Model</FormLabel>
                        <Select
                            disabled={!inEdit}
                            name={"model"}
                            size={"sm"}
                            defaultValue={initValues.model}
                            placeholder="--Select--"
                            style={{width: "100%"}}
                        >
                            {
                                [
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
                                ].map((o, i) => <Option key={i} value={o.value} label={o.label}>{o.label}</Option>)
                            }
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <Divider/>
            <Grid
                columnSpacing={2}
                container rowSpacing={2}>
                <Grid md={12}>
                    <Typography level={"h3"} fontSize={"md"}>Attributes</Typography>
                </Grid>
                <Grid md={6}>
                    <FormControl>
                        <FormLabel>Capacity(kW)</FormLabel>
                        <Input
                            disabled={!inEdit}
                            name={"capacity"}
                            size={"sm"}
                            type={"number"}
                            defaultValue={initValues.capacity}
                        ></Input>
                    </FormControl>
                </Grid>
                <Grid md={6}>
                    <FormControl>
                        <FormLabel>C Rating</FormLabel>
                        <Input
                            disabled={!inEdit}
                            size={"sm"}
                            name={"cRating"}
                            defaultValue={initValues.cRating}
                        ></Input>
                    </FormControl>
                </Grid>
                <Grid md={6}>
                    <FormControl>
                        <FormLabel>Life Cycles</FormLabel>
                        <Input
                            disabled={!inEdit}
                            size={"sm"}
                            name={"lifeCycles"}
                            defaultValue={initValues.lifeCycles}
                        ></Input>
                    </FormControl>
                </Grid>
                <Grid md={6}>
                    <FormControl>
                        <FormLabel>Life Span (Years)</FormLabel>
                        <Input
                            disabled={!inEdit}
                            size={"sm"}
                            name={"life"}
                            defaultValue={initValues.life}
                        ></Input>
                    </FormControl>
                </Grid>

            </Grid>

            <Divider/>
            {/* ------------------Charge and Discharge Settings--------------------*/}

            <Grid
                columnSpacing={2}
                container
                rowSpacing={2}>
                <Grid md={6}>
                    <Card variant={"soft"}>
                        <Typography level={"h3"} fontSize={"md"}>Charge Settings</Typography>
                        <Grid
                            columnSpacing={2}
                            container
                            rowSpacing={2}>
                            <Grid xs={12}>
                                <FormControl>
                                    <FormLabel>Mode</FormLabel>
                                    <Select
                                        disabled={!inEdit}
                                        size={"sm"}
                                        placeholder="--Select--"
                                        name={"chargeMode"}
                                        defaultValue={initValues.chargeMode}
                                        style={{width: "100%"}}
                                    >
                                        {
                                            [
                                                {
                                                    value: "grid_charge",
                                                    label: "Grid Charge",
                                                },
                                                {
                                                    value: "off",
                                                    label: "Off",
                                                },
                                            ].map((o, i) => <Option key={i} value={o.value}
                                                                    label={o.label}>{o.label}</Option>)
                                        }
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid xs={12}>
                                <FormControl>
                                    <FormLabel>Power Limit (MW)</FormLabel>
                                    <Grid sx={{flexWrap: "nowrap"}} columnSpacing={2}
                                          container
                                          rowSpacing={2}>
                                        <Grid lg={4}>
                                            <Input
                                                disabled={!inEdit}
                                                size={"sm"}
                                                type={"number"}
                                                name={"chargePowerLowerLimit"}
                                                defaultValue={initValues.chargePowerLowerLimit}
                                            ></Input>
                                        </Grid>
                                        <Grid sx={{flexShrink: 0}} lg={4}>
                                            <Typography level={"body-sm"}>To</Typography>
                                        </Grid>
                                        <Grid lg={4}>
                                            <Input
                                                disabled={!inEdit}
                                                size={"sm"}
                                                type={"number"}
                                                name={"chargePowerUpperLimit"}
                                                defaultValue={initValues.chargePowerUpperLimit}
                                            ></Input>
                                        </Grid>
                                    </Grid>
                                </FormControl>
                            </Grid>
                            <Grid xs={12}>
                                <FormControl>
                                    <FormLabel>Max Charge Level(%)</FormLabel>
                                    <Input
                                        disabled={!inEdit}
                                        size={"sm"}
                                        endDecorator={"of Full Capacity"}
                                        name={"chargeMaxBatteryPerc"}
                                        defaultValue={initValues.chargeMaxBatteryPerc}
                                    ></Input>
                                </FormControl>
                            </Grid>
                            <Grid xs={12}>
                                <FormControl>
                                    <FormLabel>Rate (c)</FormLabel>
                                    <Input
                                        disabled={!inEdit}
                                        size={"sm"}
                                        type={"number"}
                                        name={"chargeCRate"}
                                        defaultValue={initValues.chargeCRate}
                                    ></Input>
                                </FormControl>
                            </Grid>
                            <Grid xs={12}>
                                <FormControl>
                                    <FormLabel>Schedule</FormLabel>
                                    <Grid sx={{flexWrap: "nowrap"}} columnSpacing={2}
                                          container
                                          rowSpacing={2}>
                                        <Grid lg={5} sx={{display: 'flex'}}>
                                            <Input
                                                disabled={!inEdit}
                                                sx={{borderTopRightRadius: 0, borderBottomRightRadius: 0}}
                                                size={"sm"}
                                                placeholder={"HH"}
                                                type={"number"}
                                            ></Input>
                                            <Input
                                                disabled={!inEdit}
                                                sx={{borderTopLeftRadius: 0, borderBottomLeftRadius: 0}}
                                                size={"sm"}
                                                type={"number"}
                                                placeholder={"MM"}
                                            ></Input>
                                        </Grid>
                                        <Grid sx={{flexShrink: 0}} lg={2}>
                                            <Typography level={"body-sm"}>To</Typography>
                                        </Grid>
                                        <Grid lg={5} sx={{display: 'flex'}}>
                                            <Input
                                                disabled={!inEdit}
                                                sx={{borderTopRightRadius: 0, borderBottomRightRadius: 0}}
                                                size={"sm"}
                                                placeholder={"HH"}
                                                type={"number"}
                                            ></Input>
                                            <Input
                                                disabled={!inEdit}
                                                sx={{borderTopLeftRadius: 0, borderBottomLeftRadius: 0}}
                                                size={"sm"}
                                                type={"number"}
                                                placeholder={"MM"}
                                            ></Input>
                                        </Grid>
                                    </Grid>
                                </FormControl>
                            </Grid>
                            <Grid xs={12}>
                                <Divider/>
                            </Grid>
                            <Grid xs={12}>
                                <Typography fontSize={"sm"} level={"h4"}>Alarms</Typography>
                            </Grid>
                            <Grid xs={12}>
                                <FormControl>
                                    <FormLabel>Current %</FormLabel>
                                    <Grid sx={{flexWrap: "nowrap"}} columnSpacing={2}
                                          container
                                          rowSpacing={2}>
                                        <Grid lg={4}>
                                            <Input
                                                disabled={!inEdit}
                                                placeholder={"Lower"}
                                                size={"sm"}
                                                type={"number"}
                                                name={"alarmChargeCurrentLowerPerc"}
                                                defaultValue={initValues.alarmChargeCurrentLowerPerc}
                                            ></Input>
                                        </Grid>
                                        <Grid sx={{flexShrink: 0}} lg={4}>
                                            <Typography level={"body-sm"}>To</Typography>
                                        </Grid>
                                        <Grid lg={4}>
                                            <Input
                                                disabled={!inEdit}
                                                placeholder={"Upper"}
                                                size={"sm"}
                                                type={"number"}
                                                name={"alarmChargeCurrentUpperPerc"}
                                                defaultValue={initValues.alarmChargeCurrentUpperPerc}
                                            ></Input>
                                        </Grid>
                                    </Grid>
                                </FormControl>
                            </Grid>
                            <Grid xs={12}>
                                <FormControl>
                                    <FormLabel>Temp (F)</FormLabel>
                                    <Grid sx={{flexWrap: "nowrap"}} columnSpacing={2}
                                          container
                                          rowSpacing={2}>
                                        <Grid lg={4}>
                                            <Input
                                                disabled={!inEdit}
                                                placeholder={"Lower"}
                                                size={"sm"}
                                                type={"number"}
                                                name={"alarmChargeTempLower"}
                                                defaultValue={initValues.alarmChargeTempLower}
                                            ></Input>
                                        </Grid>
                                        <Grid sx={{flexShrink: 0}} lg={4}>
                                            <Typography level={"body-sm"}>To</Typography>
                                        </Grid>
                                        <Grid lg={4}>
                                            <Input
                                                disabled={!inEdit}
                                                placeholder={"Upper"}
                                                size={"sm"}
                                                type={"number"}
                                                name={"alarmChargeTempUpper"}
                                                defaultValue={initValues.alarmChargeTempUpper}
                                            ></Input>
                                        </Grid>
                                    </Grid>
                                </FormControl>
                            </Grid>
                            <Grid xs={12}>
                                <FormControl>
                                    <FormLabel>Voltage (%)</FormLabel>
                                    <Input
                                        disabled={!inEdit}
                                        placeholder={"Max"}
                                        size={"sm"}
                                        type={"number"}
                                        name={"alarmChargeVoltageMaxPerc"}
                                        defaultValue={initValues.alarmChargeVoltageMaxPerc}
                                    ></Input>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                <Grid md={6}>
                    <Card variant={"soft"}>
                        <Typography level={"h3"} fontSize={"md"}>Discharge Settings</Typography>
                        <Grid
                            columnSpacing={2}
                            container
                            rowSpacing={2}>
                            <Grid xs={12}>
                                <FormControl>
                                    <FormLabel>Mode</FormLabel>
                                    <Select
                                        disabled={!inEdit}
                                        size={"sm"}
                                        placeholder="--Select--"
                                        name={"dischargeMode"}
                                        defaultValue={initValues.dischargeMode}
                                        style={{width: "100%"}}
                                    >
                                        {
                                            [
                                                {
                                                    value: "grid_charge",
                                                    label: "Grid Charge",
                                                },
                                                {
                                                    value: "off",
                                                    label: "Off",
                                                },
                                            ].map((o, i) => <Option key={i} value={o.value}
                                                                    label={o.label}>{o.label}</Option>)
                                        }
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid xs={12}>
                                <FormControl>
                                    <FormLabel>Power Limit (MW)</FormLabel>
                                    <Grid sx={{flexWrap: "nowrap"}} columnSpacing={2}
                                          container
                                          rowSpacing={2}>
                                        <Grid lg={4}>
                                            <Input
                                                disabled={!inEdit}
                                                size={"sm"}
                                                type={"number"}
                                                name={"dischargePowerLowerLimit"}
                                                defaultValue={initValues.dischargePowerLowerLimit}
                                            ></Input>
                                        </Grid>
                                        <Grid sx={{flexShrink: 0}} lg={4}>
                                            <Typography level={"body-sm"}>To</Typography>
                                        </Grid>
                                        <Grid lg={4}>
                                            <Input
                                                disabled={!inEdit}
                                                size={"sm"}
                                                type={"number"}
                                                name={"dischargePowerUpperLimit"}
                                                defaultValue={initValues.dischargePowerUpperLimit}
                                            ></Input>
                                        </Grid>
                                    </Grid>
                                </FormControl>
                            </Grid>
                            <Grid xs={12}>
                                <FormControl>
                                    <FormLabel>Min Battery Level (%)</FormLabel>
                                    <Input
                                        disabled={!inEdit}
                                        size={"sm"}
                                        endDecorator={"of Full Capacity"}
                                        name={"dischargeMinBatteryPerc"}
                                        defaultValue={initValues.dischargeMinBatteryPerc}
                                    ></Input>
                                </FormControl>
                            </Grid>
                            <Grid xs={12}>
                                <FormControl>
                                    <FormLabel>Rate (c)</FormLabel>
                                    <Input
                                        disabled={!inEdit}
                                        size={"sm"}
                                        type={"number"}
                                        name={"dischargeCRate"}
                                        defaultValue={initValues.dischargeCRate}
                                    ></Input>
                                </FormControl>
                            </Grid>
                            <Grid xs={12}>
                                <FormControl>
                                    <FormLabel>Schedule</FormLabel>
                                    <Grid sx={{flexWrap: "nowrap"}} columnSpacing={2}
                                          container
                                          rowSpacing={2}>
                                        <Grid lg={5} sx={{display: 'flex'}}>
                                            <Input
                                                disabled={!inEdit}
                                                sx={{borderTopRightRadius: 0, borderBottomRightRadius: 0}}
                                                size={"sm"}
                                                placeholder={"HH"}
                                                type={"number"}
                                            ></Input>
                                            <Input
                                                disabled={!inEdit}
                                                sx={{borderTopLeftRadius: 0, borderBottomLeftRadius: 0}}
                                                size={"sm"}
                                                type={"number"}
                                                placeholder={"MM"}
                                            ></Input>
                                        </Grid>
                                        <Grid sx={{flexShrink: 0}} lg={2}>
                                            <Typography level={"body-sm"}>To</Typography>
                                        </Grid>
                                        <Grid lg={5} sx={{display: 'flex'}}>
                                            <Input
                                                disabled={!inEdit}
                                                sx={{borderTopRightRadius: 0, borderBottomRightRadius: 0}}
                                                size={"sm"}
                                                placeholder={"HH"}
                                                type={"number"}
                                            ></Input>
                                            <Input
                                                disabled={!inEdit}
                                                sx={{borderTopLeftRadius: 0, borderBottomLeftRadius: 0}}
                                                size={"sm"}
                                                type={"number"}
                                                placeholder={"MM"}
                                            ></Input>
                                        </Grid>
                                    </Grid>
                                </FormControl>
                            </Grid>
                            <Grid xs={12}>
                                <Divider/>
                            </Grid>
                            <Grid xs={12}>
                                <Typography fontSize={"sm"} level={"h4"}>Alarms</Typography>
                            </Grid>
                            <Grid xs={12}>
                                <FormControl>
                                    <FormLabel>Current %</FormLabel>
                                    <Grid sx={{flexWrap: "nowrap"}} columnSpacing={2}
                                          container
                                          rowSpacing={2}>
                                        <Grid lg={4}>
                                            <Input
                                                disabled={!inEdit}
                                                placeholder={"Lower"}
                                                size={"sm"}
                                                type={"number"}
                                                name={"alarmDischargeCurrentLowerPerc"}
                                                defaultValue={initValues.alarmDischargeCurrentLowerPerc}
                                            ></Input>
                                        </Grid>
                                        <Grid sx={{flexShrink: 0}} lg={4}>
                                            <Typography level={"body-sm"}>To</Typography>
                                        </Grid>
                                        <Grid lg={4}>
                                            <Input
                                                disabled={!inEdit}
                                                placeholder={"Upper"}
                                                size={"sm"}
                                                type={"number"}
                                                name={"alarmDischargeCurrentUpperPerc"}
                                                defaultValue={initValues.alarmDischargeCurrentUpperPerc}
                                            ></Input>
                                        </Grid>
                                    </Grid>
                                </FormControl>
                            </Grid>
                            <Grid xs={12}>
                                <FormControl>
                                    <FormLabel>Temp (F)</FormLabel>
                                    <Grid sx={{flexWrap: "nowrap"}} columnSpacing={2}
                                          container
                                          rowSpacing={2}>
                                        <Grid lg={4}>
                                            <Input
                                                disabled={!inEdit}
                                                placeholder={"Lower"}
                                                size={"sm"}
                                                type={"number"}
                                                name={"alarmDischargeTempLower"}
                                                defaultValue={initValues.alarmDischargeTempLower}
                                            ></Input>
                                        </Grid>
                                        <Grid sx={{flexShrink: 0}} lg={4}>
                                            <Typography level={"body-sm"}>To</Typography>
                                        </Grid>
                                        <Grid lg={4}>
                                            <Input
                                                disabled={!inEdit}
                                                placeholder={"Upper"}
                                                size={"sm"}
                                                type={"number"}
                                                name={"alarmDischargeTempUpper"}
                                                defaultValue={initValues.alarmDischargeTempUpper}
                                            ></Input>
                                        </Grid>
                                    </Grid>
                                </FormControl>
                            </Grid>
                            <Grid xs={12}>
                                <FormControl>
                                    <FormLabel>Voltage (%)</FormLabel>
                                    <Input
                                        disabled={!inEdit}
                                        placeholder={"Max"}
                                        size={"sm"}
                                        type={"number"}
                                        name={"alarmDischargeVoltageMaxPerc"}
                                        defaultValue={initValues.alarmDischargeVoltageMaxPerc}
                                    ></Input>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </Stack>
    );
}

export default BatteryConfiguration;
