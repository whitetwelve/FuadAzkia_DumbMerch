import { useState } from "react";
import NavbarAdmin from "../partials/NavbarAdmin";


const EditProduct = () => {

    const [product, getProduct] = useState({
        img:'',
        productName :'',
        description :'',
        price : '',
        qty : ''
    })

    const changeEditProduct = (e) =>{
        getProduct({
            ...product,
            [e.target.name] : e.target.value
        })
    }


    const saveEditProduct = (e) =>{
        e.preventDefault()

        console.log(product);
        }
    
    return (
        <>
        <NavbarAdmin></NavbarAdmin>

            <div className="container-fluid">
                <div className="title-content">
                    <p className="text-white mb-4 fw-bold" style={{
                        fontSize:'24px',
                            marginTop:'7rem',
                                marginLeft:'1.5rem'}}>Edit Product</p>
                </div>
            
            <form onSubmit={saveEditProduct}>
                <div className="mt-3 mb-5 ms-4" style={{width:'79rem'}}>
                    <div className="mb-4">
                        <input name="img" onChange={changeEditProduct} className="form-control p-2 upload-box fw-light text-white" type="file" style={{background: 'rgba(210, 210, 210, 0.25)'}}/>
                    </div>

                    <div className="mt-4">
                        <input name="productName" onChange={changeEditProduct} className="form-control form-input p-2 text-white" type="text" placeholder="Product Name" style={{background: 'rgba(210, 210, 210, 0.25)'}}/>
                    </div>

                    <div className="mt-4">
                        <textarea name="description" onChange={changeEditProduct} className="form-control text-white" cols="30" rows="4" placeholder="Description" style={{background: 'rgba(210, 210, 210, 0.25)'}}></textarea>
                    </div>

                    <div className="mt-4">
                        <input name="price" onChange={changeEditProduct} className="form-control form-input p-2 text-white" type="text" placeholder="Price" style={{background: 'rgba(210, 210, 210, 0.25)'}}/>
                    </div>

                    <div className="mt-4 mb-5">
                        <input name="qty" onChange={changeEditProduct} className="form-control form-input p-2 text-white" type="text" placeholder="Quantity" style={{background: 'rgba(210, 210, 210, 0.25)'}}/>
                    </div>
                    
                    <div className="mt-4">
                        <button type="submit" class="btn btn-success" style={{width:'79rem'}}>Save</button>
                    </div>
                </div>
            </form>
        </div>
        </>
    )
}

export default EditProduct