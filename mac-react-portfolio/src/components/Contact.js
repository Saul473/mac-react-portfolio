import Form from 'react-bootstrap/Form';

function ContactForm() {
  return (
    <Form>
    <h1>
        Contact Me!
    </h1> 
    <br />
      <Form.Group className="mb-3" controlId="formGroupName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPhoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="phoneNumber" placeholder="Enter phone number" />
      </Form.Group>
    </Form>
  );
}

export default ContactForm;