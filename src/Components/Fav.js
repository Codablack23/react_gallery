import Images from "./images";
import Selected from "./Selected"


const Favourite = () => {
    return ( 
      
         <div className="main p-3">
          <h6>FAVORITES</h6>
         <div className="container">
             <div className="row">
             <div className="">
            Your Favourite Appear Here
          </div>
                 <div className="col-12 col-md-8 order-2 order-md-1">
                  <Images/>
                 </div>
                 <div className="col-12 col-md-4 order-1 selected sticky-top order-md-2">
                  <Selected/>
                 </div>
             </div>
         </div>
        </div>
     );
}
 
export default Favourite;