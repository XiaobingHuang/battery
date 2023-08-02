import React, {useMemo, useState} from "react";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import {Box,Card,Stack,Button} from "@mui/joy";
import BatteryConfiguration from "@/components/BatteryConfiguration/BatteryConfiguration";
import {useParams} from "react-router";

const  BatteryDetailSetting=()=>{
    const {batteryId} = useParams<{batteryId: string}>()

    const batteryData = useMemo(() => {
      const batteries =  localStorage.getItem("__BATTERIES__")
      const batteriesJson = JSON.parse(batteries)

      return batteriesJson.find(b => b.id === batteryId)

    },[])

    const [batteryName, setBatteryName] = useState("battery1");
    const [reset, setReset] = useState(false);
    const [inEdit, setInEdit] = useState(false);

    const handleChange = () => {

    }

    return <Stack spacing={2} sx={{maxWidth: "740px", margin:"0 auto"}}>
        <Box sx={{display:'flex', justifyContent:"flex-end"}}>
            {
                !inEdit
                    ?<Button
                        variant={"plain"} color={"primary"}
                        onClick={() => setInEdit(true)}>Edit</Button>
                    :<Box>
                        <Button
                            variant={"plain"} color={"primary"}
                            onClick={() => setInEdit(false)}>Cancel</Button>
                        <Button
                            variant={"solid"} color={"primary"}
                            onClick={() => setInEdit(false)}>Save</Button>
                    </Box>
            }
        </Box>
        <Card>
            <BatteryConfiguration inEdit={inEdit} onChange={handleChange} initValues={batteryData}/>
        </Card>
    </Stack>
}
export default BatteryDetailSetting;





