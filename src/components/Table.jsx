import React from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const Table = ({ attributes, records }) => {
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
                                <button className='btn btn-primary mr-2'>edit</button>
                            </td>
                            <td>
                                <div style={{cursor:"pointer"}}>
                                    <DeleteOutlineOutlinedIcon style={{ color: "red" }} />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
