import {Table, Button,Modal,ModalBody} from 'react-bootstrap'
import NavbarAdmin from '../partials/navbarAdmin';
import {Link} from 'react-router-dom'
import { useState } from 'react';

export default function ListCategory(){

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
                color:'#FFFFFF'}}>List Category</p>
        <Table striped bordered hover variant="dark">
  <thead>
    <tr style={{fontFamily:'Roboto'}}>
      <th>No</th>
      <th style={{textAlign:'center'}}>Category Name</th>
      <th style={{textAlign:'center'}}>Action</th>
    </tr>
  </thead>
  <tbody className='body-table'>
    <tr className='row-table'>
      <td>1</td>
      <td>Mouse</td>
      <td>
      <Button variant="success" style={{width:'8rem',height:'5.7vh',marginLeft:'18rem',fontFamily:'Avenir'}}><Link style={{textDecoration:'none', color:'white'}} to='/edit-category'>Edit</Link></Button>
      <Button variant="danger" className='ms-3' data-toggle="modal" data-target="#exampleModal" style={{width:'8rem',height:'5.7vh',fontFamily:'Avenir'}} onClick={handleShow}>Delete</Button>
      
      <Modal show={show} onHide={handleClose}>
        <ModalBody style={{padding:'4.5rem 1.5rem'}}>
                <h2 style={{marginTop:'-2.9rem'}} onClick={handleShow}>Delete Data</h2>
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
            position:'absolute'
        }} onClick={handleClose}>
            Yes
        </Button>
        <Button variant="danger"
            style={{width:'7rem',
            marginLeft:'18.2rem',
            marginTop:'1rem',
            position:'absolute'}} onClick={handleClose}>
            No
        </Button>
        </div>
        </ModalBody>
    </Modal>
      </td>
    </tr>
    <tr className='row-table'>
      <td>2</td>
      <td>Keyboard</td>
      <td><Button variant="success" style={{width:'8rem',height:'5.7vh',marginLeft:'18rem',fontFamily:'Avenir'}}><Link style={{textDecoration:'none', color:'white'}} to='/edit-category'>Edit</Link></Button>
      <Button variant="danger" className='ms-3' style={{width:'8rem',height:'5.7vh',fontFamily:'Avenir'}} onClick={handleShow}>Delete</Button></td>
    </tr>
    <tr className='row-table'>
      <td colSpan={1}>3</td>
      <td colSpan={1}>Bag</td>
      <td colSpan={1}><Button variant="success" style={{width:'8rem',height:'5.7vh',marginLeft:'18rem',fontFamily:'Avenir'}}><Link style={{textDecoration:'none', color:'white'}} to='/edit-category'>Edit</Link></Button>
      <Button variant="danger" className='ms-3' style={{width:'8rem',height:'5.7vh',fontFamily:'Avenir'}} onClick={handleShow}>Delete</Button></td>
    </tr>
    <tr className='row-table'>
      <td colSpan={1}>4</td>
      <td colSpan={1}>Stationary</td>
      <td colSpan={1}><Button variant="success" style={{width:'8rem',height:'5.7vh',marginLeft:'18rem',fontFamily:'Avenir'}}><Link style={{textDecoration:'none', color:'white'}} to='/edit-category'>Edit</Link></Button>
      <Button variant="danger" className='ms-3' style={{width:'8rem',height:'5.7vh',fontFamily:'Avenir'}} onClick={handleShow}>Delete</Button>
      </td>
    </tr>
    <tr className='row-table'>
      <td colSpan={1}>5</td>
      <td colSpan={1}>Doll</td>
      <td colSpan={1}><Button variant="success" style={{width:'8rem',height:'5.7vh',marginLeft:'18rem',fontFamily:'Avenir'}}><Link style={{textDecoration:'none', color:'white'}} to='/edit-category'>Edit</Link></Button>
      <Button variant="danger" className='ms-3' style={{width:'8rem',height:'5.7vh',fontFamily:'Avenir'}} onClick={handleShow}>Delete</Button></td>
    </tr>
    <tr className='row-table'>
      <td colSpan={1}>6</td>
      <td colSpan={1}>Pillow</td>
      <td colSpan={1}><Button variant="success" style={{width:'8rem',height:'5.7vh',marginLeft:'18rem',fontFamily:'Avenir'}}><Link style={{textDecoration:'none', color:'white'}} to='/edit-category'>Edit</Link></Button>
      <Button variant="danger" className='ms-3' style={{width:'8rem',height:'5.7vh',fontFamily:'Avenir'}} onClick={handleShow}>Delete</Button></td>
    </tr>
  </tbody>
</Table>
</div>
</div>
        </div>
        </>
    );
}