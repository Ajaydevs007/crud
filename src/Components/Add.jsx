import React, { useContext } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Productdetails } from '../contextapi/ContextApi';


function Add() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { storeproducts, setproductdetails } = useContext(Productdetails)

  const [addproducts, setaddproducts] = useState({ id: "", image: "" })
  // console.log(addproducts);
  

  const handleAdd=()=>{

    setproductdetails([...storeproducts,addproducts])
    setaddproducts({ id: "", image: "" })
    handleClose()

  }

  return (
    <>

      <button className='btn btn-primary' onClick={handleShow}>ADD PRODUCTS</button>


      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div>

            <FloatingLabel controlId="floatingInput" label="ProductId" className="mb-3">
              <Form.Control type="text" placeholder="" onChange={(e)=>setaddproducts({...addproducts,id:e.target.value})}/>
            </FloatingLabel>
            <FloatingLabel controlId="floating" label="image address">
              <Form.Control type="text" placeholder="Password" onChange={(e)=>setaddproducts({...addproducts,image:e.target.value})} />
            </FloatingLabel>

          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>Add Product</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Add