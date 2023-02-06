import { useEffect, useState } from "react";
import '../styles/userList.css'

const UserList = () => {
    let [user, setUser] = useState([])
    useEffect(() => {
        let fetchdata = async () => {
            let responce = await fetch('http://localhost:4000/users')
            let data = await responce.json()
            setUser(data)
        }
        fetchdata()
    }, [])

    let handleRemove = (id, name) => {
        setUser(user.filter(x => x.id !== id))
        alert(`${name} has been removed`)
    }
    return (
        <div className="userlist">
            <h1>USER LIST</h1>
            <div className="user_section">
                {user.map(data => (
                    <div className="user_id">
                        <h1>Nmae:{data.name}</h1>
                        <h3>Age:{data.age}</h3>
                        <h3>Email:{data.email}</h3>
                        <h3>Phone:{data.phoneNumber}</h3>
                        <button onClick={() => handleRemove(data.id, data.name)}>DELETE</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserList;