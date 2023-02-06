
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/adminlogin.css'
const AdminLogin = () => {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let Navigate = useNavigate()


    let login = (e) => {
        e.preventDefault()
        let data = { email, password }
        if (email == "admin@gmail.com" && password == "0000") {
            Navigate('/admin/')
        } else {
            alert('invalid credentials')
        }


    }

    return (
        <div className="adminLogin">
            <div className="form_container_card">
                <h1>Login as Admin</h1>
                <div className="form_input">
                    <form onSubmit={login}>
                        <div className="email">
                            <img src="images/smalluser.png" alt="" />
                            <input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="password">
                            <img src="images/security.jpg" alt="" />
                            <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="btn1">
                            <button className="btn_btn_primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default AdminLogin;