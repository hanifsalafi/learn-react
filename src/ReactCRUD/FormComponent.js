import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'

const FormComponent = ({id, name, price, description, handleChange, handleSubmit}) => {
    return (
        <div className="mt-3">
            <Row>
                <Col>
                    <h4>{id ? "Edit Data" : "Tambah Data"} Pakaian</h4>
                    <hr/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col>
                                <Form.Group controlId="formName" className="mt-2">
                                    <Form.Label>Nama</Form.Label>
                                    <Form.Control type="text" name="name" placeholder="Masukkan nama pakaian" value={name} onChange={(event) => handleChange(event)} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formPrice" className="mt-2">
                                    <Form.Label>Harga</Form.Label>
                                    <Form.Control type="number" name="price" placeholder="Masukkan harga pakaian" value={price} onChange={(event) => handleChange(event)} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group controlId="formDescription" className="mt-2">
                            <Form.Label>Deskripsi</Form.Label>
                            <Form.Control as="textarea" name="description" placeholder="Masukkan deskripsi pakaian" rows={3} value={description} onChange={(event) => handleChange(event)}/>
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mt-2">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default FormComponent
