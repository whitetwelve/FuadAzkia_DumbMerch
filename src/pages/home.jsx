import Keyboard from '../assets/img/Keyboard.png'
import Mouse from '../assets/img/Mouse.png'
import NavbarHome from '../partials/NavabarUser'

export default function Home(){
    return(
        <>
        <NavbarHome/>
    <div class="row" style={{marginTop:'5rem'}}>
  <div class="col-sm-6">
      <p className="ms-5 my-3"style={{fontSize:'24px', 
      color:'rgba(247, 77, 77, 1)'}}>Product</p>
<div className="card d-inline-flex" style={{width:'241px',
    height:'410px',
        marginLeft:'3rem',
            borderStyle:'none'}}>
                <img src={Mouse} className="card-img-top" 
                    alt="MousePict" style={{height: '312px'}}/>
  <div className="card-body" style={{backgroundColor:'#212121',borderRadius:'0px 0px 5px 5px'}}>
    <h5 className="card-title" style={{fontStyle:'18px', 
        color:'rgba(247, 77, 77, 1)', 
            lineHeight:'25px'}}>Mouse</h5>
                <p className="card-text" style={{fontSize:'14px', 
                    lineHeight:'19px',
                        fontWeight:'400',
                            fontStyle:'normal',
                                color:'#FFFFFF'}}>Rp.500.000<br/>
                                Stock : 600</p>
    </div>
</div>

<div className="card d-inline-flex ms-3" style={{width:'241px',
    height:'410px',
        borderRadius:'5px',
        marginLeft:'3rem',
        borderStyle:'none'}}>
  <img src={Keyboard} className="card-img-top" alt="KeyboardPict" style={{height: '312px'}}/>
<div className="card-body" style={{backgroundColor:'#212121',borderRadius:'0px 0px 5px 5px'}}>
    <h5 className="card-title" style={{fontStyle:'18px', 
    color:'rgba(247, 77, 77, 1)', 
        lineHeight:'25px'}}>Keyboard</h5>
    <p className="card-text" style={{fontSize:'14px', 
        lineHeight:'19px',
            fontWeight:'400',
                fontStyle:'normal',
                    color:'#FFFFFF'}}>Rp.700.000<br/>
                                    Stock : 600</p>
            </div>
        </div>
    </div>
</div>
               </>
    )
}