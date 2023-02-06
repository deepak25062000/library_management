import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/adduser.css'

const AddUsers = () => {
    let [name, setName] = useState("")
    let [age, setAge] = useState("")
    let [email, setEmail] = useState("")
    let [phone, setPhone] = useState("")

    let navigate = useNavigate()
    let handleSubmit = (e) => {
        e.preventDefault()

        let userData = { name, age, email, phone }

        //posting to server
        fetch('  http://localhost:4000/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        })
        alert('user added succefully')
        navigate('/admin/user-list/')

    }
    return (
        <div className="contaier">
            <div className="addusers">
                <h1>welcome to adduser</h1>

                <div className="form">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="">
                            <input type="text" placeholder=" enter Name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="">
                            <input min="1" type="number" placeholder=" enter age" value={age} onChange={(e) => setAge(e.target.value)} />
                        </div>
                        <div className="">
                            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="">
                            <input minLength="10" maxLength="10" type="tnumber" placeholder="phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <button>Add User</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddUsers;