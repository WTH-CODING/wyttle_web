import React from 'react'
import gift from '../Assets/gift.png'

function DealsSlider( {title="name", title2}) {
    return (
        <div>
            <div className="row mt-5">
                <div className="col-md-1 m-3">
                    <img alt="..." src={gift} />
                </div>
                <div className="col-md-5 m-3" style={{alignSelf: "center"}}>
                    <div className="row" style={{textAlign: "left"}}>
                        <h3 style={{padding:0,color: "#555555"}}>{title2}</h3>
                    </div>
                    <div className="row" style={{color: "#555555"}}>
                            More offers for you
                    </div>
                </div>
                <div className="col-md-5" style={{alignSelf: "center"}}>
                    <button className="btn btn-primary" style={{float: "right"}}>
                        View All
                    </button>
                </div>
            </div>
            <div className="container-fluid">
            <div className="row">
        <div id={title} className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
        <div className="row">
        <div className="col-md-3 mt-2" style={{maxHeight: "250px"}}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Daisy_G%C3%A4nsebl%C3%BCmchen_Bellis_perennis_01.jpg" style={{borderRadius: "10%", maxHeight:"100%"}} className="d-block w-100" alt="..."/>
        </div>
        <div className="col-md-3 mt-2" style={{maxHeight: "250px"}}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Daisy_G%C3%A4nsebl%C3%BCmchen_Bellis_perennis_01.jpg" style={{borderRadius: "10%", maxHeight:"100%"}} className="d-block w-100" alt="..."/>
        </div>
        <div className="col-md-3 mt-2" style={{maxHeight: "250px"}}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Daisy_G%C3%A4nsebl%C3%BCmchen_Bellis_perennis_01.jpg" style={{borderRadius: "10%", maxHeight:"100%"}} className="d-block w-100" alt="..."/>
        </div>
        <div className="col-md-3 mt-2" style={{maxHeight: "250px"}}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Daisy_G%C3%A4nsebl%C3%BCmchen_Bellis_perennis_01.jpg" style={{borderRadius: "10%", maxHeight:"100%"}} className="d-block w-100" alt="..."/>
        </div>
    </div>
    </div>
    <div className="carousel-item">
    <div className="row">
        <div className="col-md-3 mt-2" style={{maxHeight: "250px"}}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Daisy_G%C3%A4nsebl%C3%BCmchen_Bellis_perennis_01.jpg" style={{borderRadius: "10%", maxHeight:"100%"}} className="d-block w-100" alt="..."/>
        </div>
        <div className="col-md-3 mt-2" style={{maxHeight: "250px"}}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Daisy_G%C3%A4nsebl%C3%BCmchen_Bellis_perennis_01.jpg" style={{borderRadius: "10%", maxHeight:"100%"}} className="d-block w-100" alt="..."/>
        </div>
        <div className="col-md-3 mt-2" style={{maxHeight: "250px"}}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Daisy_G%C3%A4nsebl%C3%BCmchen_Bellis_perennis_01.jpg" style={{borderRadius: "10%", maxHeight:"100%"}} className="d-block w-100" alt="..."/>
        </div>
    </div>
    </div>
    <div className="carousel-item">
    <div className="row">
        <div className="col-md-3 mt-2" style={{maxHeight: "250px"}}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Daisy_G%C3%A4nsebl%C3%BCmchen_Bellis_perennis_01.jpg" style={{borderRadius: "10%", maxHeight:"100%"}} className="d-block w-100" alt="..."/>
        </div>
        <div className="col-md-3 mt-2" style={{maxHeight: "250px"}}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Daisy_G%C3%A4nsebl%C3%BCmchen_Bellis_perennis_01.jpg" style={{borderRadius: "10%", maxHeight:"100%"}} className="d-block w-100" alt="..."/>
        </div>
        <div className="col-md-3 mt-2" style={{maxHeight: "250px"}}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Daisy_G%C3%A4nsebl%C3%BCmchen_Bellis_perennis_01.jpg" style={{borderRadius: "10%", maxHeight:"100%"}} className="d-block w-100" alt="..."/>
        </div>
        <div className="col-md-3 mt-2" style={{maxHeight: "250px"}}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Daisy_G%C3%A4nsebl%C3%BCmchen_Bellis_perennis_01.jpg" style={{borderRadius: "10%", maxHeight:"100%"}} className="d-block w-100" alt="..."/>
        </div>
    </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target={`#${title}`} data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target={`#${title}`} data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" ></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
        </div>
        </div>
    )
}

export default DealsSlider
