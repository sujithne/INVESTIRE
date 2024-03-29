import React, { useState } from 'react';
import { Form, Button, InputGroup} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';

const CreditCardForm = (props) => {
    const { investor, handleCheckout, setCheckOut, setPaymentStatus} = props
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState('');
    const [send, setSend] = useState("Pay");
    const [verify, setVerify] = useState("Verify");
    const [otp2, setotp2] = useState("");
    const handleChange2 = e => {
        setotp2(e.target.value)
    }
    const handleOtp = async (e) => {
        e.preventDefault();
        setSend("Sending...")
        try {
            const response = await fetch('http://52.207.171.26:8081/generate-otp?user=' + investor, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },

            });
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.indexOf('application/json') !== -1) {
                const json = await response.json();
                if (json.message != 'Fail') {
                    setOtp(json.message);
                    setSend("Sent")
                    setMessage('OTP sent to your email address. Please enter it below.');
                }
                else {
                    setSend("Resend");
                    setMessage("")
                }

            }

        } catch (error) {
            console.log(error);
        }
    };

    const handleVerify = async () => {

        if (otp == otp2) {
            handleCheckout();
        }
        else {
            setPaymentStatus("failure");
        }
        setCheckOut(false);
    };

    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [expiryMonth, setExpiryMonth] = useState('');
    const [expiryYear, setExpiryYear] = useState('');
    const [cvv, setCvv] = useState('');
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    const fillConstraint = (
        cardNumber == "" || !/^([0-9]{16})$/.test(cardNumber) ||
        cardName == "" ||
        expiryMonth == "" || !/^(0?[1-9]|1[0-2])$/.test(expiryMonth) ||
        expiryYear == "" || !/^([0-9]{4})$/.test(expiryYear) ||
        cvv == "" || !/^([0-9]{3})$/.test(cvv) )

    return (
        <div style={{textAlign:"left"}} noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="cardNumber">
                <Form.Label style={{ fontSize: "20px" }}>Card Number</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter card number"
                    value={cardNumber}
                    onChange={(event) => setCardNumber(event.target.value)}
                    required
                    pattern="/[0-9]{16}/"
                />
                <Form.Control.Feedback type="invalid">
                    Please provide a valid 16-digit card number.
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="cardName">
                <Form.Label style={{ fontSize: "20px" }}>Cardholder Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter cardholder name"
                    value={cardName}
                    onChange={(event) => setCardName(event.target.value)}
                    required
                />
                <Form.Control.Feedback type="invalid">
                    Please provide a valid cardholder name.
                </Form.Control.Feedback>
            </Form.Group>

            <Row>
                <Form.Group controlId="expiryMonth" className="col-md-6">
                    <Form.Label style={{ fontSize: "20px" }}>Expiry Month</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="MM"
                        value={expiryMonth}
                        onChange={(event) => setExpiryMonth(event.target.value)}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid 2-digit month (01-12).
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="expiryYear" className="col-md-6">
                    <Form.Label style={{ fontSize: "20px" }}>Expiry Year</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="YYYY"
                        value={expiryYear}
                        onChange={(event) => setExpiryYear(event.target.value)}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid 4-digit year.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>

            <Row style={{ flex:1 }}>
                <Form.Group controlId="cvv" style={{ width: "50%"}}>
                <Form.Label style={{ fontSize: "20px" }}>CVV</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter CVV"
                    value={cvv}
                    onChange={(event) => setCvv(event.target.value)}
                    required
                />
                <Form.Control.Feedback type="invalid">
                    Please provide a valid 3 or 4-digit CVV.
                </Form.Control.Feedback>
            </Form.Group>

                <Button disabled={fillConstraint} variant="primary" onClick={handleOtp} style={{ width: "50%", marginTop: "40px", height: "60px" }}>
                    {send}
                </Button>
                {message && <div className="mb-3">
                    <p style={{ color: "red" }}>{}</p>
                    <div class="buttonIn">
                        <InputGroup>
                            <input
                                style={{ width: "70%" }}
                                className="form-control"
                                placeholder={message}
                                onChange={handleChange2}
                                name="otp"
                            />
                <Button style={{ width: "30%" }} onClick={handleVerify}>{verify}</Button>
                 </InputGroup></div> </div>}
             </Row>
        </div>
    );
};

export default CreditCardForm