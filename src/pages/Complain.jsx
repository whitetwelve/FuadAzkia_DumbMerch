import NavbarAdmin from "../partials/NavbarAdmin";
import siBule from "../assets/img/Profil.png"
import { useState } from "react";

export default function Complain(){

    const [data,setData] = useState({
        message:{
            input:''
        },
        from:'Admin'
    })

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const input = document.querySelector('#pleaseInput').value

        setData({
            message: input,
            from : 'Admin'
        })
    }
    console.log(data);

    
    return(
    <>
        <NavbarAdmin></NavbarAdmin>

        <div className="mt-5 mb-5 ms-auto me-auto text-white" id="complain-user">
            <div className="d-flex" style={{ height: '75vh' }}>
                <div id='contact' className="d-flex flex-column">

                    {/* LEFT SIDE CUSTOMER */}
                    <div className="d-flex mb-3">
                        <img id="com1" src={siBule} alt="sibule" className="img-fluid rounded-pill" />
                            <div className="d-flex flex-column mt-3 ms-3">
                                <h2>Bule Kece</h2>
                                <p>Hello Admin, I Need Your Help</p>
                            </div>
                    </div>

                    <div className="d-flex mb-3">
                        <img id ="com2" src="https://source.unsplash.com/1280x960?girl" alt="goodGirl" className="img-fluid rounded-pill" />
                        <div className="d-flex flex-column mt-3 ms-3">
                            <h2>Pretty Girl</h2>
                            <p>Hello Admi, This Problem Product to Me</p>
                        </div>
                    </div>
                    {/* LEFT SIDE CUSTOMER END */}      

                    <div id="ver1">
                    </div>

                </div>
                <hr/>
            <div className="for-user">
                <img src={siBule} className="rounded-pill" alt="SiBule" style={{width:'4rem',
                    height:'9.5vh',
                        position:'absolute',
                            top:'56vh',
                                left:'31rem'}}/>

                <div className="chat-user">
                    <div className="hi">Hello Admin, I Need Your Help</div>
                </div>
                <div className="triangle-left"></div>
            </div>

                <form id="com5" onSubmit={handleOnSubmit}>
                    <div className="row mt-4 mb-5">
                        <div className="col mb-4">
                            <input className="form-control" type="text" placeholder="Send Message" id="pleaseInput" autoComplete="off" style={{color:'white'}}/>
                        </div>

                        <div className="col mb-4">
                            <button className="btn btn-danger rounded-pill" type="submit">Send
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
    )
}