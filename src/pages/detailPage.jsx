import Mouse from '../assets/img/Mouse.png'
import NavbarHome from '../partials/NavbarUser'

export default function DetailPage(){
    return(
        <>
        <NavbarHome/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <img src={Mouse} alt="MouseImg"/>
                    </div>

                    <div className="col-6">
                        <h5 className="my-3" style={{fontSize:'48px',color:'#F74D4D'}}>Mouse</h5>

                        <div className="content-body">
                            <p>Stock : 600</p>
                            <br/>
                            <p>
                            - Wireless Mouse <br/>
                            - Konektivitas wireless 2.4 GHz<br/>
                            - Jarak wireless hingga 10 m<br/> 
                            - Plug and Play<br/>
                            - Baterai tahan hingga 12 bulan
                            </p>

                        <div className="content-bottom">
                            <p style={{width:'38rem'}}>
                            Mouse Wireless Alytech AL - Y5D, hadir dengan desain 3 tombol mouse yang ringan dan mudah dibawa. Mouse ini menggunakan frekuensi radio 2.4GHz (bekerja hingga jarak 10m) dan fitur sensor canggih optik pelacakan dengan penerima USB yang kecil. Mouse ini didukung oleh 1x baterai AA (hingga 12 bulan hidup baterai). mendukung sistem operasi Windows 7,8, 10 keatas, Mac OS X 10.8 atau yang lebih baru dan sistem operasi Chrome OS. 
                            <p className="my-5" style={{fontSize:'24px',color:'#F74D4D',display:'flex',marginLeft:'30.2rem'}}>Rp.300.900</p>
                            </p>
                            
                            <button type="submit" class="btn btn-danger">Buy</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}