import React from 'react'
import { Table, Button } from 'react-bootstrap'
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

const TableComponent = ({ listPakaian, editData, deleteData }) => {
    return (
        <Table striped bordered hover variant="dark" className="mt-5">
            <thead>
                <tr>
                <th>#</th>
                <th>Nama</th>
                <th>Harga</th>
                <th>Deskripsi</th>
                <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                {listPakaian.map((pakaian, index) => {
                    return (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{pakaian.name}</td>
                            <td>{pakaian.price}</td>
                            <td>{pakaian.description}</td>
                            <td>
                                <Button variant="success" className="mr-2" onClick={() => editData(pakaian.id)}><FaPencilAlt /></Button>{' '}
                                <Button variant="danger" onClick={() => deleteData(pakaian.id)}><FaTrashAlt /></Button>{' '}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    )
}

export default TableComponent
