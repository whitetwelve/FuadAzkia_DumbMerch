import NavbarUser from '../partials/NavabarUser'
import CewekKece from '../assets/img/about-us.avif'
import CEO from '../assets/img/tom.webp'
import { useNavigate } from 'react-router-dom'
const AboutUs = () =>{

    const navigate = useNavigate()

    const toNavigate = () =>{
        navigate('/')
    }
    return(
        <>
        <NavbarUser></NavbarUser>
        <div className="container mt-5 p-5">
            <div className="text-center">
                <h1 className="fw-bold" id='au1'>Our DumbMerch</h1>
                <p id="au2">Since 2020, James Bond was founder with his brilliant idea. Build your fashion you'd wear everyday here</p>
                
                <div className="icon">
                    <img className="img-fluid rounded mx-auto" src={CewekKece}/>
                </div>
                
                <div className="mt-5">
                    <p id="au3">
                        "To understand the care we put into each piece, you've to seen it in action.
                        We have a painstaking attention to detail, quality and construction because
                        we see our pieces as a testament to the significance of this time. It's
                        the anti "old shirt" meanwhile it's the uniform for those who share our 
                        belief that Otium is the most important time of the day."
                    </p>
                </div>

                <div className="row mt-5">
                <div id="au4" className="card" style={{width:'18rem'}}>
                    <img className="card-img-top rounded" src={CEO} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">James Bond</h5>
                        <p>Our CEO DumbMerch</p>
                    </div>
                </div>
                </div>

                <div className="d-inline">
                    <button className='btn btn-primary mx-4' style={{width:'8rem'}}>Contact Us</button>
                    <button className='btn btn-success' onClick={toNavigate}>Back to Home</button>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default AboutUs