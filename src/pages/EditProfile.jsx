import NavbarHome from "../partials/NavabarUser";
import "../assets/css/style.css"

const EditProfile = () =>{
    return(
    <>
    <NavbarHome></NavbarHome>
        <div className="container">
            <form style={{color:'white'}}>
                <h1 className="fw-bolder text-center mt-5 p-5">UPDATE YOUR DATA</h1>

                    <div className="row mx-auto col-6">
                        <label>Name</label>
                        <input type="text" name="fullname" className="form-control mb-4" autocomplete="off"/>
                    </div>

                    <div className="row mx-auto col-6">
                        <label>Email</label>
                        <input type="email" autocomplete="off" className="form-control mb-4" name="email"/>
                    </div>

                    <div className="row mx-auto col-6">
                        <label>Phone Number</label>
                        <input type="text" autocomplete="off" className="form-control mb-4" name="phone"/>
                    </div>

                    <div className="row mx-auto col-6">
                        <select name="gender" className="form-control mb-1 mt-3">
                            <option selected hidden>Gender</option>
                            <option value="Pria">Pria</option>
                            <option value="Wanita">Wanita</option>
                            <option value="wkw">Lucinta</option>
                        </select>
                    </div>
                        <br/>

                    <div className="row mx-auto col-6">
                        <label>Address</label>
                        <textarea style={{height:'7.5rem'}} type="text" autocomplete="off" className="form-control mb-4" name="phone"></textarea>
                    </div>

                    <div className="row mx-auto col-6">
                        <label >Upload your photo</label>
                        <input type="file" className="form-control mb-4"/>
                    </div>

                    <div className="row mx-auto col-6 mb-5 mt-2">
                        <button type="submit" className="btn btn-danger rounded">Save</button>
                    </div>
            </form>
        </div>
    </>
    )
}

export default EditProfile