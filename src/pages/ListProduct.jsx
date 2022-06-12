import {Table, Button, Modal, ModalBody} from 'react-bootstrap'
import NavbarAdmin from '../partials/NavbarAdmin';
import {Link} from 'react-router-dom'
import { useState } from 'react';

export default function ListProducts(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
    <>
    <NavbarAdmin></NavbarAdmin>
      <div className="container">
        <div className="row">
          <div className="col" style={{marginTop:'17vh'}}>
            <p style={{fontSize:'24px',
              color:'#FFFFFF'}}>List Product</p>


        <Table striped bordered hover variant="dark">
          <thead>
            <tr style={{fontFamily:'Roboto'}}>
              <th>No</th>
              <th style={{textAlign:'center'}}>Photo</th>
              <th style={{textAlign:'center'}}>Product Name</th>
              <th style={{textAlign:'center'}}>Product Desc</th>
              <th style={{textAlign:'center'}}>Price</th>
              <th style={{textAlign:'center'}}>Qty</th>
              <th style={{textAlign:'center'}}>Action</th>
            </tr>
          </thead>


          <tbody className='body-table'>
            <tr className='row-table'>
              <td>1</td>
              <td>Mouse.jpg</td>
              <td>Mouse</td>
              <td>lorem ipsum Mouse ...</td>
              <td>500.000</td>
              <td>600</td>
              <td>


              <Link style={{textDecoration:'none', color:'white'}} to='/edit-product'><Button variant="success" style={{width:'5rem'}}>Edit</Button></Link>
              
              <Button variant="danger" className='ms-3' data-toggle="modal" data-target="#exampleModal" style={{fontFamily:'Avenir',marginRight:'-2rem'}}
              onClick={handleShow}>Delete</Button>


    <Modal show={show} onHide={handleClose}>
        <ModalBody style={{padding:'4.5rem 1.5rem'}}>
          <h2 style={{marginTop:'-2.9rem'}}>Delete Data</h2>
            <p className="fw-bold"
              style={{fontFamily:'Roboto',
                fontSize:'21px',
                  display:'block'}}>
                    Are you sure want to delete this data?</p>

        <div className="row col-4 ms-5">
            <Button variant="success" 
              style={{width:'7rem',
                marginRight:'3.2rem',
                  marginLeft:'9.4rem',
                    marginTop:'1rem',
                      position:'absolute'}} onClick={handleClose}>Yes</Button>

            <Button variant="danger"
              style={{width:'7rem',
                marginLeft:'18.2rem',
                  marginTop:'1rem',
                    position:'absolute'}} onClick={handleClose}>No
            </Button>
        </div>
        </ModalBody>
    </Modal>

    </td>
    </tr>
    <tr className='row-table'>
        <td>2</td>
        <td>Keyboard.jpg</td>
        <td>Keyboard</td>
        <td>lorem ipsum Keyboard ...</td>
        <td>700.000</td>
        <td>600</td>
        <td>


          <Link style={{textDecoration:'none', color:'white'}} to='/edit-product'><Button variant="success" style={{width:'5rem'}}>Edit</Button></Link>
          <Button variant="danger" className='ms-3' data-toggle="modal" data-target="#exampleModal" style={{fontFamily:'Avenir',marginRight:'-2rem'}}
          onClick={handleShow}>Delete</Button>


        </td>
    </tr>
    <tr className='row-table'>
      <td>3</td>
      <td>Bag.jpg</td>
      <td>Bag</td>
      <td>lorem ipsum Bag ...</td>
      <td>300.000</td>
      <td>600</td>
      <td>


        <Link style={{textDecoration:'none', color:'white'}} to='/edit-product'><Button variant="success" style={{width:'5rem'}}>Edit</Button></Link>
        <Button variant="danger" className='ms-3' data-toggle="modal" data-target="#exampleModal" style={{fontFamily:'Avenir',marginRight:'-2rem'}}
        onClick={handleShow}>Delete</Button>


      </td>
    </tr>
    <tr className='row-table'>
      <td>4</td>
      <td>Stationary.jpg</td>
      <td>Stationary</td>
      <td>lorem ipsum Stationary ...</td>
      <td>25.000</td>
      <td>600</td>
      <td>


        <Link style={{textDecoration:'none', color:'white'}} to='/edit-product'><Button variant="success" style={{width:'5rem'}}>Edit</Button></Link>
        <Button variant="danger" className='ms-3' data-toggle="modal" data-target="#exampleModal" style={{fontFamily:'Avenir',marginRight:'-2rem'}}
        onClick={handleShow}>Delete</Button>


      </td>
    </tr>
    <tr className='row-table'>
      <td>5</td>
      <td>Doll.jpg</td>
      <td>Doll</td>
      <td>lorem ipsum Doll ...</td>
      <td>125.000</td>
      <td>600</td>
      <td>
        <Link style={{textDecoration:'none', color:'white'}} to='/edit-product'><Button variant="success" style={{width:'5rem'}}>Edit</Button></Link>
        <Button variant="danger" className='ms-3' data-toggle="modal" data-target="#exampleModal" style={{fontFamily:'Avenir',marginRight:'-2rem'}}
        onClick={handleShow}>Delete</Button>
      </td>
    </tr>


    <tr className='row-table'>
      <td>6</td>
      <td>Pillow.jpg</td>
      <td>Pillow</td>
      <td>lorem ipsum Pillow ...</td>
      <td>300.000</td>
      <td>600</td>
      <td>
        <Link style={{textDecoration:'none', color:'white'}} to='/edit-product'><Button variant="success" style={{width:'5rem'}}>Edit</Button></Link>
        <Button variant="danger" className='ms-3' data-toggle="modal" data-target="#exampleModal" style={{fontFamily:'Avenir',marginRight:'-2rem'}}
        onClick={handleShow}>Delete</Button>
      </td>
    </tr>
  </tbody>
</Table>
</div>
</div>
        </div>
        </>
    );
}