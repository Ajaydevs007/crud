import React, { useContext, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import { Productdetails } from '../contextapi/ContextApi';
import Add from '../Components/Add';
import Edit from '../Components/Edit';







function Home() {

    const { storeproducts, setproductdetails } = useContext(Productdetails)

    const handledelete = (id) => {

        const res = storeproducts.filter((item) => item.id !== id)
        setproductdetails(res)

    }

    const [searchTerm, setSearchTerm] = useState("");

    // Filter products based on search input
    const filteredProducts = storeproducts.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    


    return (
        <>

            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Form className="d-flex"> <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" onChange={(e)=>setSearchTerm(e.target.value)}/>
                            {/* <Button variant="outline-success">Search</Button> */}
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="container-fluid d-flex justify-content-center align-items-center">
                <div className='my-5'>
                    <Add />
                </div>
            </div>

            <div className="container-fluid">

                <div className='my-5' style={{backgroundColor:"wheat"}}>

                    <Row>

                        {
                            filteredProducts.length > 0 ?
                                filteredProducts.map((item) => (

                                    <Col sm={12} md={3} className="d-flex justify-content-center align-items-center mb-3">
                                        <Card style={{ width: "100%", maxWidth: "250px", height: "400px" }}>
                                            <Card.Img
                                                variant="top"
                                                src={item?.image}
                                                style={{ width: "100%", height: "180px", objectFit: "contain", padding: "10px" }}
                                            />
                                            <Card.Body>
                                                <Card.Title style={{ fontSize: "14px", fontWeight: "bold" }}>{item?.title}</Card.Title>
                                                <Card.Text style={{ fontSize: "12px" }}>
                                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                                </Card.Text>
                                                <Row>
                                                    <Col>
                                                        <button className='btn' onClick={() => handledelete(item.id)}>
                                                            <i className="fa-solid fa-trash" />
                                                        </button>
                                                    </Col>
                                                    <Col>
                                                        <Edit item={item} />
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                ))
                                :
                                <div><h3 className='text-danger'>
                                    NO PRODUCTS TO DISPLY
                                </h3></div>
                        }


                    </Row>
                </div>
            </div>

        </>
    )
}

export default Home