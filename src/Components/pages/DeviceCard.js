import { Link } from 'react-router-dom';
function DeviceCard(props) {
    const { device } = props;
    return (
        <>
            <div className="col-md-4 mb-3">
                <div className="card d-flex" id="card">
                    <Link to={`/getsingledata/${device.deviceId}`}>
                        <div className="card-body ">
                            <div className="d-inline-flex">
                                <h5 className="card-title me-5">{device.deviceName}</h5>
                                {device.deviceStatus === "Live" ?
                                    <p className="btn btn-success" id="status">{device.deviceStatus}</p>
                                    :
                                    <p className="btn btn-danger" id="status">{device.deviceStatus}</p>
                                }
                            </div>
                            <h6 className="card-subtitle text-muted text-start">{device.deviceId}</h6>
                        </div>
                    </Link>
                </div>
            </div>

        </>
    );
}

export default DeviceCard;