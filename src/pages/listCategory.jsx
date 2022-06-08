import {Table, Button} from 'react-bootstrap'
import NavbarAdmin from '../partials/navbarAdmin';

export default function ListCategory(){
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
      <Button variant="success" style={{width:'8rem',height:'5.7vh',marginLeft:'18rem',fontFamily:'Avenir'}}>Edit</Button>
      <Button variant="danger" className='ms-3' style={{width:'8rem',height:'5.7vh',fontFamily:'Avenir'}}>Delete</Button>
      </td>
    </tr>
    <tr className='row-table'>
      <td>2</td>
      <td>Keyboard</td>
      <td><Button variant="success" style={{width:'8rem',height:'5.7vh',marginLeft:'18rem',fontFamily:'Avenir'}}>Edit</Button>
      <Button variant="danger" className='ms-3' style={{width:'8rem',height:'5.7vh',fontFamily:'Avenir'}}>Delete</Button></td>
    </tr>
    <tr className='row-table'>
      <td colSpan={1}>3</td>
      <td colSpan={1}>Bag</td>
      <td colSpan={1}><Button variant="success" style={{width:'8rem',height:'5.7vh',marginLeft:'18rem',fontFamily:'Avenir'}}>Edit</Button>
      <Button variant="danger" className='ms-3' style={{width:'8rem',height:'5.7vh',fontFamily:'Avenir'}}>Delete</Button></td>
    </tr>
    <tr className='row-table'>
      <td colSpan={1}>4</td>
      <td colSpan={1}>Stationary</td>
      <td colSpan={1}><Button variant="success" style={{width:'8rem',height:'5.7vh',marginLeft:'18rem',fontFamily:'Avenir'}}>Edit</Button>
      <Button variant="danger" className='ms-3' style={{width:'8rem',height:'5.7vh',fontFamily:'Avenir'}}>Delete</Button></td>
    </tr>
    <tr className='row-table'>
      <td colSpan={1}>5</td>
      <td colSpan={1}>Doll</td>
      <td colSpan={1}><Button variant="success" style={{width:'8rem',height:'5.7vh',marginLeft:'18rem',fontFamily:'Avenir'}}>Edit</Button>
      <Button variant="danger" className='ms-3' style={{width:'8rem',height:'5.7vh',fontFamily:'Avenir'}}>Delete</Button></td>
    </tr>
    <tr className='row-table'>
      <td colSpan={1}>6</td>
      <td colSpan={1}>Pillow</td>
      <td colSpan={1}><Button variant="success" style={{width:'8rem',height:'5.7vh',marginLeft:'18rem',fontFamily:'Avenir'}}>Edit</Button>
      <Button variant="danger" className='ms-3' style={{width:'8rem',height:'5.7vh',fontFamily:'Avenir'}}>Delete</Button></td>
    </tr>
  </tbody>
</Table>
</div>
</div>
        </div>
        </>
    );
}