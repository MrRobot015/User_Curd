import { useState, useEffect } from "react";
import UserForm from "../components/UserForm";
import { useParams } from "react-router-dom";

import api from "../api/users";

const EditUser = () => {
    const [user, setUser] = useState([]);
    const [isLoad, setIsLoad] = useState(true);
    

    const { id } = useParams();
    useEffect(() => {
        
        const fetchUser = async () => {
            
            try {
                setIsLoad(false)
                const response = await api.get(`/users/${id}`);
                if (response && response.data) {
                    setUser(response.data);
                    
                }
            } catch (err) {
                //error hanling
                if (err.response) {
                    console.log(err.response.status);
                    console.log(err.response.data);
                } else {
                    console.log(`Error: ${err.message}`);
                }
            }finally{
                setIsLoad(true)
            }
        };
        
        fetchUser();
        
        
    }, []);

    
    return (
        <div className='main-panel'>
            <div className='content-wrapper'>
                <div className='row'>
                    {isLoad && <UserForm
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
