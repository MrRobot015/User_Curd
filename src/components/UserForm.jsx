import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/users";

const UserForm = ({ title, user }) => {
    const navigate = useNavigate();

    const [formValues, setFormValue] = useState(user);

    const handelChange = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValues, [name]: value });
    };

    const hanelSubmit = async (e) => {
        e.preventDefault();
        try {
            if (user.id == 0) {
                const response = await api.post("/users", formValues);
            } else {
                const response = await api.put(`/users/${user.id}`, formValues);
            }
            navigate("../", { replace: true });
        } catch (err) {
            //error hanling
            if (err.response) {
                console.log(err.response.status);
                console.log(err.response.data);
            } else {
                window.alert(`Error: ${err.message}`);
            }
        }
    };

    return (
        <div className='col-12 grid-margin stretch-card'>
            <div className='card'>
                <div className='card-body'>
                    <h4 className='card-title'>{title}</h4>

                    <form className='forms-sample' onSubmit={hanelSubmit}>
                        <div className='form-group'>
                            <label htmlFor='exampleInputName1'>Name</label>
                            <input
                                type='text'
                                required
                                name='full_name'
                                value={formValues.full_name}
                                className='form-control'
                                id='exampleInputName1'
                                placeholder='Name'
                                onChange={handelChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='exampleInputName15'>Phone number</label>
                            <input
                                type='text'
                                required
                                name='mobile'
                                value={formValues.mobile}
                                className='form-control'
                                id='exampleInputName15'
                                placeholder='+249'
                                onChange={handelChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='exampleInputEmail3'>Email address</label>
                            <input
                                type='email'
                                required
                                name='email'
                                value={formValues.email}
                                className='form-control'
                                id='exampleInputEmail3'
                                placeholder='Email'
                                onChange={handelChange}
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='exampleSelectGender'>Gender</label>
                            <select
                                name='gender'
                                className='form-control'
                                value={formValues.gender}
                                id='exampleSelectGender'
                                onChange={handelChange}
                            >
                                <option value='Male'>Male</option>
                                <option value='Female'>Female</option>
                            </select>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='exampleInputCity1'>Address</label>
                            <input
                                type='text'
                                name='address'
                                value={formValues.address}
                                className='form-control'
                                id='exampleInputCity1'
                                placeholder='Location,Uk'
                                onChange={handelChange}
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='exampleInputName1'>Job</label>
                            <input
                                type='text'
                                name='job'
                                value={formValues.job}
                                className='form-control'
                                id='exampleInputName1'
                                placeholder='Software developer'
                                onChange={handelChange}
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='exampleInputName1'>Salary</label>
                            <input
                                type='number'
                                name='salary'
                                value={formValues.salary}
                                className='form-control'
                                id='exampleInputName1'
                                placeholder='0'
                                onChange={handelChange}
                            />
                        </div>

                        <button type='submit' className='btn btn-primary mr-2'>
                            Submit
                        </button>

                        <Link to='/'>
                            <button className='btn btn-light'>Cancel</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserForm;
