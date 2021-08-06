import { BrowserRouter as Router, Switch,Route,Link } from "react-router-dom";
import { useState } from 'react'
import Container from '@material-ui/core/Container'
import { useQuery,QueryClient,QueryClientProvider } from 'react-query'
import Gallery from "./Components/Gallery";
import Favourite from "./Components/Fav"

const queryClient = new QueryClient();
const App=()=> {
  return (
    <Router>
    <div className="App w3-text-light-grey">
       <div className="w3-sidebar w3-bar-block w3-card w3-hide-small w3-fixed w3-text-light-grey" style={{width:"25%",height:"100vh"}}>
         <h3 className="w3-bar-item">
         <i className="bi bi-grid-1x2" style={{marginRight:"4px"}}></i>
            My Gallery
            </h3>
         <hr className="w3-grey" />
         <Link to="/" className="w3-bar-item w3-button">
         <i className="bi bi-images" style={{marginRight:"4px"}}></i>
         All Images
         </Link>
         <Link to="/favorites" className="w3-bar-item w3-button">
         <i className="bi bi-star-fill" style={{marginRight:"4px"}}></i>
            My Favourites
            </Link>
       </div>
       <QueryClientProvider client={queryClient}>
          <Switch>
           <Route exact path='/'>
            <Gallery/>
           </Route>
           <Route exact path='/favorites'>
            <Favourite/>
           </Route>
        </Switch>
     
    </QueryClientProvider>
    </div>
     </Router>
  )
}

export default App;
