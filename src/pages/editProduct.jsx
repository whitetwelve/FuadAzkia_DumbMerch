import NavbarAdmin from "../partials/NavbarAdmin";

const EditProduct = () => {
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
                <div className="mt-3 mb-5 ms-4" style={{width:'79rem'}}>
                    <div className="mb-4">
                        <input class="form-control p-2 upload-box fw-light text-white" type="file" style={{background: 'rgba(210, 210, 210, 0.25)'}}/>
                    </div>
                    <div className="mt-4">
                        <input className="form-control form-input p-2" type="text" placeholder="Product Name" style={{background: 'rgba(210, 210, 210, 0.25)'}}/>
                    </div>
                    <div className="mt-4">
                        <textarea className="form-control" cols="30" rows="4" placeholder="Description" style={{background: 'rgba(210, 210, 210, 0.25)'}}></textarea>
                    </div>
                    <div className="mt-4">
                        <input className="form-control form-input p-2" type="text" placeholder="Price" style={{background: 'rgba(210, 210, 210, 0.25)'}}/>
                    </div>
                    <div className="mt-4 mb-5">
                        <input className="form-control form-input p-2" type="text" placeholder="Quantity" style={{background: 'rgba(210, 210, 210, 0.25)'}}/>
                    </div>
                    <div className="mt-4">
                    <button type="button" class="btn btn-success" style={{width:'79rem'}}>Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProduct