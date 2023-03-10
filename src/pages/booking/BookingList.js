import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { axiosReq } from "../../api/axiosDefaults";
import BookingDetail from "../booking/BookingDetail";
import styles from '../../styles/BookingCreateEditForm.module.css'
import appStyles from '../../App.module.css'
import loader from '../../assets/loading.gif'
import { useRedirect } from "../../hooks/useRedirect";

function BookingList({ filter, message }) {
    useRedirect('loggedOut')
    const [query, setQuery] = useState('');
    const [booking, setBooking] = useState({results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);

    const handleQueryChange = (event) => {
        setQuery(event.target.value)
        setHasLoaded(false)
      };

    useEffect(() => { 
        const fetchBookings = async () => {
            try{
                const {data} = await axiosReq.get(`/bookings/?${filter}&search=${query}`)
                setBooking(data)
                setHasLoaded(true)
            }catch(error){
                console.log(error)
            }
        }
        fetchBookings()
    },[filter, query])

    return (
    <Row className="h-100">
        <Col className="py-2 p-3 p-lg-6" lg={8}>
        <Form.Group>
                    <div className={`${styles.label} "d-sm"`}>Select date to filter</div>
                    <Form.Control
                        className={styles.input}
                        type="date"
                        name="filter"
                        required
                        value={query}
                        onChange={handleQueryChange}
                        />
                </Form.Group>
            {hasLoaded ? (
                <>
                    {booking.results.length ? (
                        booking.results.map((book) => (
                            <BookingDetail key={book.id} {...book} />
                        ))
                    ): (
                        <Card>
                            <Card.Body className="d-flex justify-content-center align-items-top m-0 p-2">
                                <h5>{message}</h5>
                            </Card.Body>
                        </Card>
                    )}
                </>
            ) : (
                <Container className={appStyles.Container}>
                    <img src={loader} className="d-flex m-auto" alt="Loading"></img>
                </Container>
            )}
        </Col>
    </Row>
    )
}

export default BookingList;