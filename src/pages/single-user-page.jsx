import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    

} from "@mui/icons-material";

import {useNavigate,useParams } from "react-router-dom";
import "./user.css";
import { useEffect, useState } from "react";
import api from "../api/users"


export default function User() {

    const [user ,setUser] = useState([])
    const navigate = useNavigate()
    const {id}=useParams()

    useEffect(() => {
        const fetchUsers = async () => {
            try {
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
            }
            
        };

        fetchUsers();
    }, []);

    const handleDelete = async () => {
        window.alert(`delete ${user.full_name}`)
        try{
            await api.delete(`/users/${user.id}`)
            navigate("/" ,{replace:true})

        }catch(err){
            if (err.response) {
                console.log(err.response.status);
                console.log(err.response.data);
            } else {
                console.log(`Error: ${err.message}`);
            }
        }
        
    }

    
    return (
        <div className='user'>
            <div className='userTitleContainer'>
                <h1 className='userTitle'>User Account</h1>
            </div>
            <div className='userContainer'>
                <div className='userShow'>
                    <div className='userShowTop'>
                        <img
                            src='data:image/png;base64,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'
                            alt=''
                            className='userShowImg'
                        />
                        <div className='userShowTopTitle'>
                            <span className='userShowUsername'>{user.full_name} </span>
                            <span className='userShowUserTitle'>{user.job}</span>
                        </div>
                    </div>
                    <div className='userShowBottom'>
                        <span className='userShowTitle'>Account Details</span>
                        <div className='userShowInfo'>
                            <PermIdentity className='userShowIcon' />
                            <span className='userShowInfoTitle'>{user.full_name}</span>
                        </div>
                        <div className='userShowInfo'>
                            <CalendarToday className='userShowIcon' />
                            <span className='userShowInfoTitle'>10.12.1999</span>
                        </div>
                        <span className='userShowTitle'>Contact Details</span>
                        <div className='userShowInfo'>
                            <PhoneAndroid className='userShowIcon' />
                            <span className='userShowInfoTitle'>{user.mobile}</span>
                        </div>
                        <div className='userShowInfo'>
                            <MailOutline className='userShowIcon' />
                            <span className='userShowInfoTitle'>{user.email}</span>
                        </div>
                        <div className='userShowInfo'>
                            <LocationSearching className='userShowIcon' />
                            <span className='userShowInfoTitle'>{user.address}</span>
                        </div>
                        
                            <button className='btn btn-danger mr-2' onClick={handleDelete}>Delete</button>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
