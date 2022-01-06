import { useState, useEffect } from "react";
import UserForm from "../components/UserForm";
import { useParams } from "react-router-dom";

import api from "../api/users";

const EditUser = () => {
    const [user, setUser] = useState([]);
    const [isLoad, setIsLoad] = useState("idle");
    

    const { id } = useParams();
    useEffect(() => {
        
        const fetchUser = async () => {
            
            try {
                setIsLoad("loading")
                const response = await api.get(`/users/${id}`);
                if (response && response.data) {
                    setUser(response.data);
                    setIsLoad("loaded")
                }
            } catch (err) {
                //error hanling
                setIsLoad("error")
                if (err.response) {
                    console.log(err.response.status);
                    console.log(err.response.data);
                } else {
                    console.log(`Error: ${err.message}`);
                }
            }
        };
        
        fetchUser();
        
        
    }, []);

    
    return (
        <div className='main-panel'>
            <div className='content-wrapper'>
                <div className='row'>
                    {isLoad === "loaded" && <UserForm
                        title={`Edit User ${user.full_name}`}
                        user={{
                            id:user.id,
                            full_name: user.full_name,
                            address: user.address,
                            gender: user.gender,
                            mobile: user.mobile,
                            email: user.email,
                            job: user.job,
                            salary: user.salary,
                        }}
                        
                    />}
                    
                    
                </div>
            </div>
        </div>
    );
};

export default EditUser;
