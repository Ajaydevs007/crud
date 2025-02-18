import React, { useContext } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Productdetails } from '../contextapi/ContextApi';


function Edit({ item }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { storeproducts, setproductdetails } = useContext(Productdetails)

  const [edit, setedit] = useState({ id:item?.id, image: item?.image })


  const handleupdate = () => {

    const { id, image } = edit
    if (id && image) {
      const res = storeproducts.map((item) => item.id == id ? { ...item, id, image } : item)
      setproductdetails(res)
      handleClose()
    }

  }

  return (
    <>

      <button className='btn' onClick={handleShow}>
        <i className="fa-regular fa-pen-to-square" />
      </button>



      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div>

            <FloatingLabel controlId="floatingInput" label="ProductId" className="mb-3">
              <Form.Control type="text" placeholder="" onChange={(e) => setedit({ ...edit, id: e.target.value })} value={edit?.id} />
            </FloatingLabel>
            <FloatingLabel controlId="floating" label="image address">
              <Form.Control type="text" placeholder="Password" onChange={(e) => setedit({ ...edit, image: e.target.value })} value={edit?.image}/>
            </FloatingLabel>

          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleupdate}>Add Product</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Edit