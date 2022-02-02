import Images from "./images";
import Selected from "./Selected"
import Pagination from './pagination';
import {useEffect} from 'react'
import {createClient} from 'pexels'

const client = createClient('563492ad6f91700001000001ee277c74d4fc4168ad0c635f9776fea3');

// client.photos.curated({ per_page: 1 }).then(photos => {...});

//    async function grabImages(){
//     const data = await axios.get("https://api.pexels.com/v1/curated",
//      {
//        headers:{"Authorization":"563492ad6f91700001000001ee277c74d4fc4168ad0c635f9776fea3"},
//      }
//     )
    
//     return data.json;
// }
const Gallery = () => {
    // const {status,data}=useQuery('images',grabImages)
    useEffect(()=>{
     client.photos.curated({ per_page: 1 }).then(photos => {
          console.log(photos.photos)
     });
    },[])
   
    return ( 
        <div className="main p-3">
            
         <div className="container">
             <div className="row">
                 <div className="col-12 col-md-8 order-2 order-md-1">
                    <h6>ALL IMAGES</h6>           
                    <Pagination/>
                  <Images/>
                  <Pagination/>
                 </div>
                 <div className="col-12 col-md-4 order-1 selected sticky-top order-md-2">
                  <Selected/>
                 </div>
             </div>
         </div>
        </div>
     );
}
 
export default Gallery;
