import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom"
import { LoginContext } from '../LoginContext';
function Login() {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [message, setmessage] = useState("")
    const { setuserName, setuserLoginStatus } = useContext(LoginContext)
    const navigate = useNavigate()
    function handleSubmit(e) {
        e.preventDefault(e)
        // console.log(username, password);
        const bodydata = { username, password }
        fetch("/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bodydata)
        })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                if (data.username) {
                    // console.log(data);
                    localStorage.setItem('userName', data.username);
                    setuserName(localStorage.getItem('userName'));
                    localStorage.setItem('userLoginStatus', '1');
                    setuserLoginStatus(localStorage.getItem('userLoginStatus'));
                    navigate("/dashboard");
                } else {
                    setmessage("Please enter the correct credentials!");
                }
            })
    }
    return (
        <>
            <div className="container mt-5 bg-light">
                <div className="row pt-5 text-center">
                    <div className="col-md-12">
                        <h2>Login Here</h2>
                        <span className='text-danger'>{message}</span>
                    </div>
                </div>
                <div className="row p-3">
                    <div className="col-md-12">

                        <form method="post" onSubmit={(e) => { handleSubmit(e) }}>
                            <div className="mb-3">
                                <h5><label htmlFor="username" className="form-label">Username</label></h5>
                                <input type="text"
                                    value={username}
                                    onChange={(e) => { setusername(e.target.value) }}
                                    className="form-control" id="username" aria-describedby="username" placeholder="Enter your username" />
                                <div id="name" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <h5><label htmlFor="password" className="form-label">Password</label></h5>
                                <input type="password"
                                    value={password}
                                    onChange={(e) => { setpassword(e.target.value) }}
                                    className="form-control" id="password" placeholder="Enter your password" />
                            </div>
                            <button type="submit" className="btn btn-primary form-control">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;