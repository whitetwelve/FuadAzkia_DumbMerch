import NavbarAdmin from "../partials/NavbarAdmin";
import {Form, Button} from 'react-bootstrap'
import { useState } from "react";


const EditCategory = () =>{

    const [data, getData] = useState({
        nameProduct:''
    })

    const changeEditCategory = (e) =>{
        getData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    const saveEditCategory = (e) =>{
        e.preventDefault()

        console.log(data);
    }

    return(
        <>
        <NavbarAdmin></NavbarAdmin>
            <Form onSubmit={saveEditCategory} style={{marginTop:"5rem", marginLeft:'4rem'}}>
                <Form.Group className="my-5" controlId="formBasicText">
                    <Form.Label style={{fontSize:'24px', 
                                            color:'#FFFFFF'
                                                ,lineHeight:'33px',
                                                    marginTop:'3rem',
                                                        marginBottom:'2.5rem'}}>Edit Category</Form.Label>
                        
                        <Form.Control type="text" onChange={changeEditCategory} name="nameProduct" style={{width:'76.3rem'}}/>
                </Form.Group>
                
                    <Button variant="success" type="submit" style={{padding:'8px 37rem'}}>Save</Button>
            </Form>
        </>
    )
}

export default EditCategory