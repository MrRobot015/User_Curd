import Table from "../components/Table";
import api from "../api/users";
import { useEffect, useState } from "react";

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await api.get("/users");
                if (response && response.data) {
                    setUsers(response.data);
                }
            } catch (err) {
                //error hanling
                if (err.response) {
                    console.log(err.response.status);
                    console.log(err.response.data);
                } else {
                    console.log(`Error: ${err.message}`);
                }
            }
            setLoading(false)
        };

        fetchUsers();
    }, [loading]);

    return (
        <div className='content-wrapper'>
            <div className='row'>
                <div className='col-lg-12 grid-margin stretch-card'>
                    <Table
                        attributes={[
                            "full_name",
                            "address",
                            "gender",
                            "mobile",
                            "email",
                            "job",
                            "salary",
                        ]}
                        records={users}
                        setLoading = {setLoading}
                    />
                </div>
            </div>
        </div>
    );
};

export default AllUsers;
