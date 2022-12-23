import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import LineChart from "./LineChart";

function GetSingleData() {
    const { dId } = useParams()
    const [deviceId, setdeviceId] = useState('')
    const [deviceName, setdeviceName] = useState('')
    const [deviceStatus, setdeviceStatus] = useState('')
    const [devicelastdpoint, setdevicelastdpoint] = useState('')
    const [avgCurrent, setavgCurrent] = useState('')
    const [avgVoltage, setavgVoltage] = useState('')
    const [TotalConsumption, setTotalConsumption] = useState('')
    const [deviceCurrent, setdeviceCurrent] = useState(Math.random() * 100)
    const [deviceVoltage, setdeviceVoltage] = useState(Math.random() * 100)
    const [deviceConsumption, setdeviceConsumption] = useState(Math.random() * 100)

    useEffect(() => {
        fetch(`/getsingledata/${dId}`)
            .then((res) => { return res.json() })
            .then((ddata) => {
                // console.log(ddata);
                setdeviceId(ddata.devicefinaldata["deviceId"]);
                setdeviceName(ddata.devicefinaldata["deviceName"]);
                setdeviceStatus(ddata.devicefinaldata["deviceStatus"]);
                setdevicelastdpoint(ddata.devicefinaldata["lastDataPoint"]);
                setavgCurrent(ddata.totalvalues["avgcurrent"]);
                setavgVoltage(ddata.totalvalues["avgvoltage"]);
                setTotalConsumption(ddata.totalvalues["totalConsumption"]);
            })
    }, [dId])

    function handleRefresh(e) {
        setdeviceCurrent(Math.random() * 100)
        setdeviceVoltage(Math.random() * 100)
        setdeviceConsumption(Math.random() * 100)
        const bodydata = { deviceCurrent, deviceVoltage, deviceConsumption, dId }

        fetch("/adddevicedetail", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bodydata)
        })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                if (data.deviceId) {
                    window.location.reload(false);
                }
            })
    }
    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5">
                        <table className="table border">
                            <tr>
                                <th>Device Id : </th>
                                <td>{deviceId}</td>
                            </tr>
                            <tr>
                                <th>Device Name : </th>
                                <td>{deviceName}</td>
                            </tr>
                        </table>
                    </div>
                    <div className="col-md-6 mt-5">
                        <table className="table border">
                            <tr>
                                <th>Device Status : </th>
                                <td>{deviceStatus}</td>
                            </tr>
                            <tr>
                                <th>Last Data Point</th>
                                <td>{devicelastdpoint}</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-3 " id="card-device">
                        <div className="card d-flex" >
                            <div className="card-body ">
                                <div className="d-inline-flex">
                                    <h4 className="card-title">Average Current</h4>
                                </div>
                                <h6 className="card-subtitle text-muted text-start">{avgCurrent} AMP</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 " id="card-device">
                        <div className="card d-flex" >
                            <div className="card-body ">
                                <div className="d-inline-flex">
                                    <h4 className="card-title">Average Voltage</h4>
                                </div>
                                <h6 className="card-subtitle text-muted text-start">{avgVoltage} AMP</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 " id="card-device">
                        <div className="card d-flex" >
                            <div className="card-body ">
                                <div className="d-inline-flex">
                                    <h4 className="card-title">Total Consumption</h4>
                                </div>
                                <h6 className="card-subtitle text-muted text-start">{TotalConsumption} AMP</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3" id="card-device">
                        <div className="d-flex pt-4" >
                            <button type="submit" onClick={(e) => { handleRefresh(e) }} className="btn btn-outline-primary">Refresh Data</button>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-12">
                        <h2>Line Graph</h2>
                        <LineChart />
                    </div>
                </div>
            </div>
        </>
    );
}

export default GetSingleData;