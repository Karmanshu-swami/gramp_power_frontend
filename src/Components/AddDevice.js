import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "./Header";

function AddDevice() {
    const [deviceName, setdeviceName] = useState('')
    const [deviceId, setdeviceId] = useState('')
    const [deviceStatus, setdeviceStatus] = useState('')
    const [message, setmessage] = useState('')
    const bodydata = { deviceName, deviceId };
    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault(e);
        fetch("/adddevice", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bodydata)
        })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                // console.log(data);
                if (data.deviceId) {
                    navigate('/dashboard')
                } else {
                    setmessage("Something went wrong!")
                }
            })
    }
    return (
        <>
            <Header />
            <div className="container bg-light">
                <div className="row justify-content-center mt-5">
                    <div className="col-md-6 align-center">
                        <h3 className="mt-2 mb-4">Register the new device here!</h3>
                        <h4 className="mt-1 text-danger">{message}</h4>
                        <form method="post" onSubmit={(e) => { handleSubmit(e) }}>
                            <div class="mb-3">
                                <label class="form-label">Device Name</label>
                                <input type="text"
                                    value={deviceName}
                                    onChange={(e) => { setdeviceName(e.target.value) }}
                                    class="form-control" placeholder="Enter Device Name" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Device Id</label>
                                <input type="text"
                                    value={deviceId}
                                    onChange={(e) => { setdeviceId(e.target.value) }}
                                    class="form-control" placeholder="Enter Device Id" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Device Status</label>
                                <input type="text"
                                    value={deviceStatus}
                                    onChange={(e) => { setdeviceStatus(e.target.value) }}
                                    class="form-control" placeholder="Enter Device Status : Live or Down" />
                            </div>
                            <button type="submit" class="btn btn-primary mb-4">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddDevice;