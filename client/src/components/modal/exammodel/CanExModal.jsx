import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
// import { MDBCol } from 'mdb-react-ui-kit';
import "../../../style.css";
import axios from 'axios';

export default function CanExModal(props) {
    // const [exam_schedules, setexamSchedules] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onDelete = (eScheduleID, e) => {
        e.preventDefault();
        axios.delete(`http://localhost:5000/api/exam_schedules/deleteexam/${eScheduleID}`)
            .then(res => console.log("Deleted", res)).catch(err => console.log(err))

    };

    return (
        <>
            <Button className='btn-danger me-2' onClick={handleShow}>
                Cancel
            </Button>

            <Modal show={show}
                size="lg"
                centered
            >
                <Modal.Header>

                    <Modal.Title id="contained-modal-title-vcenter">Delete Exam Schedule</Modal.Title>

                </Modal.Header>
                <Modal.Body>


                    <Form >

                        <fieldset>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                <Col sm={2}>
                                    <Form.Label>
                                        Grade:

                                    </Form.Label>
                                </Col>
                                <Col sm={10}>
                                    <input type="text" value={props.cangrade} className="Col-3" aria-label="Default select example" style={{ height: "35px", width: "40%" }} disabled />
                                </Col>

                            </Form.Group>
                        </fieldset>

                        <fieldset>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                <Col sm={2}>
                                    <Form.Label>
                                        Subject
                                    </Form.Label>
                                </Col>
                                <Col sm={10}>
                                    <input type="text" value={props.cansub} className="Col-3" aria-label="Default select example" style={{ height: "35px", width: "40%" }} disabled />
                                </Col>

                            </Form.Group>
                        </fieldset>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Date
                            </Form.Label>
                            <Col sm="5">
                                <Form.Control type="date" value={props.candate} disabled />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Time
                            </Form.Label>
                            <Col sm="5">
                                <Form.Control type="time" value={props.cantime} disabled />
                            </Col>
                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={(e) => { onDelete(props.eid, e) }}>
                        Delete Schedule
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Exit
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}
