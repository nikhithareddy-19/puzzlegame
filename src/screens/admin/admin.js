import { db, auth } from "../../firebase-config.js";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect, useCallback } from "react";
import "./admin.css";
import { useNavigate } from "react-router-dom";


function Admin(params) {
    const navigate = useNavigate();
    const [refresh, setRefresh] = useState(false);
    const [users, setUsers] = useState([]);
    const userCollectionRef = collection(db, "users");

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(userCollectionRef);

            setUsers(data.docs.map((doc) => ({ ...doc.data() })));
            console.log(data.docs[1].data());
        };
        getUsers();
    }, [refresh]);

    return <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <h1 style={{ padding: "15px" }}>EMAIL ID</h1>
            <h1 style={{ padding: "15px" }}>Puzzle</h1>
            <h1 style={{ padding: "15px" }}>DORA</h1>
        </div>
        {
            users.map((user) => {
                return <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <h2 style={{ padding: "15px" }}>{user.email}</h2>
                    <h2 style={{ padding: "15px" }}>{user.level === "puzzle" ? "NO" : "YES"}</h2>
                    <h2 style={{ padding: "15px" }}>{user.completed? "YES" : "NO"}</h2>
                </div>;
            })
        }

    </div>
}

export default Admin;