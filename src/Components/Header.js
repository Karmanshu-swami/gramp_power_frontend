import { LoginContext } from '../LoginContext'
import { useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
function Header() {
    const navigate = useNavigate()
    const { userName, setuserName, setuserLoginStatus } = useContext(LoginContext)

    function handleLogout() {
        setuserName(localStorage.removeItem('userName'))
        setuserLoginStatus(localStorage.removeItem('userLoginStatus'))
        navigate('/')
    }
    return (
        <>
            <div className='row bg-light mb-2'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/dashboard">Hello {userName}</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/dashboard">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/adddevice">Add Device</Link>
                                </li>
                            </ul>
                            <div className="d-flex">
                                <button onClick={handleLogout} className="btn btn-primary" type="submit">Logout</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Header;