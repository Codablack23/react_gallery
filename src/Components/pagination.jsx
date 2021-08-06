export default function Pagination(){
    return(
    <header className="navigation">
    <nav aria-label="Page navigation example">
       <ul className="pagination justify-content-end">
               <li className="page-item disabled">
                  <a className="page-link" href="#" tabIndex="-1" aria-disabled="true"><i className="bi bi-chevron-double-left"></i></a>
               </li>
               <li className="page-item">
               <a className="page-link" href="#"><i className="bi bi-chevron-double-right"></i></a>
               </li>
       </ul>
    </nav>
    </header>
    )
}