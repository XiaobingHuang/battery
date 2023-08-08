import {Row, Col, Divider} from 'antd';
import EnergyMonitoring from "@/app/views/batteryDetail/views/Dashboard/components/EnergyMonitoring";
import CurrentState from "@/app/views/batteryDetail/views/Dashboard/components/CurrentState";
import moment from "moment";
import {generateChargeDischargeDemoData} from "@/mock/chargeDischargeDemoData";
import {useMemo} from "react";

function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomRange(min, max) {
    let cal = (Math.random() * (max - min) + min);
    return parseFloat(cal);
}

const generateDemoData = () => {
    const start = moment().utcOffset(0).startOf("d");
    const end = moment().utcOffset(0).endOf("d");
    const now = moment().subtract(4, "h");
    const roundedDown = Math.floor(moment().minute() / 15) * 15;
    const now15 = now.clone().minute(roundedDown).second(0).millisecond(0)
    const current = start.clone();
    console.log("S", start.toJSON());

    console.log("timestamps", {
        start: start.toISOString(),
        end: end.toISOString(),
        now: now.toISOString(),
        now15: now15.toISOString(),
        current: current.toISOString(),
    })
    const buyHours = [
        [2, 4],
        [14, 16]
    ];
    const sellHours = [
        [now.hour() + 4, now.hour() + 6],
        [19, 21]
    ];
    let state = "Idle"
    let totalBoughtPast = 0;
    let totalBought = 0;
    let totalSoldPast = 0;
    let totalSold = 0;
    let currentStateOfCharge = 0.23
    const powerCapacity = 25
    const energyCapacity = 50
    let currentMwh = currentStateOfCharge * energyCapacity
    const data = [];
    const intervalMin = 15
    const chargeTime = 2
    let currentSoc = 0
    let currentStateMwh = 0

    while (current.isSameOrBefore(end)) {
        const mwhBuyRate = -46.72;
        const mwhSellRate = 58.83;
        const dataItem = {
            time: current.toISOString(),
            buyKwh: 0,
            sellKwh: 0,
            forecastBuyKwh: 0,
            currentMwh,
            mwhBought: 0,
            mwhSold: 0
        };
        const currenthour = current.hour();
        let isBuy = false;

        buyHours.forEach((b) => {
            const [start, end] = b;
            let mwhBought = energyCapacity / ((60 / intervalMin) * chargeTime)
            let rand = randomRange(0.01, 0.05)
            if (Math.random() < 0.5) {
                rand * -1
            }
            mwhBought = mwhBought + (mwhBought * rand)
            const v = mwhBought * mwhBuyRate;
            if (currenthour >= start && currenthour < end) {
                console.log("mwhBought", mwhBought)
                if (currentMwh < energyCapacity) {
                    currentMwh += mwhBought
                    totalBought += v;
                    dataItem.buyKwh = v;
                    dataItem.currentMwh = currentMwh;
                    dataItem.mwhBought = mwhBought;
                    if (current.isBefore(now)) {
                        totalBoughtPast += v
                    }
                }

            }

        });

        sellHours.forEach((b) => {
            const [start, end] = b;
            let mwhSold = energyCapacity / ((60 / intervalMin) * chargeTime)
            let rand = randomRange(0.01, 0.05)
            if (Math.random() < 0.5) {
                rand * -1
            }
            mwhSold = Math.min(mwhSold + (mwhSold * rand), currentMwh)
            const v = mwhSold * mwhSellRate
            if (currenthour >= start && currenthour < end) {
                if (currentMwh > 0) {
                    currentMwh -= mwhSold
                    totalSold += v;
                    dataItem.sellKwh = v;
                    dataItem.currentMwh = currentMwh;
                    dataItem.mwhSold = mwhSold;
                    if (current.isBefore(now)) {
                        totalSoldPast += v
                    }
                }

            }

            if (now15.isSame(current)) {
                currentSoc = currentMwh / energyCapacity
                currentStateMwh = currentMwh
            }

        });

        // if (currenthour >= sellHourStart && currenthour < sellHourEnd) {
        //   dataItem.forecastBuyKwh = randomIntFromInterval(12, 13) * 0.05372;
        // }
        data.push(dataItem);
        current.add(intervalMin, "m");
    }
    const x = {
        chartData: data,
        totalBought,
        totalBoughtPast,
        totalSoldPast,
        totalSold,
        currentMwh,
        currentSoc,
        currentStateMwh
    }

    return x
};


const BatteryDashboard = () => {
    const data = generateDemoData()
    const end = moment().endOf("d").add(1,"m")
    const start = end.clone().subtract(24, "h") || "2021-06-01"
    const x = generateChargeDischargeDemoData(start,end)
    var offset = moment().utcOffset();
    let UTC = moment.utc()
    let local = moment(UTC).local()
    let localStart = moment(start).local()
    let localEnd = moment(end).local()
    console.log("DATA", x)



    return <Row gutter={[16, 16]} style={{padding: '0 30px'}}>
        <Col span={6}>
            <CurrentState data={x}/>
        </Col>
        <Col span={18}>
            <EnergyMonitoring data={x}/>
        </Col>
    </Row>

}
export default BatteryDashboard