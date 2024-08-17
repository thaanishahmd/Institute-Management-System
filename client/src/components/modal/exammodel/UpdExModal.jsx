import React from 'react'
import { Col, Row, Form } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';

export default function UpdExModal(props) {
    const [show, setShow] = useState(false);
    const [exam_schedules, setexamSchedules] = useState([]);
    const EsID = props.eid;
    const [grade, setGrade] = useState("");
    const [subject, setSubject] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    // function updateSchedule(){
    //     let item = {grade, subject, date, time}
    //     console.warn("item", item)
    // }
    const scheduleData = {
        grade,
        subject,
        date,
        time
    }

    const onUpdate = () => {
        axios.put('http://localhost:5000/api/exam_schedules/updateexam/' + EsID, scheduleData)
            .then(res => {
                // setGrade('')
                // setSubject('')
                // setDate('')
                // setTime('')
                setShow(false)
            })
            .catch(function(error){ 
                console.log(error);
            });


    };


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button className='btn-success me-2' onClick={handleShow}>
                Edit
            </Button>

            <Modal show={show}
                size="lg"
                centered
            >
                <Modal.Header>

                    <Modal.Title id="contained-modal-title-vcenter">Update Exam Schedule</Modal.Title>

                </Modal.Header>
                <Modal.Body>


                    <Form>

                        <fieldset>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                <Col sm={2}>
                                    <Form.Label>
                                        Grade:
                                    </Form.Label>
                                </Col>
                                <Col sm={10}>
                                    <select className="Col-3" aria-label="Default select example" style={{ height: "35px", width: "40%" }} onChange={(e) => { setGrade(e.target.value) }}>
                                        <option selected>{props.updgrade}</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                    </select>
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
                                    <select className="Col-3" aria-label="Default select example" style={{ height: "35px", width: "40%" }} onChange={(e) => { setSubject(e.target.value) }}>
                                        <option selected>{props.updsub}</option>
                                        <option value="English">English</option>
                                        <option value="Maths">Maths</option>
                                        <option value="ICT">ICT</option>
                                    </select>
                                </Col>

                            </Form.Group>
                        </fieldset>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Date
                            </Form.Label>
                            <Col sm="5">
                                <Form.Control type="date" value={props.upddate} onChange={(e) => { setDate(e.target.value) }} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Time
                            </Form.Label>
                            <Col sm="5">
                                <Form.Control type="time" value={props.updtime} onChange={(e) => { setTime(e.target.value) }} />
                            </Col>
                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={(e) => onUpdate()}>
                        Update Schedule
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Exit
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}
