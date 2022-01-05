import React from "react";
import { Link } from "react-router-dom";
import api from "../api/users";

const Table = ({ attributes, records, setLoading }) => {
    return (
        <div className='table table-striped'>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        {attributes.map((attribute) => (
                            <th>{attribute}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {records.map((record) => (
                        <tr key={record.id}>
                            <td>{record.full_name}</td>
                            <td>{record.address}</td>
                            <td>{record.gender}</td>
                            <td>{record.mobile}</td>
                            <td>{record.email}</td>
                            <td>{record.job}</td>
                            <td>{record.salary}</td>
                            <td>
                                <Link to={`/user/${record.id}/`}>
                                    <button className='btn btn-md btn-primary mr-2'>View</button>
                                </Link>
                            </td>
                            <td>
                                <Link to={`/user/${record.id}/edit`}>
                                    <button className='btn btn-md btn-primary mr-2'>edit</button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
