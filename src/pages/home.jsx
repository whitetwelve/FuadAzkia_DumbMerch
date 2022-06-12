import NavbarHome from '../partials/NavbarUser'
import DummyProduct from '../DummyData/products'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Home(){

    const [products] = useState(DummyProduct)
    console.log(products);
    return(
    <>
    <NavbarHome/>
    <div className="title-content">
        <p id="title-home" className="ms-5 my-3"style={{fontSize:'24px',color:'rgba(247, 77, 77, 1)'}}>Product</p>
    </div>

    <div className="container-fluid">
        <div className="row" id='row-home'>

    {products.map((data, id)=>(
        <div className="col-4 mb-5">           
            <div key={id} className="card mt-5" id="card-home" style={{width:'20rem'}}>
                <img id="img-home" className="card-img-top" src={data.img} alt="Card image cap"/>
                    
                    <div className="card-body">
                        <div className="card-title">
                            <h3 style={{color:'rgba(247, 77, 77, 1)'}}>{data.title}</h3>
                        </div>

                        <div className="card-bottom">
                            <p>{data.price}</p>
                            <p>Stock : {data.stock}</p>
                        </div>
                    </div>     
            </div>
        </div>
    ))}
    </div>
</div>
    </>
    )
}