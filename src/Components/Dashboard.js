import { useState, useEffect } from 'react';
import Header from './Header';
import DeviceCard from './pages/DeviceCard';

function Dashboard() {
    const [devicedata, setdevicedata] = useState([]);
    const [totalactivedevices, settotalactivedevices] = useState("");
    const [totaldowndevices, settotaldowndevices] = useState("");
    const [totaldevices, settotaldevices] = useState("");
    useEffect(() => {
        fetch('/getdevicesdata')
            .then((res) => { return res.json() })
            .then((data) => {
                // console.log(data);
                settotaldevices(data.devicerec.length)
                settotalactivedevices(data.activedevicerec)
                settotaldowndevices(data.devicerec.length - data.activedevicerec)
                setdevicedata(data.devicerec)
            })
    }, [])

    return (
        <>
            <Header />
            <div className="container mt-5">
                <div className="row ms-5" style={{ height: "30px" }}>
                    <div className="col-md-4" >
                        <h5 className="bg-light p-2">Registered Devices List : {totaldevices}</h5>
                    </div>
                    <div className="col-md-4" >
                        <h5 className="bg-light p-2">Total Active Devices : {totalactivedevices}</h5>
                    </div>
                    <div className="col-md-4" >
                        <h5 className="bg-light p-2">Total Down Devices : {totaldowndevices}</h5>
                    </div>
                </div>
                <section id="cardid">
                    <div className="row ms-5 mt-5">
                        {devicedata.map((results) => (
                            <DeviceCard device={results} key={results._id} />
                        ))}
                    </div>
                </section>

            </div>
        </>
    );
}

export default Dashboard;