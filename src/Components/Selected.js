export default function Selected(){
  return(
      <div className="w3-card w3-text-light-grey selected-bar" style={{height:"100%"}}>
            <div className="p-4 w3-center">
               <h6>Your Selected Photo Shows Here</h6>
            </div>
          <div className="main-img">
            <img src="https://ik.imagekit.io/pwoktv1v4nd/default-image.jpg" alt="" className="img-fluid" />
          </div>
          <div className="accordion m-2 w3-card-2 w3-text-light-grey" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" style={{background: "#424242"}}>
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                MYIMG.PNG
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
               <div className="description">
                  <h6>Description</h6>
                  <hr className="w3-light-grey"/>
                  <div className="w3-center">
                  <span>Size : 968px X 1024px </span><br />
                  <span>Photgrapher : John Doe</span>
                  </div>
               </div>
              <hr className="w3-light-grey"/>
              <div className="w3-center">
                <button className="d-btn">Download <i className="bi bi-download" style={{marginLeft:"7px"}}></i> </button>
              </div>
              </div>
            </div>
          </div>
         </div>
      </div>
  )
}