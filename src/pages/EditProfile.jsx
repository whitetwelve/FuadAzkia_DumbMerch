import NavbarHome from "../partials/NavbarUser";
import "../assets/css/style.css"
import { useParams } from "react-router-dom";
import { useState } from "react";


const EditProfile = () =>{

    // FOR GET ID 
    const id = useParams()
    // console.log('Id :' + id.id)

    // FOR GET DATA 
    const [data, getData] = useState({
        fullname:'',
        email:'',
        phone:'',
        gender:'',
        address:'',
        img:''
    })

    const forUpdateData = (e) =>{
        getData({
            ...data,
            [e.target.name]: e.target.value 
        })
    }

    const forSubmitData = (e) =>{
        e.preventDefault()
        console.log(data);
    }


    return(
    <>
    <NavbarHome></NavbarHome>
        <div className="container">
            <form onSubmit={forSubmitData} style={{color:'white'}}>
                <h1 className="fw-bolder text-center mt-5 p-5">UPDATE YOUR DATA</h1>

                    <div className="row mx-auto col-6">
                        <label>Name</label>
                        <input onChange={forUpdateData} type="text" value={data.fullname} name="fullname" className="form-control mb-4" autocomplete="off"/>
                    </div>

                    <div className="row mx-auto col-6">
                        <label>Email</label>
                        <input onChange={forUpdateData} type="email" value={data.email} autocomplete="off" className="form-control mb-4" name="email"/>
                    </div>

                    <div className="row mx-auto col-6">
                        <label>Phone Number</label>
                        <input onChange={forUpdateData} type="text" value={data.phone} autocomplete="off" className="form-control mb-4" name="phone"/>
                    </div>

                    <div className="row mx-auto col-6">
                        <select onChange={forUpdateData} name="gender" className="form-control mb-1 mt-3">
                            <option selected hidden>Gender</option>
                            <option value="Pria">Pria</option>
                            <option value="Wanita">Wanita</option>
                            <option value="Lucinta">Lucinta</option>
                        </select>
                    </div>
                        <br/>

                    <div className="row mx-auto col-6">
                        <label>Address</label>
                        <textarea style={{height:'7.5rem'}} onChange={forUpdateData} value={data.address} type="text" autocomplete="off" className="form-control mb-4" name="address"></textarea>
                    </div>

                    <div className="row mx-auto col-6">
                        <label >Upload your photo</label>
                        <input onChange={forUpdateData} type="file" value={data.img} className="form-control mb-4" name="img"/>
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